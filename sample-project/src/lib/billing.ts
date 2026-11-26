import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

// Deposit is 30% of the quoted price; the balance is invoiced on completion.
export const DEPOSIT_PERCENT = 30;

export async function createInvoiceLink(jobId: string, amountCents: number, customerEmail: string) {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: customerEmail,
    line_items: [{ price_data: { currency: "usd", unit_amount: amountCents, product_data: { name: `Roof job ${jobId}` } }, quantity: 1 }],
    success_url: "https://tracker.ridgelineroofing.example/paid",
    metadata: { jobId },
  });
  return session.url;
}

export async function emailCustomer(to: string, subject: string, body: string) {
  const { error } = await resend.emails.send({ from: "office@ridgelineroofing.example", to, subject, text: body });
  if (error) console.error("Email failed. Is the sending domain verified in Resend?", error);
}
