import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Verkkosivu" <${process.env.EMAIL_USER}>`,
      to: "info@salaojaexpertit.fi",
      subject: "Uusi yhteydenotto",
      html: `
        <h2>Uusi yhteydenotto</h2>
        <p><b>Nimi:</b> ${name}</p>
        <p><b>Puhelin:</b> ${phone}</p>
        <p><b>Sähköposti:</b> ${email}</p>
        <p><b>Viesti:</b><br/> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}