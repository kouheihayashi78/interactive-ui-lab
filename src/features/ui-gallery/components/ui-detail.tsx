"use client";

import { useQuery } from "@tanstack/react-query";
import { getUiItemBySlug } from "@/lib/api/ui-items";

export function UiDetail({ slug }: { slug: string }) {
  const { data: item, error, isLoading } = useQuery({
    queryKey: ["ui-item", slug],
    queryFn: () => getUiItemBySlug(slug),
  });

  if (isLoading) {
    return <div className="rounded-lg border border-line bg-surface p-8 text-muted">Loading preview...</div>;
  }

  if (error || !item) {
    return <div className="rounded-lg border border-line bg-surface p-8 text-red-600">This UI work was not found.</div>;
  }

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-strong">
          {item.category}
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{item.title}</h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">{item.longDescription ?? item.description}</p>
      </div>

      <section className="rounded-lg border border-line bg-surface p-4">
        <div className="flex min-h-80 items-center justify-center rounded-md bg-background p-8 text-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-muted">Interactive Preview</p>
            <p className="mt-3 text-2xl font-semibold">Demo component will be mounted here.</p>
          </div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        <InfoBlock title="Technologies" values={item.technologies} />
        <InfoBlock title="Learning Points" values={item.learningPoints} />
        <InfoBlock title="Improvement Ideas" values={item.improvementIdeas} />
      </div>
    </article>
  );
}

function InfoBlock({ title, values }: { title: string; values: string[] }) {
  return (
    <section className="rounded-lg border border-line bg-surface p-5">
      <h2 className="font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </section>
  );
}
