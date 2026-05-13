import { Resend } from "resend";

// Force runtime execution — this is a dynamic POST handler
export const dynamic = "force-dynamic";

type ContactPayload = {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  employees?: string;
  message?: string;
  // honeypot — bots fill this, humans don't
  website?: string;
};

const TO_EMAIL = "mathys@eve-and-co.com";

// Until eve-and-co.com is verified in Resend, use the sandbox sender.
// Once the domain is verified, set RESEND_FROM_EMAIL=devis@eve-and-co.com in env.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "EVE AND CO <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently succeed for bots
  if (payload.website && payload.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const company = (payload.company || "").trim();
  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const phone = (payload.phone || "").trim();
  const employees = (payload.employees || "").trim();
  const message = (payload.message || "").trim();

  // Server-side validation
  if (!company || !name || !email || !message) {
    return Response.json(
      { error: "Champs obligatoires manquants." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Email invalide." }, { status: 400 });
  }
  if (message.length > 5000 || company.length > 200 || name.length > 200) {
    return Response.json({ error: "Contenu trop long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return Response.json(
      { error: "Service d'envoi non configuré." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `🌿 Nouveau devis B2B — ${company} (${name})`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1A1A1A;">
      <h2 style="color: #3E5A4A; border-bottom: 2px solid #98CC5E; padding-bottom: 8px; margin-top: 0;">
        Nouveau lead B2B
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; font-weight: 600; width: 180px;">Entreprise</td><td>${escapeHtml(company)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Contact</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding: 8px 0; font-weight: 600;">Téléphone</td><td>${escapeHtml(phone)}</td></tr>` : ""}
        ${employees ? `<tr><td style="padding: 8px 0; font-weight: 600;">Collaboratrices</td><td>${escapeHtml(employees)}</td></tr>` : ""}
      </table>
      <div style="margin-top: 24px; padding: 16px; background-color: #F9F5F0; border-radius: 12px;">
        <p style="margin: 0 0 8px 0; font-weight: 600;">Message :</p>
        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #888;">
        Reçu via le formulaire B2B eve-and-co.com — Répondre à ce mail répond directement à ${escapeHtml(email)}.
      </p>
    </div>
  `;

  const text = [
    `Nouveau lead B2B`,
    ``,
    `Entreprise : ${company}`,
    `Contact    : ${name}`,
    `Email      : ${email}`,
    phone ? `Téléphone  : ${phone}` : null,
    employees ? `Collab.    : ${employees}` : null,
    ``,
    `Message :`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json(
        { error: "Échec de l'envoi du mail." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json(
      { error: "Erreur serveur inattendue." },
      { status: 500 }
    );
  }
}
