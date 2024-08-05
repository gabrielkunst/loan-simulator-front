import * as React from 'react'
import { InputMask, MaskProps } from '@react-input/mask'
import { twMerge } from 'tailwind-merge'

export interface MaskedInputProps
  extends MaskProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ className, isError = false, ...props }, ref) => {
    return (
      <InputMask
        {...props}
        ref={ref}
        className={twMerge(
          'placeholder:text-custom-gray-600 outline-none focus:ring-1 ring-custom-gray-200 text-black border rounded border-custom-gray-200 w-full px-4 py-3 text-sm',
          isError ? 'border-red-500 ring-red-500' : '',
          className
        )}
      />
    )
  }
)

MaskedInput.displayName = 'MaskedInput'

export { MaskedInput }
