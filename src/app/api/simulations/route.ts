import { simulationFormSchema } from '@/utils/schemas'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const isValidFields = simulationFormSchema.safeParse(body)

  if (!isValidFields.success) {
    return NextResponse.json(
      {
        message:
          'Dados inválidos. Verifique se todos os campos foram preenchidos corretamente.',
        errors: isValidFields.error.flatten(),
      },
      {
        status: 400,
      }
    )
  }

  // call backend and return response

  return NextResponse.json({
    message: 'Simulação realizada com sucesso!',
  })
}
