import { twMerge } from 'tailwind-merge'

interface LoanInfoProps {
  title: string
  value: string
  className?: string
}

export function LoanInfo({ title, value, className }: LoanInfoProps) {
  return (
    <div className={twMerge('space-y-1 font-bold', className)}>
      <h3 className="text-custom-gray-300 text-xs">{title}</h3>
      <p className="text-custom-gray-400">{value}</p>
    </div>
  )
}
