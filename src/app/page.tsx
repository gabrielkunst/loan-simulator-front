import { LoanWrapper } from '../components/loan/loan-wrapper'
import { LoanSection } from '../components/loan/loan-section'
import { SimulationSection } from '../components/simulation/simulation-section'
import { Title } from '../components/ui/title'

export default function HomePage() {
  return (
    <main className="bg-custom-gray-100 space-y-14 min-h-screen py-20 px-4">
      <Title>Simule e solicite o seu empréstimo.</Title>
      <SimulationSection />
      <LoanWrapper>
        <LoanSection />
      </LoanWrapper>
    </main>
  )
}
