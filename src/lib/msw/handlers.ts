import { delay, http, HttpResponse } from "msw";
import { categories, mockUiItems, tags } from "./mock-data";

export const handlers = [
  http.get("/api/ui-items", async () => {
    await delay(350);
    return HttpResponse.json(mockUiItems);
  }),
  http.get("/api/ui-items/:slug", async ({ params }) => {
    await delay(250);
    const item = mockUiItems.find((candidate) => candidate.slug === params.slug);

    if (!item) {
      return HttpResponse.json({ message: "UI item not found" }, { status: 404 });
    }

    return HttpResponse.json(item);
  }),
  http.get("/api/categories", async () => {
    await delay(150);
    return HttpResponse.json(categories);
  }),
  http.get("/api/tags", async () => {
    await delay(150);
    return HttpResponse.json(tags);
  }),
  http.post("/api/favorites", async () => {
    await delay(150);
    return HttpResponse.json({ ok: true }, { status: 201 });
  }),
  http.delete("/api/favorites/:id", async () => {
    await delay(150);
    return HttpResponse.json({ ok: true });
  }),
];
