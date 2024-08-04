import { Simulation } from '@/app/types'
import { LoanInfo } from './loan-info'
import { formatCurrency } from '@/app/utils/functions/format-currency'

interface LoanInfoWrapperProps {
  simulation: Omit<Simulation, 'installments'>
}

export function LoanInfoWrapper({ simulation }: LoanInfoWrapperProps) {
  return (
    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="VALOR REQUERIDO:"
        value={formatCurrency(simulation.requestedAmount)}
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="TAXA DE JUROS:"
        value={`${simulation.interestRate * 100}% ao mês`}
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="VALOR QUE DESEJA PAGAR POR MÊS:"
        value={formatCurrency(simulation.monthlyPayment)}
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="TOTAL DE MESES PARA QUITAR:"
        value={`${simulation.numberOfInstallments} MESES`}
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="TOTAL DE JUROS:"
        value={formatCurrency(simulation.totalInterest)}
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="TOTAL A PAGAR:"
        value={formatCurrency(simulation.totalPayment)}
      />
    </div>
  )
}
