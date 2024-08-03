import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isError = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          'placeholder:text-custom-gray-600 outline-none focus:ring-1 ring-custom-gray-200 text-black border rounded border-custom-gray-200 w-full px-4 py-3 text-sm',
          isError ? 'border-red-500 ring-red-500' : '',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
