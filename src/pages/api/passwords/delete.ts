import { deletePassword } from '@/lib/password-db'

export async function POST({ request }: any) {
  try {
    const { id } = await request.json()

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID es requerido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = await deletePassword(id)

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: result.error }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'Error interno' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
