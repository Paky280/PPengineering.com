"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

type Entry = {
  company: string;
  role: string;
  period: string;
  location: string;
  slug?: string;
  brand?: string;
};

const ENTRIES: Entry[] = [
  {
    company: "OMNI Powertrain Technologies",
    role: "Power Electronics Engineering Manager",
    period: "2024 – Present",
    location: "Shanghai, China",
    brand: "#E85D04",
  },
  {
    company: "Magelec Propulsion",
    role: "Head of Software Engineering",
    period: "2022 – 2024",
    location: "Shanghai, China",
    brand: "#E85D04",
  },
  {
    company: "Magelec Propulsion",
    role: "Software Engineering Manager",
    period: "2020 – 2022",
    location: "Shanghai, China",
    brand: "#E85D04",
  },
  {
    company: "Leonardo Helicopters - TXT Group",
    role: "Flight Control Software Engineer — AW609",
    period: "2019 – 2019",
    location: "Milan, Italy",
    brand: "#004B87",
  },
  {
    company: "TXT Group",
    role: "Avionic Software Engineer — Aerospace & Defence",
    period: "2018 – 2019",
    location: "Milan, Italy",
    brand: "#004B87",
  },
];

const COLLAPSED_COUNT = 2.25;
const ROW_HEIGHT = 80;
const ROW_GAP = 8;

export function Experience(): ReactNode {
  const [open, setOpen] = useState(false);

  const collapsedHeight =
    Math.floor(COLLAPSED_COUNT) * ROW_HEIGHT +
    Math.floor(COLLAPSED_COUNT) * ROW_GAP +
    (COLLAPSED_COUNT % 1) * ROW_HEIGHT;

  const hiddenCount = Math.max(
    0,
    ENTRIES.length - Math.floor(COLLAPSED_COUNT),
  );

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Professional Experience
      </h3>

      <div
        className={`border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-4xl border px-2 pt-2 sm:px-4 sm:pt-4 ${
          open ? "pb-2 sm:pb-4" : "pb-0"
        }`}
      >
        <motion.div
          className="relative"
          initial={false}
          animate={{
            height: open ? "auto" : collapsedHeight,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ overflow: "hidden" }}
        >
          <ul className="flex flex-col gap-2">
            {ENTRIES.map((entry) => (
              <li
                key={`${entry.company}-${entry.role}-${entry.period}`}
                className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-3"
                style={{ minHeight: ROW_HEIGHT }}
              >
                <CompanyLogo entry={entry} />

                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-foreground truncate text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {entry.company}
                  </span>

                  <span className="text-foreground/65 mt-0.5 text-[14px] leading-snug tracking-tight sm:text-[15px]">
                    {entry.role}
                  </span>

                  <span className="text-foreground/45 mt-1 text-[13px] tracking-tight sm:text-[14px]">
                    {entry.location}
                    <span className="text-foreground/25 mx-2">•</span>
                    {entry.period}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <AnimatePresence>
          {!open && hiddenCount > 0 && (
            <motion.div
              key="fade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0"
              style={{
                height: ROW_HEIGHT,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
              }}
            />
          )}
        </AnimatePresence>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            className={`focus-ring text-foreground flex w-full cursor-pointer items-center justify-center gap-1.5 bg-transparent text-[15px] font-medium tracking-tight ${
              open
                ? "relative mt-4"
                : "absolute inset-x-0 bottom-0 z-10 py-3 sm:py-4"
            }`}
          >
            {open ? "Show less" : `Show ${hiddenCount} more`}

            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>
    </div>
  );
}

function CompanyLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = getCompanyInitials(entry.company);

  return (
    <span
      className="ring-foreground/8 inline-flex h-12 w-12 shrink-0 items-center justify-center bg-white ring-1 dark:ring-white/10"
      aria-hidden="true"
      style={{
        borderRadius: 14,
        ...(entry.slug ? {} : { backgroundColor: entry.brand ?? "#111111" }),
      }}
    >
      {entry.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${entry.slug}`}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
          draggable={false}
        />
      ) : (
        <span className="text-[15px] font-semibold tracking-tight text-white">
          {initials}
        </span>
      )}
    </span>
  );
}

function getCompanyInitials(company: string): string {
  if (company.includes("Magelec")) {
    return "MP";
  }

  if (company.includes("Leonardo")) {
    return "L";
  }

  return company
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}