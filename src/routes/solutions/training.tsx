import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions/training')({
  component: () => <div className="p-8"><h1 className="text-3xl font-bold">Training</h1></div>,
})
