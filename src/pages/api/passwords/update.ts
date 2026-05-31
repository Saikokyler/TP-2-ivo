import { updatePassword } from '@/lib/password-db'

export async function POST({ request }: any) {
  try {
    const { id, password_value, site } = await request.json()

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID es requerido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!password_value) {
      return new Response(
        JSON.stringify({ error: 'Password es requerida' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = await updatePassword(id, password_value, site || null)

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
