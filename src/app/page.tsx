import Link from "next/link";
import { ArrowRight, Boxes, Layers, Sparkles } from "lucide-react";
import { mockUiItems } from "@/lib/msw/mock-data";
import { UiCard } from "@/features/ui-gallery/components/ui-card";

export default function Home() {
  const featuredItems = mockUiItems.filter((item) => item.isFeatured).slice(0, 3);

  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
              <Sparkles aria-hidden size={16} />
              Portfolio UI experiments
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
                Interactive UI Lab
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                Web制作っぽい演出、気持ちいいUI、3D表現を React / TypeScript で作って蓄積するUI実験場。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90"
                href="/ui"
              >
                View UI Works
                <ArrowRight aria-hidden size={17} />
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-md border border-line bg-surface px-5 text-sm font-medium transition hover:border-accent"
                href="/about"
              >
                About Project
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { icon: Layers, label: "LP motion", text: "Scroll and page-transition experiments" },
              { icon: Sparkles, label: "Micro UI", text: "Buttons, forms, command menus" },
              { icon: Boxes, label: "3D ready", text: "Canvas-based demos are added on demand" },
            ].map((item) => (
              <div className="rounded-lg border border-line bg-surface p-5" key={item.label}>
                <item.icon aria-hidden className="text-accent-strong" size={24} />
                <h2 className="mt-4 text-xl font-semibold">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-accent-strong">Featured UI</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">採用担当者に最初に見せたい作品</h2>
          </div>
          <Link className="hidden text-sm font-medium text-accent-strong sm:inline" href="/ui">
            See all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredItems.map((item) => (
            <UiCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
