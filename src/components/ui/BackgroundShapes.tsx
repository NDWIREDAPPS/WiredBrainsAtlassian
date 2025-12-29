import { cn } from "@/lib/utils"

export function BackgroundShapes({ className }: { className?: string }) {
    return (
        <div className={cn("absolute top-0 right-0 z-0 overflow-hidden pointer-events-none w-screen h-screen sm:animate-none animate-pulse", className)}>
            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4">
                <div className="w-[600px] h-[600px] rounded-full bg-purple-600/20 opacity-60 animate-pulse" />
            </div>
            <div className="absolute bottom-0 right-10 translate-x-1/3 translate-y-1/4">
                <div className="w-[500px] h-[500px] rounded-full bg-blue-600/10 opacity-50" />
            </div>
            <div className="absolute top-1/2 right-[-5%] -translate-y-1/2">
                <div className="w-[300px] h-[300px] rounded-full bg-indigo-500/10 opacity-40" />
            </div>
        </div>
    )
}
