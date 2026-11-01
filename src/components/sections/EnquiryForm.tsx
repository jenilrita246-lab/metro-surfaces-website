"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/cn";
import { products } from "@/lib/products";
import { contact, whatsappLink } from "@/lib/site";

const PRODUCT_OPTIONS = [...products.map((product) => product.name), "Wood Veneer"];

const PROJECT_TYPES = [
  "Commercial / Office",
  "Retail",
  "Hospitality",
  "Residential",
  "Architectural / Facade",
  "Other",
];

const field =
  "w-full border border-line bg-paper-raised px-4 py-3.5 text-sm text-ink placeholder:text-ink-dim transition-colors duration-300 focus:border-maroon focus:outline-none";

/**
 * The form composes a structured enquiry and hands it to WhatsApp or the
 * visitor's mail client. Choosing a channel also saves a copy in the
 * background; the link opens either way, so a failed save loses no enquiry.
 */
export function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    practice: "",
    product: products[0].name,
    projectType: PROJECT_TYPES[0],
    message: "",
    website: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const compose = () =>
    [
      "New enquiry for Metro Surfaces",
      "",
      `Name: ${form.name || "Not given"}`,
      `Practice / Company: ${form.practice || "Not given"}`,
      `Product of interest: ${form.product}`,
      `Project type: ${form.projectType}`,
      "",
      `Details: ${form.message || "Not given"}`,
    ].join("\n");

  const whatsappHref = whatsappLink(compose());
  const mailHref = `${contact.emailHref}?subject=${encodeURIComponent(
    `Enquiry: ${form.product}${form.practice ? ` (${form.practice})` : ""}`,
  )}&body=${encodeURIComponent(compose())}`;

  const incomplete = form.name.trim() === "" || form.message.trim() === "";

  // keepalive lets the save finish after the tab loses focus to WhatsApp or mail.
  const save = (channel: "whatsapp" | "email") => {
    fetch("/api/enquiry", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, channel }),
    }).catch(() => {});
  };

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="border border-line bg-paper p-8 lg:p-10"
    >
      <p className="eyebrow">Project enquiry</p>
      <h3 className="mt-4 font-display text-3xl leading-tight font-light text-ink">
        Tell us about the project.
      </h3>
      <p className="mt-3 text-sm text-ink-dim text-pretty">
        Fill this in and send it straight to our WhatsApp or email, whichever
        you prefer. We keep a copy so we can follow up, as set out in our{" "}
        <Link href="/privacy-policy" className="link-underline text-ink">
          privacy policy
        </Link>
        .
      </p>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={(e) => set("website")(e.target.value)}
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow mb-2.5 block">Your name *</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Jane Doe"
            className={field}
          />
        </label>

        <label className="block">
          <span className="eyebrow mb-2.5 block">Practice / Company</span>
          <input
            type="text"
            value={form.practice}
            onChange={(e) => set("practice")(e.target.value)}
            placeholder="Studio name"
            className={field}
          />
        </label>

        <label className="block">
          <span className="eyebrow mb-2.5 block">Product of interest</span>
          <select
            value={form.product}
            onChange={(e) => set("product")(e.target.value)}
            className={cn(field, "appearance-none")}
          >
            {PRODUCT_OPTIONS.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="eyebrow mb-2.5 block">Project type</span>
          <select
            value={form.projectType}
            onChange={(e) => set("projectType")(e.target.value)}
            className={cn(field, "appearance-none")}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="eyebrow mb-2.5 block">Details *</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Approximate quantity, finish, timeline, site location…"
            className={cn(field, "resize-y")}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={incomplete ? undefined : whatsappHref}
          onClick={() => save("whatsapp")}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={incomplete}
          className={cn(
            "group inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-500",
            incomplete
              ? "pointer-events-none border border-line text-ink-dim"
              : "bg-maroon text-white hover:bg-maroon-deep",
          )}
        >
          Send via WhatsApp
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href={incomplete ? undefined : mailHref}
          onClick={() => save("email")}
          aria-disabled={incomplete}
          className={cn(
            "group inline-flex items-center gap-3 border px-7 py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-500",
            incomplete
              ? "pointer-events-none border-line text-ink-dim"
              : "border-line-strong text-ink hover:border-ink-dim",
          )}
        >
          Send via Email
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {incomplete && (
        <p className="mt-4 text-xs text-ink-dim">
          Add your name and a short description to enable sending.
        </p>
      )}
    </form>
  );
}
