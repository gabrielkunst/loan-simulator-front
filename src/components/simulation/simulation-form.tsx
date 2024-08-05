'use client'

import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../ui/error-message'
import { simulationFormSchema, SimulationFormType } from '@/utils/schemas'
import toast from 'react-hot-toast'
import { useSelectedSimulation } from '@/contexts/selected-simulation/use-selected-simulation'
import { CustomError } from '@/utils/custom-error'
import { MaskedInput } from '../ui/masked-input'

export function SimulationForm() {
  const { setSelectedSimulation } = useSelectedSimulation()
  const {
    register,
    handleSubmit,
    reset,
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

      const json = await response.json()

      if (!response.ok) {
        throw new CustomError(
          json.message || 'Ocorreu um erro ao simular o empréstimo.'
        )
      }

      setSelectedSimulation({
        simulation: json.simulation,
        form: formData,
      })

      reset()
    } catch (error) {
      if (error instanceof CustomError) {
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
        <MaskedInput
          {...register('cpf')}
          mask="___.___.___-__"
          replacement={{ _: /\d/ }}
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
        <MaskedInput
          {...register('birthdate')}
          mask="dd/mm/yyyy"
          replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
          disabled={isSubmitting}
          isError={!!errors.birthdate}
          placeholder="DATA DE NASCIMENTO"
        />
        <ErrorMessage>{errors.birthdate?.message}</ErrorMessage>
      </div>

      <div>
        <Input
          {...register('loanAmount')}
          disabled={isSubmitting}
          isError={!!errors.loanAmount}
          placeholder="QUAL O VALOR DO EMPRÉSTIMO"
        />
        <ErrorMessage>{errors.loanAmount?.message}</ErrorMessage>
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
