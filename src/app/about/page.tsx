export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 py-12">
      <div className="space-y-4">
        <p className="text-sm font-medium text-accent-strong">About this project</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">UI実装実験場</h1>
        <p className="text-lg leading-8 text-muted">
          このアプリは、「なんか気持ち良い」UIやWeb演出を実装するために作成したUI実験場です。
        </p>
      </div>
      <section className="rounded-lg border border-line bg-surface p-6">
        <h2 className="text-xl font-semibold">Current foundation</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
          <li>Next.js App Router</li>
          <li>React 19 / TypeScript</li>
          <li>Tailwind CSS v4</li>
          <li>TanStack Query + MSW</li>
          <li>Dark mode foundation</li>
          <li>pnpm + Corepack security settings</li>
        </ul>
      </section>
    </div>
  );
}
