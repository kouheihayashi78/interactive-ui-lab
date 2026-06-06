import { UiList } from "@/features/ui-gallery/components/ui-list";

export default function UiListPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-12">
      <div className="space-y-4">
        <p className="text-sm font-medium text-accent-strong">UI Gallery</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">UI works</h1>
        <p className="text-lg leading-8 text-muted">
          LP演出、フォーム、マイクロインタラクション、3D表現を検索・フィルターしながら確認できます。
        </p>
      </div>
      <UiList />
    </div>
  );
}
