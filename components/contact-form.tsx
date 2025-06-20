"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type ContactFormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const { toast } = useToast()
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  async function onSubmit(values: ContactFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    })
    form.reset()
  }

  // Assuming the form is on a white background section by default
  const labelColor = "text-black"
  const inputStyles = "bg-white border-gray-300 text-black placeholder-gray-500 focus:border-black focus:ring-black"
  const buttonStyles = "bg-black text-white hover:bg-gray-800"

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelColor}>Your name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelColor}>Your email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email address" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelColor}>Subject</FormLabel>
              <FormControl>
                <Input placeholder="What is this regarding?" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelColor}>Your message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us more..." rows={5} {...field} className={inputStyles} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={`w-full sm:w-auto ${buttonStyles}`} disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  )
}
