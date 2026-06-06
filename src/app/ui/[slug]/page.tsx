import Link from "next/link";
import { UiDetail } from "@/features/ui-gallery/components/ui-detail";

export default async function UiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-12">
      <Link className="text-sm font-medium text-accent-strong" href="/ui">
        Back to UI list
      </Link>
      <UiDetail slug={slug} />
    </div>
  );
}
