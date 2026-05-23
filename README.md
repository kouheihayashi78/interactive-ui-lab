# Interactive UI Lab

Web制作っぽいLP演出、気持ちいいUI、3D表現を React / TypeScript で作って蓄積するUI実験場です。

## Commands

```sh
corepack enable pnpm
pnpm install
pnpm dev
```

## Package Policy

- npm は使わず、pnpm + Corepack を使います。
- `packageManager` は `package.json` に固定しています。
- `pnpm-lock.yaml` は依存変更時に必ず更新します。
- `.npmrc` は `engine-strict=true` を設定しています。
- `pnpm-workspace.yaml` は `minimumReleaseAge: 10080` を設定し、公開直後のパッケージを避けます。

## Dependencies

Base setup:

- Next.js App Router / React / TypeScript: アプリケーション基盤
- Tailwind CSS: スタイリング
- next-themes: ダークモード基盤
- TanStack Query: API取得状態管理
- MSW: 擬似API
- Radix UI / lucide-react / class-variance-authority / clsx / tailwind-merge: UI基盤
- React Hook Form / Zod: フォームとバリデーション
- Vitest / Testing Library: テスト基盤
- Storybook: UIカタログ基盤

Three.js / React Three Fiber / Drei / GSAP は、該当デモを実装する段階で追加します。

## Current MVP

- Home
- UI一覧
- UI詳細
- `UiItem` 型
- mock data
- MSW handlers
- TanStack Query provider
- ダークモード基盤

## Requirements

See `interactive-ui-lab-requirements.md`.
