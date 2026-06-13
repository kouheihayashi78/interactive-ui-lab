import Image from "next/image";
import Link from "next/link";
import type { UiItem } from "@/types/ui-item";
import { DemoPreview } from "@/features/demos/demo-preview";
import { hasDemo } from "@/features/demos/registry";

type SpatialUiCardProps = {
  item: UiItem;
  featured?: boolean;
};

export function SpatialUiCard({ featured, item }: SpatialUiCardProps) {
  return (
    <Link
      className="group block h-full rounded-lg border border-line bg-white/92 p-3 shadow-[0_28px_90px_rgba(15,23,42,0.10)] backdrop-blur transition hover:-translate-y-1 hover:border-accent dark:bg-surface/90"
      href={`/ui/${item.slug}`}
    >
      <div className="flex h-full flex-col gap-3">
        <div className={featured ? "rounded-md bg-background p-2" : "rounded-md bg-background p-4"}>
          {hasDemo(item.slug) ? (
            <DemoPreview compact slug={item.slug} />
          ) : (
            <div className="flex min-h-44 items-center justify-center">
              <Image
                alt=""
                className="h-14 w-14 opacity-70 dark:invert"
                height={64}
                src={item.thumbnailUrl}
                width={64}
              />
            </div>
          )}
        </div>
        <div className="space-y-3 px-1 pb-1">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-strong">
              {item.category}
            </span>
            <span className="text-xs text-muted">{item.status}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{item.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
