import { cn } from '@/lib/utils'
import { useRef, useEffect } from 'react'

const icons = [
  '/jira-rovo.png',
  '/jira-align.png',
  '/timer.png',
  '/timesheets.png',
  '/checklist.png',
  '/issue-template.png',
  '/atlassian.png',
  '/confluence.png',
]

// Fixed scattered initial positions (in percentages)
const initialPositions = [
  { left: 10, top: 10 }, // Top Left
  { left: 80, top: 15 }, // Top Right
  { left: 15, top: 60 }, // Middle Left
  { left: 75, top: 65 }, // Bottom Right
  { left: 45, top: 40 }, // Center
  { left: 55, top: 85 }, // Bottom Center
  { left: 30, top: 25 }, // Upper Center-Left (atlassian)
  { left: 65, top: 45 }, // Center Right (confluence)
]

interface FloatingIconsProps {
  className?: string
  speed?: number // Speed multiplier, default 1
}

interface IconState {
  el: HTMLElement
  x: number
  y: number
  dx: number
  dy: number
  width: number
  height: number
}

export function FloatingIcons({ className, speed = 1 }: FloatingIconsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Note: We use Direct DOM manipulation for ripples inside the animation loop
  // to prevent excessive React re-renders and potential frame drops.

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const iconElements = container.querySelectorAll('.floating-icon')
    const iconStates: IconState[] = []
    let animationFrameId: number

    // Defer initialization to ensure DOM layout is complete
    // This fixes the "starting from corner" issue on client-side navigation
    const initFrameId = requestAnimationFrame(() => {
      // Initialize states after layout
      iconElements.forEach((icon) => {
        const el = icon as HTMLElement

        // Capture the initial position that was set via CSS %
        // offsetLeft/offsetTop now have correct values after layout
        let x = el.offsetLeft
        let y = el.offsetTop

        // Initial random velocity
        const dx = (Math.random() - 0.5) * 0.8 * speed
        const dy = (Math.random() - 0.5) * 0.8 * speed

        // Reset CSS positioning to use transform
        el.style.left = '0px'
        el.style.top = '0px'
        el.style.transform = `translate(${x}px, ${y}px)`

        iconStates.push({
          el,
          x,
          y,
          dx,
          dy,
          width: 64, // w-16 = 64px
          height: 64,
        })
      })

      // Start animation after initialization
      animate()
    })

    const animate = () => {
      if (!container) return

      const containerWidth = container.offsetWidth
      const containerHeight = container.offsetHeight
      const centerOffset = 32

      // 1. Update positions & Wall Collisions
      for (let i = 0; i < iconStates.length; i++) {
        const state = iconStates[i]

        state.x += state.dx
        state.y += state.dy

        let collided = false
        let collisionX = state.x
        let collisionY = state.y

        // Wall collisions
        if (state.x <= 0) {
          state.dx = Math.abs(state.dx)
          state.x = 0
          collided = true
          collisionX = 0
          collisionY = state.y + centerOffset
        } else if (state.x >= containerWidth - state.width) {
          state.dx = -Math.abs(state.dx)
          state.x = containerWidth - state.width
          collided = true
          collisionX = containerWidth
          collisionY = state.y + centerOffset
        }

        if (state.y <= 0) {
          state.dy = Math.abs(state.dy)
          state.y = 0
          collided = true
          collisionX = state.x + centerOffset
          collisionY = 0
        } else if (state.y >= containerHeight - state.height) {
          state.dy = -Math.abs(state.dy)
          state.y = containerHeight - state.height
          collided = true
          collisionX = state.x + centerOffset
          collisionY = containerHeight
        }

        if (collided) {
          createRipple(container, collisionX, collisionY)
        }
      }

      // 2. Icon-Icon Collisions
      for (let i = 0; i < iconStates.length; i++) {
        for (let j = i + 1; j < iconStates.length; j++) {
          const s1 = iconStates[i]
          const s2 = iconStates[j]

          const cx1 = s1.x + centerOffset
          const cy1 = s1.y + centerOffset
          const cx2 = s2.x + centerOffset
          const cy2 = s2.y + centerOffset

          const diffX = cx2 - cx1
          const diffY = cy2 - cy1
          const distance = Math.sqrt(diffX * diffX + diffY * diffY)
          const minDistance = 70 // Slightly larger than 64 for visual buffer

          if (distance < minDistance && distance > 0) {
            // Elastic collision
            // Normal vector (from s1 to s2)
            const nx = diffX / distance
            const ny = diffY / distance

            // Tangent vector
            const tx = -ny
            const ty = nx

            // Dot product tangent (velocity component along tangent - unchanged)
            const dpTan1 = s1.dx * tx + s1.dy * ty
            const dpTan2 = s2.dx * tx + s2.dy * ty

            // Dot product normal (velocity component along normal - exchanged)
            const dpNorm1 = s1.dx * nx + s1.dy * ny
            const dpNorm2 = s2.dx * nx + s2.dy * ny

            // For equal mass elastic collision, simply swap normal components
            // New velocities = tangent component + swapped normal component
            s1.dx = tx * dpTan1 + nx * dpNorm2
            s1.dy = ty * dpTan1 + ny * dpNorm2
            s2.dx = tx * dpTan2 + nx * dpNorm1
            s2.dy = ty * dpTan2 + ny * dpNorm1

            // Separate overlapping circles to prevent sticking
            const overlap = minDistance - distance
            const separateX = (overlap / 2 + 1) * nx
            const separateY = (overlap / 2 + 1) * ny

            s1.x -= separateX
            s1.y -= separateY
            s2.x += separateX
            s2.y += separateY
          }
        }
      }

      // 3. Apply Transforms
      for (let i = 0; i < iconStates.length; i++) {
        const state = iconStates[i]
        state.el.style.transform = `translate(${state.x}px, ${state.y}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(initFrameId)
      cancelAnimationFrame(animationFrameId)
    }
  }, [speed])

  const createRipple = (container: HTMLElement, x: number, y: number) => {
    const ripple = document.createElement('div')
    ripple.className =
      'absolute w-1 rounded-full bg-[#f14a15]/30 animate-ripple pointer-events-none'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    container.appendChild(ripple)

    setTimeout(() => {
      if (container.contains(ripple)) container.removeChild(ripple)
    }, 1000)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full overflow-hidden pointer-events-none',
        className,
      )}
    >
      <style>{`
                @keyframes zoom-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.15); }
                }
                @keyframes ripple-effect {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
                    100% { transform: translate(-50%, -50%) scale(100); opacity: 0; }
                }
                .animate-ripple {
                    animation: ripple-effect 1s ease-out forwards;
                    aspect-ratio: 1;
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
            className="w-full h-full bg-card/70 backdrop-blur-md rounded-4xl shadow-lg shadow-[#f14a15]/20 border border-[#f14a15]/30 p-3 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            style={{
              animation: `zoom-pulse ${3 + ((index * 0.5) % 4)}s ease-in-out infinite`,
              animationDelay: `${index * 0.7}s`,
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
