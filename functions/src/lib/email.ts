import { DateTime } from "luxon"

export type EmailTemplate = "request_received" | "admin_notification" | "confirmed" | "alternative_proposed" | "alternative_accepted" | "alternative_declined" | "cancelled" | "reminder" | "expired" | "team_invite"

export function renderEmail(template: EmailTemplate, data: Record<string, string>) {
  const name = data.name || "there"
  const when = data.startsAt ? DateTime.fromISO(data.startsAt).setZone("Europe/Amsterdam").toFormat("cccc, d LLLL yyyy 'at' HH:mm") : ""
  const messages: Record<EmailTemplate, { subject: string; heading: string; body: string }> = {
    request_received: { subject: "We received your consultation request", heading: "Thank you for your request", body: `Hi ${name}, we have reserved ${when} while our team reviews your project consultation request. We will reply within 24 hours.` },
    admin_notification: { subject: `New consultation request — ${data.name}`, heading: "New consultation request", body: `${data.name} requested ${data.service} on ${when}. Review it in the One Stop Shop dashboard.` },
    confirmed: { subject: "Your project consultation is confirmed", heading: "Consultation confirmed", body: `Hi ${name}, your consultation is confirmed for ${when}. We look forward to discussing your project.` },
    alternative_proposed: { subject: "A new consultation time has been proposed", heading: "Alternative time proposed", body: `Hi ${name}, we propose ${when}. Use the secure buttons below to accept or decline this time.` },
    alternative_accepted: { subject: "Alternative time accepted", heading: "The proposed time was accepted", body: `${data.name} accepted the consultation on ${when}.` },
    alternative_declined: { subject: "Alternative time declined", heading: "The proposed time was declined", body: `${data.name} declined the proposed consultation time.` },
    cancelled: { subject: "Consultation cancelled", heading: "Your consultation was cancelled", body: `Hi ${name}, your consultation for ${when} has been cancelled. Contact us if you would like to arrange another time.` },
    reminder: { subject: "Reminder: consultation tomorrow", heading: "Your consultation is coming up", body: `Hi ${name}, this is a reminder that your Studio ByCristian consultation is scheduled for ${when}.` },
    expired: { subject: "Your consultation request expired", heading: "Request expired", body: `Hi ${name}, the temporary hold for your consultation request has expired. You can submit a new request at any time.` },
    team_invite: { subject: "You are invited to the One Stop Shop dashboard", heading: "Team invitation", body: `You were invited as ${data.role}. Set your password using the secure link below.` },
  }
  const content = messages[template]
  const action = data.actionUrl ? `<p style="margin:28px 0"><a href="${data.actionUrl}" style="background:#111;color:#fff;padding:12px 20px;text-decoration:none;border-radius:999px">${data.actionLabel || "Open"}</a></p>` : ""
  const secondary = data.secondaryUrl ? `<p><a href="${data.secondaryUrl}" style="color:#333">${data.secondaryLabel || "Decline"}</a></p>` : ""
  return {
    subject: content.subject,
    text: `${content.heading}\n\n${content.body}\n${data.actionUrl || ""}`,
    html: `<div style="font-family:Georgia,serif;max-width:620px;margin:auto;padding:36px;color:#171717"><p style="letter-spacing:.14em;font-size:12px">STUDIO BYCRISTIAN · ONE STOP SHOP</p><h1 style="font-size:30px;font-weight:400">${content.heading}</h1><p style="line-height:1.7">${content.body}</p>${action}${secondary}<hr style="border:0;border-top:1px solid #ddd;margin:32px 0"><p style="font-size:12px;color:#666">Studio ByCristian B.V. · Van Beverningkstraat 101B, 2582 VC Den Haag</p></div>`,
  }
}
