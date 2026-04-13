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
      <div className="bg-sage/20 rounded-3xl p-10 lg:p-14 text-center">
        <span className="text-5xl mb-6 block">🎉</span>
        <h3 className="text-2xl font-bold text-navy mb-3">
          C&apos;est envoye !
        </h3>
        <p className="text-text-light">
          On revient vers vous en moins de 48h. Promis.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-soft-gray border-2 border-transparent rounded-xl px-5 py-3.5 text-navy text-sm placeholder:text-text-light/50 focus:outline-none focus:border-coral focus:bg-white transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
            Votre entreprise *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="NaturaCorp"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
            Votre nom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Marie Dupont"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
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
            placeholder="marie@naturacorp.fr"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
            Telephone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+33 6 12 34 56 78"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="employees" className="block text-sm font-semibold text-navy mb-2">
            Combien de collaboratrices ?
          </label>
          <input
            type="text"
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Ex : 50"
          />
        </div>
        <div>
          <label htmlFor="source" className="block text-sm font-semibold text-navy mb-2">
            Comment nous avez-vous trouve ?
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
            <option value="recommendation">Bouche-a-oreille</option>
            <option value="search">Google</option>
            <option value="press">Presse / Media</option>
            <option value="event">Salon / Evenement</option>
            <option value="other">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
          Parlez-nous de votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="On vous ecoute ! Taille d'equipe, objectifs, questions..."
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Envoyer ma demande →
      </Button>
    </form>
  );
}
