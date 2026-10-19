import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import {
  FadeIn,
  ScaleUnblur,
} from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";

const PORTRAIT_SRC = "/pasquale.png";
const PORTRAIT_HOVER_SRC = "/pasquale.png";

const EXPERTISE = [
  "Power Electronics",
  "System Engineering",
  "Embedded Software",
  "Supplier Sourcing",
  "Industrialization",
  "Test & Validation",
];

export function Hero(): ReactNode {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[8%] h-full w-px bg-foreground/[0.035]" />
        <div className="absolute top-0 right-[8%] h-full w-px bg-foreground/[0.035]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-6 pt-36 pb-24 sm:px-10 lg:px-16 xl:px-20 xl:pt-44 xl:pb-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:grid-cols-[1.2fr_0.8fr] xl:gap-24">
          <FadeIn className="flex max-w-[760px] flex-col">
            <p className="mb-7 max-w-[620px] text-[12px] font-semibold tracking-[0.2em] text-foreground/50 uppercase sm:text-[13px]">
              Engineering Consulting · Industrialization · China Partnership
            </p>

            <h1 className="max-w-[760px] text-[3.5rem] leading-[0.94] font-medium tracking-[-0.055em] text-foreground sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.65rem]">
              From concept
              <span className="block">to production.</span>
            </h1>

            <h2 className="mt-4 max-w-[720px] font-serif text-[2.6rem] leading-[0.98] font-medium tracking-[-0.04em] text-foreground/52 sm:text-[3.4rem] lg:text-[4rem]">
              Engineering without borders.
            </h2>

            <p className="mt-9 max-w-[660px] text-[18px] leading-[1.65] tracking-tight text-foreground/68 sm:text-[20px]">
              I help companies design, industrialize, source, and validate
              complex engineering products by combining European engineering
              standards with direct access to China&apos;s manufacturing and
              supplier ecosystem.
            </p>

            <p className="mt-5 max-w-[640px] text-[16px] leading-[1.65] tracking-tight text-foreground/52 sm:text-[17px]">
              Specialized in electric powertrains, power electronics, embedded
              systems, laboratory development, supplier qualification, and
              production launch.
            </p>

            <div className="mt-9">
              <HeroCtas />
            </div>

            <div className="mt-10 flex max-w-[700px] flex-wrap gap-2.5">
              {EXPERTISE.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-foreground/10 bg-background/70 px-4 py-2 text-[13px] font-medium tracking-tight text-foreground/58 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>

          <ScaleUnblur className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-foreground/8 bg-background p-2 shadow-sm">
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
                  <PortraitMorph
                    srcA={PORTRAIT_SRC}
                    srcB={PORTRAIT_HOVER_SRC}
                    alt="Pasquale Pometti, engineering and industrialization consultant"
                  />
                </div>

                <div className="absolute right-6 bottom-6 left-6 rounded-[1.6rem] border border-white/15 bg-black/48 p-5 text-white shadow-xl backdrop-blur-md">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-white/60 uppercase">
                    Europe × China
                  </p>

                  <p className="mt-2 text-[18px] leading-snug font-medium tracking-tight">
                    Engineering, sourcing, and manufacturing support through
                    one technical partner.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <Metric
                  value="10+"
                  label="Years in engineering"
                />
                <Metric
                  value="EU–CN"
                  label="Cross-border network"
                />
                <Metric
                  value="End-to-end"
                  label="Product support"
                />
              </div>

              <div className="mt-4 rounded-[1.8rem] border border-foreground/8 bg-foreground/[0.025] p-5">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-foreground/40 uppercase">
                  Core capabilities
                </p>

                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-[14px] font-medium tracking-tight text-foreground/62">
                  <span>System Architecture</span>
                  <span>Supplier Qualification</span>
                  <span>Prototype Development</span>
                  <span>Manufacturing Launch</span>
                </div>
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}): ReactNode {
  return (
    <div className="rounded-[1.5rem] border border-foreground/8 bg-foreground/[0.025] px-4 py-4 text-center">
      <p className="text-[15px] font-semibold tracking-tight text-foreground">
        {value}
      </p>

      <p className="mt-1 text-[11px] leading-snug tracking-tight text-foreground/45 sm:text-[12px]">
        {label}
      </p>
    </div>
  );
}