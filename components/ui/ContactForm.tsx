"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const IS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClasses =
  "block w-full border border-surface-high bg-surface px-4 py-3 text-sm text-content transition-colors duration-300 ease-out-strong focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (!IS_CONFIGURED) {
      console.warn(
        "EmailJS yapılandırması eksik: NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ve NEXT_PUBLIC_EMAILJS_PUBLIC_KEY tanımlanmalı.",
      );
    }
  }, []);

  if (!IS_CONFIGURED) {
    return (
      <p className="border border-surface-high px-6 py-8 text-sm leading-relaxed text-content-muted">
        İletişim formu şu an aktif değil.
      </p>
    );
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          from_name: String(data.get("name") ?? ""),
          from_email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          message: String(data.get("message") ?? ""),
        },
        { publicKey: PUBLIC_KEY as string },
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-content"
          >
            Ad Soyad
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-content"
          >
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-content"
        >
          Telefon{" "}
          <span className="font-normal text-content-muted">(opsiyonel)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-content"
        >
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`mt-2 ${inputClasses} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-[background-color,transform] duration-300 ease-out-strong hover:bg-primary-dark active:scale-[0.98] active:duration-150 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Gönderiliyor..." : "Gönder"}
        </button>
        <p aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="text-content">Mesajınız iletildi.</span>
          )}
          {status === "error" && (
            <span className="text-content-muted">
              Bir hata oluştu, lütfen tekrar deneyin.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
