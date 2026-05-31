// Funciones para interactuar con la BD de contraseñas en Supabase
import { supabase } from './supabase'

export interface Password {
  id: string
  user_id: string
  password_value: string
  created_at: string
  updated_at: string
}

// Guardar una contraseña nueva
export async function savePassword(passwordValue: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('No estás autenticado')
    }

    const { data, error } = await supabase
      .from('passwords')
      .insert([
        {
          user_id: user.id,
          password_value: passwordValue,
        }
      ])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

// Obtener todas las contraseñas del usuario
export async function getPasswords() {
  try {
    const { data, error } = await supabase
      .from('passwords')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data: (data as Password[]) || [] }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

// Eliminar una contraseña
export async function deletePassword(id: string) {
  try {
    const { error } = await supabase
      .from('passwords')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { success: true }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

// Actualizar una contraseña
export async function updatePassword(id: string, newValue: string) {
  try {
    const { data, error } = await supabase
      .from('passwords')
      .update({
        password_value: newValue,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}
