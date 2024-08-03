import { LoanInfo } from './loan-info'

export function LoanInfoWrapper() {
  return (
    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="VALOR REQUERIDO:"
        value="R$ 60.000,00"
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="TAXA DE JUROS:"
        value="1% ao mês"
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="VALOR QUE DESEJA PAGAR POR MÊS:"
        value="R$ 15.000,00"
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="TOTAL DE MESES PARA QUITAR:"
        value="5 MESES"
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="TOTAL DE JUROS:"
        value="R$ 1.545,53"
      />
      <LoanInfo
        className="col-span-full sm:col-span-1"
        title="TOTAL A PAGAR:"
        value="R$ 61.545,53"
      />
    </div>
  )
}
