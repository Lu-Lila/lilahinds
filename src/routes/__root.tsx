import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Lila Hinds — UI/UX & Branding Designer',
      },
    ],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
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
  )
}

function RootLayout() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-pastel-pink/30 blur-3xl" />
        <div className="absolute top-1/3 -left-48 w-80 h-80 rounded-full bg-pastel-mint/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-pastel-lavender/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-pastel-peach/25 blur-3xl" />
      </div>

      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="relative py-12 mt-16">
        {/* Decorative wave/gradient divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pastel-pink to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Lila Hinds. Designed with care.
          </p>
        </div>
      </footer>
    </div>
  )
}
