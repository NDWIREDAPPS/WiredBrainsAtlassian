"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ImageZoomProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /** Zoom level multiplier (default: 2) */
    zoomLevel?: number
    /** Size of the magnifier lens in pixels (default: 150) */
    lensSize?: number
}

export function ImageZoom({
    src,
    alt,
    className,
    zoomLevel = 2,
    lensSize = 150,
    ...props
}: ImageZoomProps) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = React.useState(false)
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
    const [imageSize, setImageSize] = React.useState({ width: 0, height: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        setMousePos({ x, y })
        setImageSize({ width: rect.width, height: rect.height })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Calculate background position for the zoomed image
    const bgPosX = (mousePos.x / imageSize.width) * 100
    const bgPosY = (mousePos.y / imageSize.height) * 100

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={src}
                alt={alt}
                className={cn("w-full", className)}
                {...props}
            />

            {/* Magnifier Lens */}
            {isHovering && (
                <div
                    className="absolute pointer-events-none rounded-full border-2 border-white shadow-xl z-10"
                    style={{
                        width: lensSize,
                        height: lensSize,
                        left: mousePos.x - lensSize / 2,
                        top: mousePos.y - lensSize / 2,
                        backgroundImage: `url(${src})`,
                        backgroundSize: `${imageSize.width * zoomLevel}px ${imageSize.height * zoomLevel}px`,
                        backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                        backgroundRepeat: "no-repeat",
                    }}
                />
            )}
        </div>
    )
}
