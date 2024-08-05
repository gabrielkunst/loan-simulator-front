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

  const apiUrl = process.env.API_URL

  if (!apiUrl) {
    return NextResponse.json(
      {
        message: 'Ocorreu um erro interno. Tente novamente mais tarde.',
      },
      {
        status: 500,
      }
    )
  }

  const [day, month, year] = body.birthdate.split('/')
  const formattedDate = new Date(`${year}-${month}-${day}`).toISOString()

  const response = await fetch(`${apiUrl}/loans/simulation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...body,
      date: formattedDate,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    return NextResponse.json(
      {
        message: data.message,
      },
      {
        status: response.status,
      }
    )
  }

  return NextResponse.json(data)
}
