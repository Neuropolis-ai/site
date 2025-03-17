"use client"

import { useEffect, useRef } from "react"

// Define types for pulse and line
interface Pulse {
    progress: number
    speed: number
    length: number
    active: boolean
    delay: number
}

interface Line {
    x1: number
    y1: number
    x2: number
    y2: number
}

export default function AnimatedAINetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas dimensions
        const setCanvasDimensions = () => {
            if (!canvas) return
            canvas.width = 450
            canvas.height = 340
        }

        setCanvasDimensions()
        window.addEventListener("resize", setCanvasDimensions)

        // Center position
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const boxSize = Math.min(canvas.width, canvas.height) * 0.15

        // Calculate box edges
        const boxLeft = centerX - boxSize / 2
        const boxRight = centerX + boxSize / 2
        const boxTop = centerY - boxSize / 2
        const boxBottom = centerY + boxSize / 2

        // Line endpoints - 3 lines from each side of the box
        // Important: First point is now INSIDE the box, not at the edge
        const lines: Line[] = [
            // Left side - 3 lines (inside box to left edge)
            { x1: centerX - boxSize / 4, y1: centerY - boxSize / 3, x2: 0, y2: centerY - boxSize / 3 },
            { x1: centerX - boxSize / 4, y1: centerY, x2: 0, y2: centerY },
            { x1: centerX - boxSize / 4, y1: centerY + boxSize / 3, x2: 0, y2: centerY + boxSize / 3 },

            // Right side - 3 lines (inside box to right edge)
            { x1: centerX + boxSize / 4, y1: centerY - boxSize / 3, x2: canvas.width, y2: centerY - boxSize / 3 },
            { x1: centerX + boxSize / 4, y1: centerY, x2: canvas.width, y2: centerY },
            { x1: centerX + boxSize / 4, y1: centerY + boxSize / 3, x2: canvas.width, y2: centerY + boxSize / 3 },

            // Top side - 3 lines (inside box to top edge)
            { x1: centerX - boxSize / 3, y1: centerY - boxSize / 4, x2: centerX - boxSize / 3, y2: 0 },
            { x1: centerX, y1: centerY - boxSize / 4, x2: centerX, y2: 0 },
            { x1: centerX + boxSize / 3, y1: centerY - boxSize / 4, x2: centerX + boxSize / 3, y2: 0 },

            // Bottom side - 3 lines (inside box to bottom edge)
            { x1: centerX - boxSize / 3, y1: centerY + boxSize / 4, x2: centerX - boxSize / 3, y2: canvas.height },
            { x1: centerX, y1: centerY + boxSize / 4, x2: centerX, y2: canvas.height },
            { x1: centerX + boxSize / 3, y1: centerY + boxSize / 4, x2: centerX + boxSize / 3, y2: canvas.height },
        ]

        // Create a single pulse for each line
        const pulses: Pulse[] = []

        lines.forEach(() => {
            // Each line has just one pulse
            pulses.push({
                progress: 0,
                speed: 0.002, // Slow, smooth movement
                length: 0.15, // Length of the pulse (as a percentage of the line)
                active: false, // Start inactive
                delay: Math.random() * 5000, // Random delay before starting
            })
        })

        // Track time for delays
        let startTime = Date.now()

        // Animation loop
        function animate() {
            if (!ctx || !canvas) return

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw dark background
            ctx.fillStyle = "#000814"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw all lines (but only the parts outside the box)
            lines.forEach((line) => {
                // Calculate where the line intersects with the box
                let startX: number, startY: number

                // Horizontal lines
                if (line.y1 === line.y2) {
                    startY = line.y1
                    if (line.x2 < centerX) {
                        // Left side
                        startX = boxLeft
                    } else {
                        // Right side
                        startX = boxRight
                    }
                }
                // Vertical lines
                else {
                    startX = line.x1
                    if (line.y2 < centerY) {
                        // Top side
                        startY = boxTop
                    } else {
                        // Bottom side
                        startY = boxBottom
                    }
                }

                // Draw only the part of the line outside the box
                ctx.beginPath()
                ctx.moveTo(startX, startY)
                ctx.lineTo(line.x2, line.y2)
                ctx.strokeStyle = "#1a2b5f"
                ctx.lineWidth = 2
                ctx.stroke()
            })

            // Current time for delays
            const currentTime = Date.now()

            // Draw animated pulses
            lines.forEach((line, lineIndex) => {
                const pulse = pulses[lineIndex]

                // Check if it's time to activate this pulse
                if (!pulse.active && currentTime - startTime > pulse.delay) {
                    pulse.active = true
                }

                // Only update active pulses
                if (pulse.active) {
                    // Update pulse position
                    pulse.progress += pulse.speed

                    // Reset when pulse reaches the end
                    if (pulse.progress > 1 + pulse.length) {
                        pulse.progress = -pulse.length
                        pulse.delay = Math.random() * 2000 // Add random delay before next pulse
                        pulse.active = false
                        startTime = currentTime
                    }

                    // Draw the pulse if it's visible
                    if (pulse.progress >= 0 && pulse.progress <= 1) {
                        // Calculate start and end positions of the pulse
                        const startProgress = Math.max(0, pulse.progress)
                        const endProgress = Math.min(1, pulse.progress + pulse.length)

                        // Calculate actual coordinates
                        const startX = line.x1 + (line.x2 - line.x1) * startProgress
                        const startY = line.y1 + (line.y2 - line.y1) * startProgress
                        const endX = line.x1 + (line.x2 - line.x1) * endProgress
                        const endY = line.y1 + (line.y2 - line.y1) * endProgress

                        // Draw gradient line for the pulse
                        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)

                        // Create a subtle gradient effect
                        gradient.addColorStop(0, "rgba(0, 100, 255, 0)")
                        gradient.addColorStop(0.5, "rgba(0, 100, 255, 0.4)")
                        gradient.addColorStop(1, "rgba(0, 100, 255, 0)")

                        // Draw the pulse
                        ctx.beginPath()
                        ctx.moveTo(startX, startY)
                        ctx.lineTo(endX, endY)
                        ctx.strokeStyle = gradient
                        ctx.lineWidth = 4
                        ctx.stroke()
                    }
                }
            })

            // Draw center box
            ctx.fillStyle = "#0a1744"
            ctx.strokeStyle = "#1a2b5f"
            ctx.lineWidth = 2
            roundRect(ctx, boxLeft, boxTop, boxSize, boxSize, 10)

            // Draw "AI" text
            ctx.fillStyle = "#aaaaaa"
            ctx.font = `bold ${boxSize * 0.6}px Arial`
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            ctx.fillText("AI", centerX, centerY)

            requestAnimationFrame(animate)
        }

        // Helper function to draw rounded rectangle
        function roundRect(
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number
        ) {
            ctx.beginPath()
            ctx.moveTo(x + radius, y)
            ctx.lineTo(x + width - radius, y)
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
            ctx.lineTo(x + width, y + height - radius)
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
            ctx.lineTo(x + radius, y + height)
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
            ctx.lineTo(x, y + radius)
            ctx.quadraticCurveTo(x, y, x + radius, y)
            ctx.closePath()
            ctx.fill()
            ctx.stroke()
        }

        // Start animation
        animate()

        // Cleanup
        return () => {
            window.removeEventListener("resize", setCanvasDimensions)
        }
    }, [])

    return (
        <div className="bg-black flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    )
}

