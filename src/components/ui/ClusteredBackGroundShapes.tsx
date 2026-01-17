import { cn } from '@/lib/utils'

export function ClusteredBackGroundShapes({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn('relative hidden lg:block h-[500px] w-full', className)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#f14a15]/20 rounded-full" />
      <div className="absolute top-8 right-6 w-40 h-40 bg-[#f14a15]/35 rounded-full mix-blend-screen opacity-60 animate-blob" />
      <div className="absolute top-4 -left-6 w-80 h-80 bg-[#f14a15]/20 rounded-full mix-blend-screen opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-10 left-16 w-80 h-80 bg-[#f14a15]/18 rounded-full mix-blend-screen opacity-55 animate-blob animation-delay-4000" />
    </div>
  )
}
