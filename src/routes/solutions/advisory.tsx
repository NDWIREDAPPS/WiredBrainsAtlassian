import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions/advisory')({
  component: () => <div className="p-8"><h1 className="text-3xl font-bold">Advisory & Licensing</h1></div>,
})
