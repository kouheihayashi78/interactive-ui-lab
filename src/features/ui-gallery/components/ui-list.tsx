"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUiItems } from "@/lib/api/ui-items";
import { UiCard } from "./ui-card";

export function UiList() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const { data, error, isLoading } = useQuery({
    queryKey: ["ui-items"],
    queryFn: getUiItems,
  });

  const categories = useMemo(
    () => ["all", ...Array.from(new Set((data ?? []).map((item) => item.category)))],
    [data],
  );

  const filteredItems = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return (data ?? []).filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const searchable = [
        item.title,
        item.description,
        item.category,
        ...item.tags,
        ...item.emotionTags,
        ...item.technologies,
      ]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!normalizedKeyword || searchable.includes(normalizedKeyword));
    });
  }, [category, data, keyword]);

  if (isLoading) {
    return <div className="rounded-lg border border-line bg-surface p-8 text-muted">Loading UI works...</div>;
  }

  if (error) {
    return <div className="rounded-lg border border-line bg-surface p-8 text-red-600">Failed to load UI works.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3 rounded-lg border border-line bg-surface p-4 md:grid-cols-[1fr_220px]">
        <label className="relative block">
          <Search aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input
            className="h-11 w-full rounded-md border border-line bg-background pl-10 pr-3 text-sm"
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Search title, tag, technology..."
            type="search"
            value={keyword}
          />
        </label>
        <select
          className="h-11 rounded-md border border-line bg-background px-3 text-sm"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          {categories.map((candidate) => (
            <option key={candidate} value={candidate}>
              {candidate}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-muted">{filteredItems.length} UI works found</p>

      {filteredItems.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <UiCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-line bg-surface p-10 text-center text-muted">
          No UI works match the current filters.
        </div>
      )}
    </div>
  );
}
