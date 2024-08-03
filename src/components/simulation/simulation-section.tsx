import { Card } from '../ui/card'
import { Subtitle } from '../ui/subtitle'
import { SimulationForm } from './simulation-form'

export function SimulationSection() {
  return (
    <section className="space-y-4">
      <Subtitle>Preencha o formulário abaixo para simular</Subtitle>

      <Card className="pt-10 px-8 pb-6 max-w-3xl mx-auto">
        <SimulationForm />
      </Card>
    </section>
  )
}
