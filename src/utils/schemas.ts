import { z } from 'zod'
import {
  isValidBirthdate,
  isValidCPF,
  isValidloanAmount,
  isValidMonthlyPayment,
} from './validations'

const validStates = ['MG', 'SP', 'RJ', 'ES'] as const

export const simulationFormSchema = z.object({
  cpf: z
    .string()
    .min(1, 'CPF não pode ser vazio')
    .refine(isValidCPF, 'CPF inválido'),
  uf: z.enum(validStates, {
    errorMap: () => ({
      message: 'UF inválida. Estados válidos: MG, SP, RJ, ES',
    }),
  }),
  birthdate: z
    .string()
    .min(1, 'Data de nascimento não pode ser vazio')
    .refine(isValidBirthdate, 'Data de nascimento inválida'),
  loanAmount: z
    .string()
    .min(1, 'Valor do empréstimo não pode ser vazio')
    .refine(isValidloanAmount, 'Valor do empréstimo inválido'),
  monthlyPayment: z
    .string()
    .min(1, 'Valor da parcela não pode ser vazio')
    .refine(isValidMonthlyPayment, 'Valor da parcela inválido'),
})

export type SimulationFormType = z.infer<typeof simulationFormSchema>
