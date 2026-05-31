// Genera una contraseña aleatoria de 8 dígitos (números)
export function generatePassword(): string {
  let password = ''
  for (let i = 0; i < 8; i++) {
    password += Math.floor(Math.random() * 10)
  }
  return password
}

// Formatea la fecha para mostrar
export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Copia al portapapeles
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    return false
  }
}
