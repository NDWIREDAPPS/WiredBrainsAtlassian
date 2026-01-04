import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/marketplace-apps/checklist')({
  component: () => <div className="p-8"><h1 className="text-2xl sm:text-3xl font-semibold">Checklist App</h1></div>,
})
