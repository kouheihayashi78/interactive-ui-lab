import { SpatialCanvas } from "@/features/spatial-lab/components/spatial-canvas";
import { mockUiItems } from "@/lib/msw/mock-data";

export default function PlaygroundPage() {
  return <SpatialCanvas items={mockUiItems} />;
}
