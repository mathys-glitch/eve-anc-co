"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    employees: "",
    message: "",
    source: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-cream p-10 lg:p-14 text-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-accent mx-auto mb-6"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8 12l3 3 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-2xl font-light text-charcoal mb-3">
          Merci pour votre demande
        </h3>
        <p className="text-text-light font-light">
          Notre equipe vous recontactera sous 48 heures.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-white border border-beige px-4 py-3 text-charcoal text-sm font-light placeholder:text-text-light/50 focus:outline-none focus:border-accent transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-xs tracking-widest uppercase text-text-light mb-2">
            Nom de l&apos;entreprise *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Votre entreprise"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-xs tracking-widest uppercase text-text-light mb-2">
            Nom du contact *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Prenom Nom"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs tracking-widest uppercase text-text-light mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="contact@entreprise.fr"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-text-light mb-2">
            Telephone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+33 1 23 45 67 89"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="employees" className="block text-xs tracking-widest uppercase text-text-light mb-2">
            Nombre de collaboratrices
          </label>
          <input
            type="text"
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Ex: 50"
          />
        </div>
        <div>
          <label htmlFor="source" className="block text-xs tracking-widest uppercase text-text-light mb-2">
            Comment nous avez-vous connu ?
          </label>
          <select
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Selectionnez</option>
            <option value="linkedin">LinkedIn</option>
            <option value="recommendation">Recommandation</option>
            <option value="search">Recherche Google</option>
            <option value="press">Presse / Media</option>
            <option value="event">Salon / Evenement</option>
            <option value="other">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-text-light mb-2">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Decrivez votre projet, vos besoins..."
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Envoyer ma demande
      </Button>
    </form>
  );
}
