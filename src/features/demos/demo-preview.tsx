import { MissingDemo } from "./components/missing-demo";
import { MagneticButtonDemo } from "./magnetic-button/demo";
import type { DemoProps } from "./types";

type DemoPreviewProps = DemoProps & {
  slug: string;
};

export function DemoPreview({ compact, slug }: DemoPreviewProps) {
  switch (slug) {
    case "magnetic-button":
      return <MagneticButtonDemo compact={compact} />;
    default:
      return <MissingDemo compact={compact} />;
  }
}
