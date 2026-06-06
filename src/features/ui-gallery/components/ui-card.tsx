import Image from "next/image";
import Link from "next/link";
import type { UiItem } from "@/types/ui-item";

export function UiCard({ item }: { item: UiItem }) {
  return (
    <Link
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-black/5"
      href={`/ui/${item.slug}`}
    >
      <div className="flex aspect-[16/10] items-center justify-center bg-background p-8">
        <Image alt="" className="h-14 w-14 opacity-75 dark:invert" height={64} src={item.thumbnailUrl} width={64} />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-strong">
              {item.category}
            </span>
            <span className="text-xs text-muted">Lv.{item.difficulty}</span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
          <p className="line-clamp-3 text-sm leading-6 text-muted">{item.description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {item.emotionTags.slice(0, 3).map((tag) => (
            <span className="rounded-md border border-line px-2 py-1 text-xs text-muted" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
