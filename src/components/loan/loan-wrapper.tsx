'use client'

import { useSelectedSimulation } from '@/contexts/selected-simulation/use-selected-simulation'
import { PropsWithChildren } from 'react'

export function LoanWrapper({ children }: PropsWithChildren) {
  const { selectedSimulation } = useSelectedSimulation()

  if (!selectedSimulation) {
    return null
  }

  return <>{children}</>
}
