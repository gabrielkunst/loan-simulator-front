import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'placeholder:text-custom-gray-600 outline-none focus:ring-1 ring-custom-gray-200 text-black border rounded border-custom-gray-200 w-full px-4 py-3 text-sm',
        className
      )}
      {...props}
    />
  )
}
