import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="mt-4 text-muted-foreground">Learn more about Achlys Solutions.</p>
        </div>
    )
}
