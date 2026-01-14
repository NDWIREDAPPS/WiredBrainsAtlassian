import { cn } from "@/lib/utils"

export function ClusteredBackGroundShapes({ className }: { className?: string }) {
    return (
        <div className={cn("relative hidden lg:block h-[500px] w-full", className)}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/15 rounded-full" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply opacity-35 animate-blob" />
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply opacity-35 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply opacity-35 animate-blob animation-delay-4000" />
        </div>
    )
}
