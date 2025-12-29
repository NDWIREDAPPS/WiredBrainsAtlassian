import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions/integration')({
  component: () => <div className="p-8"><h1 className="text-3xl font-bold">Integration & Performance</h1></div>,
})
