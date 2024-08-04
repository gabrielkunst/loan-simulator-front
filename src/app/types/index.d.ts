export type Installment = {
  outstandingBalance: number
  interest: number
  adjustedBalance: number
  installmentAmount: number
  dueDate: string
}

export type Simulation = {
  requestedAmount: number
  interestRate: number
  monthlyPayment: number
  numberOfInstallments: number
  totalInterest: number
  totalPayment: number
  installments: Installment[]
}
