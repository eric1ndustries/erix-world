export function ScrollContainer({ children, speed = 30 }: { children: React.ReactNode, speed?: number }) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="carousel-track flex whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
