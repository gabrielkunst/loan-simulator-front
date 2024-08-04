import { Card } from '../ui/card'
import { Subtitle } from '../ui/subtitle'
import { LoanContent } from './loan-content'

export function LoanSection() {
  return (
    <section className="space-y-4">
      <Subtitle>
        Veja a simulação para o seu empréstimo antes de efetivar
      </Subtitle>

      <Card className="p-6 pb-8 mx-auto flex flex-col max-w-3xl gap-14">
        <LoanContent />
      </Card>
    </section>
  )
}
