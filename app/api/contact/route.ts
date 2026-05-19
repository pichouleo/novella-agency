import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'leoinfluenceagency@gmail.com'

    if (!apiKey || apiKey === 're_xxxxxxxxxxxxxxxxxxxx') {
      console.log('--- DEMO MODE (no Resend key) ---', data)
      return NextResponse.json({ success: true, demo: true })
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'Novella Agency <contact@novella.agency>',
      to:   [toEmail],
      reply_to: data.email,
      subject: `Nouvelle demande de devis — ${data.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#07070D;color:#EDE8DF;padding:2rem;border:1px solid rgba(201,164,98,0.2)">
          <h2 style="color:#C9A462;font-family:Georgia,serif;margin:0 0 1.5rem">Nouvelle demande via Novella Agency</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:0.5rem 0;color:#9C9890;width:120px">Nom</td><td style="color:#EDE8DF">${data.name}</td></tr>
            <tr><td style="padding:0.5rem 0;color:#9C9890">Email</td><td style="color:#EDE8DF">${data.email}</td></tr>
            ${data.phone ? `<tr><td style="padding:0.5rem 0;color:#9C9890">Téléphone</td><td style="color:#EDE8DF">${data.phone}</td></tr>` : ''}
          </table>
          <hr style="border:none;border-top:1px solid rgba(201,164,98,0.15);margin:1.5rem 0">
          <p style="white-space:pre-wrap;color:#EDE8DF;line-height:1.7">${data.message}</p>
          <p style="margin-top:2rem;font-size:0.75rem;color:#52504C">Envoyé depuis novella.agency</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Données invalides.' }, { status: 422 })
    }
    return NextResponse.json({ error: 'Erreur serveur. Réessayez.' }, { status: 500 })
  }
}
