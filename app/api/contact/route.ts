import { portfolioEnv } from "@/lib/env";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!body.name || !body.email || !body.message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const apiKey = portfolioEnv.resendApiKey;
    const toEmail = portfolioEnv.contactToEmail;

    if (!apiKey) {
      return Response.json({
        ok: true,
        mode: "mock",
        message: "Contact message received. Configure RESEND_API_KEY to enable email delivery.",
      });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sankalp Portfolio <onboarding@resend.dev>",
        to: [toEmail],
        subject: `Portfolio inquiry from ${body.name}`,
        text: `Name: ${body.name}\nEmail: ${body.email}\n\n${body.message}`,
        reply_to: body.email,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return Response.json({ error: errorText }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unable to send message." }, { status: 500 });
  }
}
