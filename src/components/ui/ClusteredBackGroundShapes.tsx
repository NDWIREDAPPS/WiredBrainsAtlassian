import { cn } from '@/lib/utils'

export function ClusteredBackGroundShapes({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn('relative hidden lg:block h-[500px] w-full', className)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f14a15]/15 rounded-full" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#f14a15] rounded-full mix-blend-multiply opacity-35 animate-blob" />
      <div className="absolute top-0 -left-4 w-72 h-72 bg-[#010101] rounded-full mix-blend-multiply opacity-25 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#010101] rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000" />
    </div>
  )
}
