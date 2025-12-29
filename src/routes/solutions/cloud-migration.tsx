import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions/cloud-migration')({
  component: () => <div className="p-8"><h1 className="text-3xl font-bold">Cloud Migration</h1></div>,
})
