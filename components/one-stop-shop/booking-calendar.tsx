"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, type Modifiers } from "react-day-picker"
import {
  calendarDateFromIsoDate,
  isoDateFromCalendarDate,
  type BookingWindow,
} from "@/lib/one-stop-shop/availability-calendar"

type BookingCalendarProps = {
  month: Date
  selectedDate: string
  availableDates: Set<string>
  bookingWindow: BookingWindow
  isLoaded: boolean
  isLoading: boolean
  onMonthChange: (month: Date) => void
  onSelectDate: (date: string) => void
}

export function BookingCalendar({
  month,
  selectedDate,
  availableDates,
  bookingWindow,
  isLoaded,
  isLoading,
  onMonthChange,
  onSelectDate,
}: BookingCalendarProps) {
  const earliestDate = calendarDateFromIsoDate(bookingWindow.earliestDate)
  const latestDate = calendarDateFromIsoDate(bookingWindow.latestDate)
  const selected = selectedDate ? calendarDateFromIsoDate(selectedDate) : undefined
  const inBookingWindow = (date: Date) => {
    const key = isoDateFromCalendarDate(date)
    return key >= bookingWindow.earliestDate && key <= bookingWindow.latestDate
  }
  const available = (date: Date) => isLoaded && availableDates.has(isoDateFromCalendarDate(date))
  const unavailable = (date: Date) => isLoaded && inBookingWindow(date) && !available(date)
  const disabled = (date: Date) => !isLoaded || !inBookingWindow(date) || !available(date)

  return (
    <div className="relative border border-black/12 bg-white/55 p-3 sm:p-5">
      <DayPicker
        mode="single"
        month={month}
        selected={selected}
        startMonth={new Date(earliestDate.getFullYear(), earliestDate.getMonth(), 1)}
        endMonth={new Date(latestDate.getFullYear(), latestDate.getMonth(), 1)}
        onMonthChange={onMonthChange}
        onSelect={(date) => date && onSelectDate(isoDateFromCalendarDate(date))}
        showOutsideDays
        fixedWeeks
        disabled={disabled}
        modifiers={{ available, unavailable }}
        modifiersClassNames={{
          available: "[&>button]:bg-[#DDE5D8] [&>button]:text-[#34402F] [&>button]:after:absolute [&>button]:after:bottom-1.5 [&>button]:after:h-1 [&>button]:after:w-1 [&>button]:after:rounded-full [&>button]:after:bg-[#56624F]",
          unavailable: "[&>button]:bg-[#E6E2DA] [&>button]:text-[#8F8A82]",
        }}
        classNames={{
          root: "relative w-full",
          months: "w-full",
          month: "w-full",
          month_caption: "relative flex h-11 items-center justify-center border-b border-black/10 pb-4",
          caption_label: "text-base font-normal tracking-[0.03em] text-[#151515]",
          nav: "absolute inset-x-5 top-5 z-10 flex items-center justify-between sm:inset-x-7 sm:top-7",
          button_previous: "flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:border-[#56624F] hover:text-[#56624F] disabled:opacity-25",
          button_next: "flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white text-black transition hover:border-[#56624F] hover:text-[#56624F] disabled:opacity-25",
          month_grid: "mt-4 w-full border-collapse",
          weekdays: "grid grid-cols-7",
          weekday: "pb-2 text-center text-[9px] font-normal uppercase tracking-[0.16em] text-black/42",
          weeks: "block",
          week: "mt-1 grid grid-cols-7",
          day: "relative aspect-square p-1 text-center [&>button]:mx-auto",
          day_button: "relative flex h-full min-h-10 w-full items-center justify-center rounded-full border border-transparent text-xs outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-[#56624F] focus-visible:ring-offset-2 sm:text-sm",
          selected: "[&>button]:!border-[#56624F] [&>button]:!bg-[#56624F] [&>button]:!text-white [&>button]:after:!bg-white",
          today: "[&>button]:ring-1 [&>button]:ring-inset [&>button]:ring-black/25",
          outside: "opacity-20",
          disabled: "[&>button]:cursor-not-allowed",
          hidden: "invisible",
        }}
        components={{
          Chevron: ({ orientation }) => orientation === "left"
            ? <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            : <ChevronRight aria-hidden="true" className="h-4 w-4" />,
        }}
        labels={{
          labelDayButton: (date: Date, modifiers: Modifiers) => `${new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(date)}, ${modifiers.available ? "available" : "unavailable"}`,
        }}
      />

      {isLoading && (
        <div className="absolute inset-x-3 bottom-3 top-[4.75rem] grid grid-cols-7 gap-2 bg-white/88 p-2 backdrop-blur-[1px] sm:inset-x-5 sm:bottom-5" aria-label="Loading calendar availability" role="status">
          {Array.from({ length: 42 }, (_, index) => <span key={index} className="aspect-square animate-pulse rounded-full bg-[#E6E2DA]" />)}
          <span className="sr-only">Loading available consultation dates…</span>
        </div>
      )}
    </div>
  )
}
