import { signUp } from '@/lib/auth'

export async function POST({ request }: any) {
  try {
    const contentType = request.headers.get('content-type')
    
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ error: 'Content-Type debe ser application/json' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    let body
    try {
      body = await request.json()
    } catch (e) {
      return new Response(
        JSON.stringify({ error: 'JSON inválido en el body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { email, password } = body

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email y contraseña son requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ error: 'Contraseña debe tener al menos 6 caracteres' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = await signUp(email, password)

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: result.error }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Registro exitoso' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    console.error('Error en signup:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Error interno del servidor',
        details: error.stack 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
