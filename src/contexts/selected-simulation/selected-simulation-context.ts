import { Simulation } from '@/types'
import { SimulationFormType } from '@/utils/schemas'
import { createContext } from 'react'

export type SimulationContextType = {
  simulation: Simulation
  form: SimulationFormType
}

type SelectedSimulationContextProps = {
  selectedSimulation: SimulationContextType | null
  setSelectedSimulation: React.Dispatch<
    React.SetStateAction<SimulationContextType | null>
  >
}

export const SelectedSimulationContext =
  createContext<SelectedSimulationContextProps>({
    selectedSimulation: null,
    setSelectedSimulation: () => {},
  })
