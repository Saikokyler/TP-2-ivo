import { supabase } from '@/lib/supabase'

export async function signUp(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error en registro'
    return { success: false, error: message }
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    return { success: true, data }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error en login'
    return { success: false, error: message }
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { success: true }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error en logout'
    return { success: false, error: message }
  }
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}
