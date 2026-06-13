"use client";

import { Move, RotateCcw } from "lucide-react";
import { useMemo, useRef, useState, type PointerEvent, type WheelEvent } from "react";
import type { UiItem } from "@/types/ui-item";
import { SpatialUiCard } from "./spatial-ui-card";

type SpatialCanvasProps = {
  items: UiItem[];
};

const placements = [
  { x: 120, y: 80, width: 370, featured: true },
  { x: 560, y: 260, width: 370 },
  { x: 1000, y: 80, width: 370 },
  { x: 120, y: 560, width: 370 },
  { x: 1000, y: 560, width: 370, featured: true },
];

export function SpatialCanvas({ items }: SpatialCanvasProps) {
const [offset, setOffset] = useState({ x: 90, y: -75 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });

  const positionedItems = useMemo(
    () =>
      items.map((item, index) => ({
        item,
        placement: placements[index % placements.length],
      })),
    [items],
  );

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.target instanceof Element && event.target.closest("a, button")) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      offsetX: offset.x,
      offsetY: offset.y,
    };
    setDragging(true);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) {
      return;
    }

    setOffset({
      x: dragStart.current.offsetX + event.clientX - dragStart.current.x,
      y: dragStart.current.offsetY + event.clientY - dragStart.current.y,
    });
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    if (dragging) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    setOffset((current) => ({
      x: current.x - event.deltaX,
      y: current.y - event.deltaY,
    }));
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f7f7f4] text-[#171717] dark:bg-background dark:text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12),transparent_34%),linear-gradient(rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[length:100%_100%,72px_72px,72px_72px] dark:opacity-40" />

      <div className="pointer-events-none absolute left-6 top-6 z-10 max-w-md">
        <p className="text-sm font-medium text-accent-strong">Spatial Playground</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">Drag the lab</h1>
        <p className="mt-4 text-sm leading-6 text-muted">
          White-space-first canvas for exploring UI experiments. Drag the blank area or use a trackpad to move around.
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-5 z-10 flex gap-2 text-xs text-muted">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-2 backdrop-blur dark:bg-surface/80">
          <Move aria-hidden size={14} />
          Drag canvas
        </span>
        <button
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-2 backdrop-blur transition hover:border-accent dark:bg-surface/80"
          onClick={() => setOffset({ x: -80, y: -80 })}
          type="button"
        >
          <RotateCcw aria-hidden size={14} />
          Reset
        </button>
      </div>

      <div
        className={dragging ? "absolute inset-0 cursor-grabbing touch-none" : "absolute inset-0 cursor-grab touch-none"}
        onPointerCancel={stopDragging}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onWheel={handleWheel}
      >
        <div
          className="absolute h-[1100px] w-[1660px] transition-transform duration-75 ease-out"
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
        >
          {positionedItems.map(({ item, placement }) => (
            <div
              className="absolute"
              key={item.id}
              style={{
                left: placement.x,
                top: placement.y,
                width: placement.width,
              }}
            >
              <SpatialUiCard featured={placement.featured} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
