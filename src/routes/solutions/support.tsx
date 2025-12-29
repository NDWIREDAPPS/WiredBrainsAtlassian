import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions/support')({
  component: () => <div className="p-8"><h1 className="text-3xl font-bold">Support & Managed Services</h1></div>,
})
