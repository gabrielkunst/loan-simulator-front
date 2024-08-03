import { twMerge } from 'tailwind-merge'

interface ErrorMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function ErrorMessage({ className, ...props }: ErrorMessageProps) {
  if (!props.children) {
    return null
  }

  return (
    <p
      className={twMerge('text-red-500 text-sm mt-1 ml-1', className)}
      {...props}
    />
  )
}
