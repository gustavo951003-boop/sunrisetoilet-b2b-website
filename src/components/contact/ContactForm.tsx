"use client";

import { type ChangeEvent, type FormEvent, type KeyboardEvent, useMemo, useState } from "react";
import { countryOptions } from "@/data/countries";

type ContactFormValues = {
  name: string;
  email: string;
  country: string;
  countryCode: string;
  whatsapp: string;
  message: string;
  companyWebsite: string;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  country: "",
  countryCode: "",
  whatsapp: "",
  message: "",
  companyWebsite: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [activeCountryIndex, setActiveCountryIndex] = useState(0);

  const filteredCountryOptions = useMemo(() => {
    const query = values.country.trim().toLowerCase();

    if (!query) {
      return countryOptions.slice(0, 10);
    }

    return countryOptions
      .filter((country) => {
        const label = `${country.name} ${country.code}`.toLowerCase();

        return label.includes(query);
      })
      .slice(0, 10);
  }, [values.country]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleCountryInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({
      ...current,
      country: event.target.value,
      countryCode: "",
    }));
    setActiveCountryIndex(0);
    setIsCountryMenuOpen(true);
  };

  const selectCountry = (country: (typeof countryOptions)[number]) => {
    setValues((current) => ({
      ...current,
      country: country.name,
      countryCode: country.code,
    }));
    setErrorMessage("");
    setStatus((current) => (current === "error" ? "idle" : current));
    setActiveCountryIndex(0);
    setIsCountryMenuOpen(false);
  };

  const handleCountryKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isCountryMenuOpen && ["ArrowDown", "ArrowUp"].includes(event.key)) {
      setIsCountryMenuOpen(true);
      return;
    }

    if (!filteredCountryOptions.length) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveCountryIndex((current) => (current + 1) % filteredCountryOptions.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveCountryIndex(
        (current) => (current - 1 + filteredCountryOptions.length) % filteredCountryOptions.length,
      );
    }

    if (event.key === "Enter" && isCountryMenuOpen) {
      event.preventDefault();
      selectCountry(filteredCountryOptions[activeCountryIndex]);
    }

    if (event.key === "Escape") {
      setIsCountryMenuOpen(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const matchedCountry = countryOptions.find(
      (country) => country.code === values.countryCode && country.name === values.country,
    );

    if (!matchedCountry) {
      setStatus("error");
      setErrorMessage("Please select a valid country from the country list.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          country: matchedCountry.name,
          countryCode: matchedCountry.code,
        }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Sorry, your message could not be sent.");
      }

      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Sorry, your message could not be sent. Please email Sales@sunrise-moulding.com directly.",
      );
    }
  };

  const isSending = status === "sending";

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <div className="contact-form-head">
        <span className="section-kicker">INQUIRY FORM</span>
        <h2>Send your product inquiry</h2>
        <p>
          Share your destination market, product category and quantity. Email and country are
          required so our sales team can reply with relevant export details.
        </p>
      </div>

      <div className="hidden-honeypot" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="country">Country *</label>
          <div className="country-combobox">
            <input
              id="country"
              name="country"
              type="text"
              placeholder="Start typing, e.g. Australia"
              autoComplete="country-name"
              aria-autocomplete="list"
              aria-controls="country-options"
              aria-describedby="country-hint"
              aria-expanded={isCountryMenuOpen}
              aria-activedescendant={
                isCountryMenuOpen && filteredCountryOptions[activeCountryIndex]
                  ? `country-option-${filteredCountryOptions[activeCountryIndex].code}`
                  : undefined
              }
              role="combobox"
              required
              value={values.country}
              onChange={handleCountryInputChange}
              onFocus={() => setIsCountryMenuOpen(true)}
              onBlur={() => setIsCountryMenuOpen(false)}
              onKeyDown={handleCountryKeyDown}
            />
            <input type="hidden" name="countryCode" value={values.countryCode} />
            {isCountryMenuOpen ? (
              <div className="country-option-menu" id="country-options" role="listbox">
                {filteredCountryOptions.length ? (
                  filteredCountryOptions.map((country, index) => (
                    <button
                      className={index === activeCountryIndex ? "country-option is-active" : "country-option"}
                      id={`country-option-${country.code}`}
                      key={country.code}
                      role="option"
                      type="button"
                      aria-selected={values.countryCode === country.code}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        selectCountry(country);
                      }}
                    >
                      <span>{country.name}</span>
                      <strong>{country.code}</strong>
                    </button>
                  ))
                ) : (
                  <span className="country-option-empty">No matching country. Please choose from the list.</span>
                )}
              </div>
            ) : null}
          </div>
          <span className="form-hint" id="country-hint">
            Type to search, then select one country from the dropdown.
          </span>
        </div>

        <div className="form-field">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="+61 ..."
            autoComplete="tel"
            value={values.whatsapp}
            onChange={handleChange}
          />
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="message">Comment (recommended)</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us the product model, quantity, destination port or project details."
            rows={6}
            value={values.message}
            onChange={handleChange}
          />
        </div>
      </div>

      <p className="form-privacy-note">
        Your details are used only to respond to your inquiry and provide quotation support. Basic
        technical data may be used for spam prevention.
      </p>

      <button className="button button-primary contact-submit-button" type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Request Factory Quote"}
      </button>

      {status === "success" ? (
        <p className="form-status form-status-success" role="status">
          Thank you. Your inquiry has been sent. Our sales team will reply by email.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="form-status form-status-error" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
