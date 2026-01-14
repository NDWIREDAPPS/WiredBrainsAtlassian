import { cn } from "@/lib/utils"
import { useRef, useEffect } from "react"

const icons = [
    "/jira-rovo.png",
    "/jira-align.png",
    "/timer.png",
    "/timesheets.png",
    "/checklist.png",
    "/issue-template.png",
]

// Fixed scattered initial positions (in percentages)
const initialPositions = [
    { left: 10, top: 10 },  // Top Left
    { left: 80, top: 15 },  // Top Right
    { left: 15, top: 60 },  // Middle Left
    { left: 75, top: 65 },  // Bottom Right
    { left: 45, top: 40 },  // Center
    { left: 55, top: 85 },  // Bottom Center
]

interface FloatingIconsProps {
    className?: string
    speed?: number // Speed multiplier, default 1
}

export function FloatingIcons({ className, speed = 1 }: FloatingIconsProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Use useLayoutEffect to prevent flash of content before JS runs positioning
    // However, SSR compatibility might suggest useEffect. But this is a client-side interaction.
    // We'll stick to useEffect but make the initial CSS valid.
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const iconElements = container.querySelectorAll('.floating-icon')

        iconElements.forEach((icon) => {
            const el = icon as HTMLElement

            // Capture the initial position that was set via CSS %
            // We need to calculate where it actually is in pixels relative to container
            // Since left/top are set in %, offsetLeft/Top should give us exact pixels
            let x = el.offsetLeft
            let y = el.offsetTop

            // Now switch to transform-based positioning for performance
            // We reset left/top to 0 so translate() becomes absolute coordinate
            el.style.left = '0px'
            el.style.top = '0px'
            el.style.transform = `translate(${x}px, ${y}px)`

            // Random direction and speed
            let dx = (Math.random() - 0.5) * 0.8 * speed
            let dy = (Math.random() - 0.5) * 0.8 * speed

            const animate = () => {
                if (!container) return

                x += dx
                y += dy

                // Bounce off walls
                // Note: We need to account for icon size (w-16 = 64px)
                if (x <= 0 || x >= container.offsetWidth - 64) {
                    dx = -dx
                    x = Math.max(0, Math.min(x, container.offsetWidth - 64))
                }
                if (y <= 0 || y >= container.offsetHeight - 64) {
                    dy = -dy
                    y = Math.max(0, Math.min(y, container.offsetHeight - 64))
                }

                el.style.transform = `translate(${x}px, ${y}px)`
                requestAnimationFrame(animate)
            }

            animate()
        })
    }, [speed])

    return (
        <div ref={containerRef} className={cn("relative w-full h-full overflow-hidden pointer-events-none", className)}>
            <style>{`
                @keyframes zoom-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.15); }
                }
            `}</style>
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="floating-icon absolute w-16 h-16 flex items-center justify-center will-change-transform"
                    style={{
                        left: `${initialPositions[index].left}%`,
                        top: `${initialPositions[index].top}%`,
                    }}
                >
                    <div
                        className="w-full h-full bg-white/40 backdrop-blur-md rounded-4xl shadow-lg border border-white/30 p-3 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        style={{
                            animation: `zoom-pulse ${3 + (index * 0.5) % 4}s ease-in-out infinite`,
                            animationDelay: `${index * 0.7}s`
                        }}
                    >
                        <img
                            src={icon}
                            alt={`Floating icon ${index + 1}`}
                            className="w-full h-full object-contain drop-shadow-md"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
