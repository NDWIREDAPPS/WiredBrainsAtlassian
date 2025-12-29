import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/marketplace-apps/issue-template')({
  component: () => <div className="p-8"><h1 className="text-3xl font-bold">Issue Template</h1></div>,
})
