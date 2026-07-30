/**
 * Single source of truth for business details, navigation and shared copy.
 * Edit here and it updates everywhere on the site.
 */

export const site = {
  name: "Metro Surfaces",
  tagline: "Beautiful Spaces, Beautiful Life",
  descriptor: "Premium Decorative Surfaces",
  url: "https://www.metrosurfaces.in",
  description:
    "Metro Surfaces supplies premium decorative surfaces — Acrycore sheets, high-pressure laminates, architectural louvers and cane wallpaper — to discerning architects and interior designers across India.",
} as const;

export const contact = {
  phone: "+91 82865 80449",
  phoneHref: "tel:+918286580449",
  whatsapp: "https://wa.me/918286580449",
  whatsappDisplay: "+91 82865 80449",
  email: "rrrmetro@gmail.com",
  emailHref: "mailto:rrrmetro@gmail.com",
  hours: {
    days: "Monday – Saturday",
    time: "9:00 AM – 6:00 PM",
    note: "Full service and consultations available",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Stats band. These are deliberately limited to claims already made on the
 * existing site ("decades of experience", four product lines, Mon–Sat
 * trading). Swap in your real project count or founding year here when
 * you're ready — nothing else needs to change.
 */
export const stats = [
  { value: 20, suffix: "+", label: "Years of industry experience" },
  { value: 4, suffix: "", label: "Specialist product lines" },
  { value: 6, suffix: " days", label: "Service window, Mon–Sat" },
] as const;
