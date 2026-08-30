import { HttpsError, type CallableRequest } from "firebase-functions/v2/https"
import { createHmac, timingSafeEqual } from "node:crypto"

export function requireUser(request: CallableRequest<unknown>) {
  if (!request.auth) throw new HttpsError("unauthenticated", "Authentication is required.")
  return request.auth
}

export function requireRole(request: CallableRequest<unknown>, roles: Array<"admin" | "staff">) {
  const auth = requireUser(request)
  if (auth.token.orgId !== "studio-bycristian" || !roles.includes(auth.token.role as "admin" | "staff")) {
    throw new HttpsError("permission-denied", "You do not have access to this action.")
  }
  return auth
}

export function createActionToken(payload: string, secret: string) {
  const signature = createHmac("sha256", secret).update(payload).digest("base64url")
  return `${Buffer.from(payload).toString("base64url")}.${signature}`
}

export function verifyActionToken(token: string, secret: string) {
  const [encoded, signature] = token.split(".")
  if (!encoded || !signature) return null
  const payload = Buffer.from(encoded, "base64url").toString("utf8")
  const expected = createHmac("sha256", secret).update(payload).digest("base64url")
  const left = Buffer.from(signature); const right = Buffer.from(expected)
  if (left.length !== right.length || !timingSafeEqual(left, right)) return null
  return payload
}
