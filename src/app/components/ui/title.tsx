import { twMerge } from 'tailwind-merge'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function Title({ className, ...props }: TitleProps) {
  return (
    <h1
      className={twMerge(
        'font-light text-custom-gray-600  text-center text-3xl md:text-4xl',
        className
      )}
      {...props}
    />
  )
}
