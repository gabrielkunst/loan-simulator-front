import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Subtitle } from '../ui/subtitle'
import { LoanInfoWrapper } from './loan-info-wrapper'
import { LoanProjection } from './loan-projection'

export function LoanSection() {
  return (
    <section className="space-y-4">
      <Subtitle>
        Veja a simulação para o seu empréstimo antes de efetivar
      </Subtitle>

      <Card className="p-6 pb-8 mx-auto flex flex-col max-w-3xl gap-14">
        <LoanInfoWrapper />
        <LoanProjection />
        <Button
          variant="secondary"
          className="max-w-sm mx-auto"
        >
          EFETIVAR O EMPRÉSTIMO
        </Button>
      </Card>
    </section>
  )
}
