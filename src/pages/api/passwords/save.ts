import { savePassword } from '@/lib/password-db'

export async function POST({ request }: any) {
  try {
    const { password_value } = await request.json()

    if (!password_value) {
      return new Response(
        JSON.stringify({ error: 'Password es requerida' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = await savePassword(password_value)

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: result.error }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, data: result.data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'Error interno' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
