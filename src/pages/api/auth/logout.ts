import { signOut } from '@/lib/auth'

export async function POST({ cookies }: any) {
  try {
    const result = await signOut()

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: result.error }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    cookies.delete('sb-auth-token', { path: '/' })

    return new Response(
      JSON.stringify({ success: true, message: 'Logout exitoso' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
