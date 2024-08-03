import { twMerge } from 'tailwind-merge'

interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function Subtitle({ className, ...props }: SubtitleProps) {
  return (
    <h2
      className={twMerge('font-bold text-center text-black', className)}
      {...props}
    />
  )
}
