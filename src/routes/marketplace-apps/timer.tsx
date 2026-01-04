import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/marketplace-apps/timer')({
  component: () => <div className="p-8"><h1 className="text-2xl sm:text-3xl font-semibold">Timer App</h1></div>,
})
