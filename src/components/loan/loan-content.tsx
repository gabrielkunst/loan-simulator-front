'use client'

import { useSelectedSimulation } from '@/app/contexts/selected-simulation/use-selected-simulation'
import { LoanInfoWrapper } from './loan-info-wrapper'
import { LoanProjection } from './loan-projection'
import { CreateLoanButton } from './create-loan-button'

export function LoanContent() {
  const { selectedSimulation, setSelectedSimulation } = useSelectedSimulation()

  if (!selectedSimulation) {
    return null
  }

  const handleCreate = () => {
    setSelectedSimulation(null)
  }

  const { simulation, form } = selectedSimulation

  return (
    <>
      <LoanInfoWrapper simulation={simulation} />
      <LoanProjection installments={simulation.installments} />
      <CreateLoanButton
        handleCreate={handleCreate}
        form={form}
      />
    </>
  )
}
