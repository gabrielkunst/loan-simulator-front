const tableData = [
  {
    id: 1,
    outstandingBalance: 'R$ 60,000.00',
    interest: 'R$ 600.00',
    adjustedOutstandingBalance: 'R$ 60,600.00',
    installmentValue: 'R$ 15,000.00',
    dueDate: '20/09/21',
  },
  {
    id: 2,
    outstandingBalance: 'R$ 45.600,00',
    interest: 'R$ 456,00',
    adjustedOutstandingBalance: 'R$ 46.056,00',
    installmentValue: 'R$ 15,000.00',
    dueDate: '20/10/21',
  },
]

export function LoanProjection() {
  return (
    <div className="space-y-6">
      <h3 className="text-custom-gray-300 text-xs font-bold">
        PROJEÇÃO DAS PARCELAS:
      </h3>

      <table className="w-full">
        <thead className="border-b border-custom-gray-50">
          <tr>
            <th className="text-custom-gray-400 pr-4 py-3 text-sm text-left">
              SALDO DEVEDOR
            </th>
            <th className="text-custom-gray-400 pr-4 py-3 text-sm text-left">
              JUROS
            </th>
            <th className="text-custom-gray-400 pr-4 py-3 text-sm text-left">
              SALDO DEVEDOR AJUSTADO
            </th>
            <th className="text-custom-gray-400 pr-4 py-3 text-sm text-left">
              VALOR DA PARCELA
            </th>
            <th className="text-custom-gray-400 py-3 text-sm text-left">
              VENCIMENTO
            </th>
          </tr>
        </thead>
        <tbody className="">
          {tableData.map((row) => (
            <tr
              key={row.id}
              className="border-b border-custom-gray-50"
            >
              <td className="text-custom-gray-400 py-3 pr-4">
                {row.outstandingBalance}
              </td>
              <td className="text-custom-gray-400 py-3 pr-4">{row.interest}</td>
              <td className="text-custom-gray-400 py-3 pr-4">
                {row.adjustedOutstandingBalance}
              </td>
              <td className="text-custom-gray-400 py-3 pr-4">
                {row.installmentValue}
              </td>
              <td className="text-custom-gray-400 py-3">{row.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
