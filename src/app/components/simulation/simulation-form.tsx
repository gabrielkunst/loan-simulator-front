'use client'

import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../ui/error-message'
import { simulationFormSchema, SimulationFormType } from '@/app/utils/schemas'
import toast from 'react-hot-toast'

export function SimulationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SimulationFormType>({
    resolver: zodResolver(simulationFormSchema),
  })

  const onSubmit = async (formData: SimulationFormType) => {
    try {
      const response = await fetch('/api/simulations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.log(errorData)

        throw new Error(
          errorData.message || 'Ocorreu um erro ao simular o empréstimo.'
        )
      }

      const responseData = await response.json()

      console.log(responseData)

      // set as selected simulation on context
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Ocorreu um erro desconhecido ao simular o empréstimo.')
      }
    }
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          {...register('cpf')}
          disabled={isSubmitting}
          isError={!!errors.cpf}
          placeholder="CPF"
        />
        <ErrorMessage>{errors.cpf?.message}</ErrorMessage>
      </div>

      <div>
        <Input
          {...register('uf')}
          disabled={isSubmitting}
          isError={!!errors.uf}
          placeholder="UF"
        />
        <ErrorMessage>{errors.uf?.message}</ErrorMessage>
      </div>

      <div>
        <Input
          {...register('birthdate')}
          disabled={isSubmitting}
          isError={!!errors.birthdate}
          placeholder="DATA DE NASCIMENTO"
        />
        <ErrorMessage>{errors.birthdate?.message}</ErrorMessage>
      </div>

      <div>
        <Input
          {...register('loanValue')}
          disabled={isSubmitting}
          isError={!!errors.loanValue}
          placeholder="QUAL O VALOR DO EMPRÉSTIMO"
        />
        <ErrorMessage>{errors.loanValue?.message}</ErrorMessage>
      </div>

      <div>
        <Input
          {...register('monthlyPayment')}
          disabled={isSubmitting}
          isError={!!errors.monthlyPayment}
          placeholder="QUAL VALOR DESEJA PAGAR POR MÊS?"
        />
        <ErrorMessage>{errors.monthlyPayment?.message}</ErrorMessage>
      </div>

      <Button
        className="mt-2"
        disabled={isSubmitting}
      >
        SIMULAR
      </Button>
    </form>
  )
}
