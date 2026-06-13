import type { DemoProps } from "../types";

export function MissingDemo({ compact }: DemoProps) {
  return (
    <div className="flex min-h-72 items-center justify-center rounded-md border border-dashed border-line bg-background p-8 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-muted">Interactive Preview</p>
        <p className={compact ? "mt-3 text-lg font-semibold" : "mt-3 text-2xl font-semibold"}>
          Demo component will be mounted here.
        </p>
      </div>
    </div>
  );
}
