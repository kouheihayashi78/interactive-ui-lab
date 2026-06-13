import type { DemoComponent } from "./types";
import { MagneticButtonDemo } from "./magnetic-button/demo";

const demos = {
  "magnetic-button": MagneticButtonDemo,
} satisfies Record<string, DemoComponent>;

export function hasDemo(slug: string) {
  return slug in demos;
}
