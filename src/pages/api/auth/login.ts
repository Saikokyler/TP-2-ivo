import { signIn } from '@/lib/auth'

export async function POST({ request, cookies }: any) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email y contraseña son requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = await signIn(email, password)

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: result.error }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Guardar token en cookie
    if (result.data?.session?.access_token) {
      cookies.set('sb-auth-token', result.data.session.access_token, {
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Login exitoso' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
