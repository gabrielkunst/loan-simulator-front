import { Installment } from '@/types'
import { formatCurrency } from '@/utils/functions/format-currency'

interface LoanProjectionProps {
  installments: Installment[]
}

export function LoanProjection({ installments }: LoanProjectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-custom-gray-300 text-xs font-bold">
        PROJEÇÃO DAS PARCELAS:
      </h3>

      <div className="w-full overflow-x-auto">
        <table>
          <thead className="border-b border-custom-gray-50">
            <tr>
              <th className="text-custom-gray-400 pr-4 py-3 text-sm truncate text-left">
                SALDO DEVEDOR
              </th>
              <th className="text-custom-gray-400 pr-4 py-3 text-sm truncate text-left">
                JUROS
              </th>
              <th className="text-custom-gray-400 pr-4 py-3 text-sm truncate text-left">
                SALDO DEVEDOR AJUSTADO
              </th>
              <th className="text-custom-gray-400 pr-4 py-3 text-sm truncate text-left">
                VALOR DA PARCELA
              </th>
              <th className="text-custom-gray-400 py-3 text-sm truncate text-left">
                VENCIMENTO
              </th>
            </tr>
          </thead>
          <tbody>
            {installments.map((installments) => (
              <tr
                key={installments.outstandingBalance}
                className="border-b border-custom-gray-50"
              >
                <td className="text-custom-gray-400 py-3 pr-4">
                  {formatCurrency(installments.outstandingBalance)}
                </td>
                <td className="text-custom-gray-400 py-3 pr-4">
                  {formatCurrency(installments.interest)}
                </td>
                <td className="text-custom-gray-400 py-3 pr-4">
                  {formatCurrency(installments.adjustedBalance)}
                </td>
                <td className="text-custom-gray-400 py-3 pr-4">
                  {formatCurrency(installments.installmentAmount)}
                </td>
                <td className="text-custom-gray-400 py-3">
                  {installments.dueDate}
                </td>
              </tr>
            ))}

            <tr className="border-b border-custom-gray-50">
              <td className="text-custom-gray-400 py-3 pr-4">
                {formatCurrency(0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
