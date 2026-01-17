import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import Header from '../components/Header'
import Footer from '../components/Footer'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

import { BackgroundShapes } from '../components/ui/BackgroundShapes'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
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
        title: 'Wired Brains | Atlassian Consulting & Marketplace Apps',
      },
      {
        name: 'description',
        content:
          'Wired Brains provides expert Atlassian consulting, cloud migration, ITSM solutions and Marketplace apps for Jira and Confluence.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'Wired Brains',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/achlys_logo.png',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="dark bg-background relative overflow-x-hidden">
        <BackgroundShapes />
        <Header />
        <main className="pt-28 min-h-screen">{children}</main>
        <Footer />
        {/* <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        /> */}
        <Scripts />
      </body>
    </html>
  )
}
