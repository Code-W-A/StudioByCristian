"use client"

import { httpsCallable } from "firebase/functions"
import { firebaseFunctions } from "./client"

export async function callFirebase<TRequest, TResponse>(name: string, data: TRequest): Promise<TResponse> {
  if (!firebaseFunctions) throw new Error("Booking is not configured yet. Please contact the studio directly.")
  const result = await httpsCallable<TRequest, TResponse>(firebaseFunctions, name)(data)
  return result.data
}
