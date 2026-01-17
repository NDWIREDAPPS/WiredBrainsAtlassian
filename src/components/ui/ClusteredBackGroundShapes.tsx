import { cn } from '@/lib/utils'

export function ClusteredBackGroundShapes({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn('relative hidden lg:block h-[500px] w-full', className)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#f14a15]/22 dark:bg-[#f14a15]/38 rounded-full" />
      <div className="absolute top-6 right-6 w-44 h-44 bg-[#f14a15]/32 dark:bg-[#f14a15]/45 rounded-full mix-blend-multiply opacity-70 animate-blob" />
      <div className="absolute top-6 -left-6 w-80 h-80 bg-[#f14a15]/26 dark:bg-[#f14a15]/40 rounded-full mix-blend-multiply opacity-60 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-10 left-16 w-80 h-80 bg-[#f14a15]/24 dark:bg-[#f14a15]/38 rounded-full mix-blend-multiply opacity-65 animate-blob animation-delay-4000" />
    </div>
  )
}
