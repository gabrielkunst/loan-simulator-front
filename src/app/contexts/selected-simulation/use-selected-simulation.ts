import { useContext } from 'react'
import { SelectedSimulationContext } from './selected-simulation-context'

export function useSelectedSimulation() {
  return useContext(SelectedSimulationContext)
}
