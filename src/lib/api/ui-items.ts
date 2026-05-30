import type { UiItem } from "@/types/ui-item";

async function request<T>(path: string): Promise<T> {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getUiItems() {
  return request<UiItem[]>("/api/ui-items");
}

export function getUiItemBySlug(slug: string) {
  return request<UiItem>(`/api/ui-items/${slug}`);
}
