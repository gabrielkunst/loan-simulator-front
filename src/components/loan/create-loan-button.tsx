import { useState } from 'react'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import { CustomError } from '@/utils/custom-error'
import { SimulationFormType } from '@/utils/schemas'

interface CreateLoanButtonProps {
  handleCreate: () => void
  form: SimulationFormType
}

export function CreateLoanButton({
  handleCreate,
  form,
}: CreateLoanButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateLoan = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/loans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const json = await response.json()

      if (!response.ok) {
        throw new CustomError(
          json.message || 'Ocorreu um erro ao criar o empréstimo.'
        )
      }

      handleCreate()
      toast.success(json.message)
    } catch (error) {
      if (error instanceof CustomError) {
        toast.error(error.message)
      } else {
        toast.error('Ocorreu um erro desconhecido ao criar o empréstimo.')
      }
    }

    setIsLoading(false)
  }

  return (
    <Button
      variant="secondary"
      className="max-w-sm mx-auto"
      onClick={handleCreateLoan}
      disabled={isLoading}
    >
      EFETIVAR O EMPRÉSTIMO
    </Button>
  )
}
