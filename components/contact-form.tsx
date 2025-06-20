"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Name too long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." })
    .max(100, { message: "Subject too long." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message too long." }),
})

type ContactFormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const { toast } = useToast()
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  async function onSubmit(values: ContactFormValues) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll be in touch shortly.",
      variant: "default", // or 'success' if you have one
    })
    form.reset()
  }

  const inputStyles =
    "bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-all duration-300 rounded-md shadow-sm"
  const labelColor = "text-gray-700 font-medium mb-1 block"

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelColor}>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Jane Doe" {...field} className={inputStyles} />
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
              <FormLabel className={labelColor}>Your Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="e.g. jane.doe@example.com" {...field} className={inputStyles} />
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
                <Input placeholder="e.g. Project Inquiry" {...field} className={inputStyles} />
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
              <FormLabel className={labelColor}>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  {...field}
                  className={`${inputStyles} min-h-[120px]`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 py-3 text-base font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
}
