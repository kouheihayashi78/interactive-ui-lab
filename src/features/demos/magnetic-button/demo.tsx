"use client";

import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent } from "react";
import type { DemoProps } from "../types";

const spring = {
  stiffness: 170,
  damping: 16,
  mass: 0.45,
};

export function MagneticButtonDemo({ compact }: DemoProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set(Math.max(-18, Math.min(18, offsetX * 0.28)));
    y.set(Math.max(-12, Math.min(12, offsetY * 0.28)));
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className={
        compact
          ? "flex min-h-56 items-center justify-center rounded-lg bg-background p-8"
          : "flex min-h-[28rem] items-center justify-center rounded-lg bg-background p-8"
      }
    >
      <div className="text-center">
        {!compact && (
          <p className="mb-8 text-sm uppercase tracking-[0.24em] text-muted">
            ポインターをボタンの周りに移動させてください
          </p>
        )}
        <motion.button
          className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full border border-foreground bg-foreground px-8 text-sm font-semibold text-background shadow-[0_24px_70px_rgba(0,0,0,0.14)] outline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
          onBlur={resetPosition}
          onPointerLeave={resetPosition}
          onPointerMove={handlePointerMove}
          style={{ x: springX, y: springY }}
          type="button"
          whileTap={{ scale: 0.96 }}
        >
          <span className="absolute inset-0 translate-y-full rounded-full bg-accent transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0" />
          <span className="relative z-10 inline-flex items-center gap-2 transition-colors group-hover:text-foreground group-focus-visible:text-foreground">
            Explore interaction
            <ArrowRight aria-hidden size={17} />
          </span>
        </motion.button>
        {!compact && (
          <p className="mx-auto mt-8 max-w-md text-sm leading-6 text-muted">
            ボタンの位置が一定の範囲内で移動します。
          </p>
        )}
      </div>
    </div>
  );
}
