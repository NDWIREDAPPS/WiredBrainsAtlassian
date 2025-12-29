import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions/itsm')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/solutions/itsm"!</div>
}
