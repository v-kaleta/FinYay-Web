import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FinYay — Financial literacy, built for the classroom" },
      {
        name: "description",
        content:
          "A digital financial literacy platform for grades 4–6, interactive and teacher-led.",
      },
      { name: "author", content: "FinYay" },
      { property: "og:title", content: "FinYay — Financial literacy, built for the classroom" },
      {
        property: "og:description",
        content:
          "A digital financial literacy platform for grades 4–6, interactive and teacher-led.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap",
      },
      { rel: "icon", href: "data:image/png;base64,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", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
