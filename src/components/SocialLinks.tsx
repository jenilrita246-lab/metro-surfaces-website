import { cn } from "@/lib/cn";
import { social } from "@/lib/site";

/**
 * Brand glyphs, drawn as solid paths on a 24x24 grid so they sit at the
 * same visual weight as the channel icons in ContactBand.
 */
const ICONS: Record<string, React.ReactNode> = {
  Instagram: (
    <path d="M12 2.16c3.2 0 3.58.012 4.85.07 1.17.053 1.805.25 2.228.415.56.218.96.478 1.38.898.42.42.68.82.9 1.38.163.423.36 1.058.413 2.228.058 1.27.07 1.65.07 4.85s-.012 3.58-.07 4.85c-.053 1.17-.25 1.805-.414 2.227-.218.56-.478.96-.898 1.38-.42.42-.82.68-1.38.9-.423.163-1.058.36-2.228.413-1.27.058-1.65.07-4.85.07s-3.58-.012-4.85-.07c-1.17-.053-1.805-.25-2.227-.414-.56-.218-.96-.478-1.38-.898-.42-.42-.68-.82-.9-1.38-.163-.423-.36-1.058-.413-2.228C2.172 15.58 2.16 15.2 2.16 12s.012-3.58.07-4.85c.053-1.17.25-1.805.414-2.227.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.9.423-.163 1.058-.36 2.228-.413C8.42 2.172 8.8 2.16 12 2.16zM12 0C8.74 0 8.333.014 7.053.072 5.775.13 4.905.333 4.14.63a5.88 5.88 0 00-2.126 1.384A5.88 5.88 0 00.63 4.14C.333 4.905.13 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.058 1.278.261 2.148.558 2.913a5.88 5.88 0 001.384 2.126 5.88 5.88 0 002.126 1.384c.765.297 1.635.5 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.148-.261 2.913-.558a5.88 5.88 0 002.126-1.384 5.88 5.88 0 001.384-2.126c.297-.765.5-1.635.558-2.913C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.148-.558-2.913a5.88 5.88 0 00-1.384-2.126A5.88 5.88 0 0019.86.63c-.765-.297-1.635-.5-2.913-.558C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  ),
  Facebook: (
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  ),
  LinkedIn: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  ),
};

type SocialLinksProps = {
  /**
   * "row" is a compact strip of bordered icon tiles, sized to sit under a
   * contact list. "list" gives each profile its own line with its handle,
   * for places with room to spell it out.
   */
  variant?: "row" | "list";
  className?: string;
};

export function SocialLinks({ variant = "row", className }: SocialLinksProps) {
  if (variant === "list") {
    return (
      <ul className={cn("space-y-4", className)}>
        {social.map((profile) => (
          <li key={profile.label}>
            <a
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-ink-soft transition-colors duration-500 hover:text-ink"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-line-strong transition-colors duration-500 group-hover:border-maroon group-hover:text-maroon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  {ICONS[profile.label]}
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-xs tracking-[0.16em] uppercase text-ink-dim">
                  {profile.label}
                </span>
                <span className="block truncate text-sm">{profile.handle}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {social.map((profile) => (
        <li key={profile.label}>
          <a
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Metro Surfaces on ${profile.label}`}
            className="inline-flex h-10 w-10 items-center justify-center border border-line-strong text-ink-soft transition-colors duration-500 hover:border-maroon hover:bg-maroon hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              {ICONS[profile.label]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
