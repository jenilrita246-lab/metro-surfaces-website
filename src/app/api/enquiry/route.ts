import { NextResponse } from "next/server";

const CHANNELS = ["whatsapp", "email"];

/** Reads a trimmed string field, or "" for anything else or anything over `max`. */
const text = (value: unknown, max: number) => {
  const trimmed = typeof value === "string" ? value.trim() : "";
  return trimmed.length <= max ? trimmed : "";
};

/**
 * Keeps a record of a contact-form enquiry in Supabase. The enquiry itself
 * reaches Metro Surfaces through WhatsApp or email, so the form ignores
 * whatever this returns: a failed save never stops a visitor getting through.
 *
 * The key is the publishable one, kept server-side so the REST endpoint isn't
 * advertised in the browser. Row level security lets it insert into
 * `enquiries` and nothing else; enquiries are read in the Supabase dashboard.
 */
export async function POST(request: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    console.error("Enquiry not saved: Supabase environment variables are missing.");
    return new NextResponse(null, { status: 503 });
  }

  const body: Record<string, unknown> | null = await request
    .json()
    .catch(() => null);

  if (!body) return new NextResponse(null, { status: 400 });

  // Hidden from people, so anything in this field came from a bot.
  if (body.website) return new NextResponse(null, { status: 204 });

  const name = text(body.name, 120);
  const product = text(body.product, 80);
  const projectType = text(body.projectType, 80);
  const message = text(body.message, 4000);
  const channel = text(body.channel, 10);

  if (!name || !product || !projectType || !message || !CHANNELS.includes(channel)) {
    return new NextResponse(null, { status: 400 });
  }

  const response = await fetch(`${url}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      apikey: key,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name,
      practice: text(body.practice, 160) || null,
      product,
      project_type: projectType,
      message,
      channel,
    }),
  });

  if (!response.ok) {
    console.error("Enquiry not saved:", response.status, await response.text());
    return new NextResponse(null, { status: 502 });
  }

  return new NextResponse(null, { status: 204 });
}
