import { twMerge } from 'tailwind-merge'

const buttonVariants = {
  primary: 'bg-primary text-white ring-primary',
  secondary: 'bg-secondary text-white ring-secondary',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
}

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'text-center drop-shadow font-bold rounded focus:ring-1 w-full p-2 tracking-wider text-sm outline-none',
        buttonVariants[variant],
        className
      )}
      {...props}
    />
  )
}
