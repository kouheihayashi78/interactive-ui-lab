import type { ComponentType } from "react";

export type DemoProps = {
  compact?: boolean;
};

export type DemoComponent = ComponentType<DemoProps>;
