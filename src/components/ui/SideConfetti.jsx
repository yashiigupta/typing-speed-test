"use client"
import confetti from "canvas-confetti"

export const handleSideConfetti = () => {
  const end = Date.now() + 3 * 1000
  const colors = ["#F4DC73", "#177DFF", "#4DD67B", "#D64D5B"]
  const sizes = [0.6, 1, 1.6] // small, medium, large

  const frame = () => {
    if (Date.now() > end) return

    confetti({
      particleCount: 4,
      angle: 60,
      spread: 100,
      startVelocity: 80,
      origin: { x: 0, y: 1 },
      colors,
      shapes: ["square"],
      scalar: sizes[Math.floor(Math.random() * sizes.length)],
    })

    confetti({
      particleCount: 4,
      angle: 120,
      spread: 100,
      startVelocity: 80,
      origin: { x: 1, y: 1 },
      colors,
      shapes: ["square"],
      scalar: sizes[Math.floor(Math.random() * sizes.length)],
    })

    requestAnimationFrame(frame)
  }

  frame()
}
