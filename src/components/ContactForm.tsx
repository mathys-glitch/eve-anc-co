"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    employees: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-deep mb-3">C'est envoyé ! 🎉</h3>
        <p className="text-text-light text-lg">Notre équipe vous contacte dans les 48h avec un devis adapté à votre structure.</p>
      </div>
    );
  }

  const inputClasses =
    "w-full border border-warm-gray rounded-2xl px-6 py-3.5 text-deep text-sm placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-terra/20 focus:border-terra transition-all duration-200 bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-deep mb-2">Entreprise *</label>
          <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className={inputClasses} placeholder="NaturaCorp" />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-deep mb-2">Nom *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Marie Dupont" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-deep mb-2">Email *</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="marie@naturacorp.fr" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-deep mb-2">Téléphone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+33 6 12 34 56 78" />
        </div>
      </div>

      <div>
        <label htmlFor="employees" className="block text-sm font-semibold text-deep mb-2">Nombre de collaboratrices</label>
        <input type="text" id="employees" name="employees" value={formData.employees} onChange={handleChange} className={inputClasses} placeholder="Ex : 150" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-deep mb-2">Votre message *</label>
        <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Parlez-nous de votre projet..." />
      </div>

      <button
        type="submit"
        className="w-full bg-terra text-white font-semibold px-10 py-4 rounded-full hover:bg-terra-light transition-all duration-300 hover:shadow-xl cursor-pointer text-base"
      >
        Recevoir mon devis gratuit →
      </button>
    </form>
  );
}
