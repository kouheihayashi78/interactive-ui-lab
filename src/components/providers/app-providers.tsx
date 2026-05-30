"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes"; // ライトモード、ダークモード管理
import { useEffect, useMemo, useState } from "react";

function useMswReady() {
  const [ready, setReady] = useState(process.env.NODE_ENV !== "development");

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    import("@/lib/msw/browser")
      .then(({ worker }) =>
        worker.start({
          onUnhandledRequest: "bypass",
        }),
      )
      .finally(() => setReady(true));
  }, []);

  return ready;
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const ready = useMswReady();
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60_000,
            retry: 1,
          },
        },
      }),
    [],
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        {ready ? children : <div className="p-6 text-sm text-muted">Loading UI Lab...</div>}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
