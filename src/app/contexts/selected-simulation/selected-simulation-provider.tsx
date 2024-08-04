'use client'

import { PropsWithChildren, useState } from 'react'
import {
  SelectedSimulationContext,
  SimulationContextType,
} from './selected-simulation-context'

export function SelectedSimulationProvider({ children }: PropsWithChildren) {
  const [selectedSimulation, setSelectedSimulation] =
    useState<SimulationContextType | null>(null)

  return (
    <SelectedSimulationContext.Provider
      value={{ selectedSimulation, setSelectedSimulation }}
    >
      {children}
    </SelectedSimulationContext.Provider>
  )
}
