import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function SimulationForm() {
  return (
    <form className="flex flex-col gap-2">
      <Input placeholder="CPF" />
      <Input placeholder="UF" />
      <Input placeholder="DATA DE NASCIMENTO" />
      <Input placeholder="QUAL O VALOR DO EMPRÉSTIMO" />
      <Input placeholder="QUAL VALOR DESEJA PAGAR POR MÊS?" />
      <Button className="mt-2">SIMULAR</Button>
    </form>
  )
}
