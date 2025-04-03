import { error as logger } from 'firebase-functions/logger'
import { https } from 'firebase-functions/v2'
import { defaultStyle, roundedStyle } from './primary'

export const badge = https.onRequest(async (request, response) => {
  const { query } = request

  try {
    let svgContent

    // Verificar que el método de la solicitud sea GET
    if (request.method !== 'GET') {
      response.status(405).send(`Método ${request.method} no permitido.`)
      return
    }

    // Generar el contenido SVG
    if (query.style === 'default') {
      svgContent = defaultStyle(query)
    }

    if (query.style === 'rounded') {
      svgContent = roundedStyle(query)
    }

    // Establecer el tipo de contenido como image/svg+xml
    response.set('Content-Type', 'image/svg+xml')
    response.status(200).send(svgContent)
  } catch (error) {
    // Registrar el error y devolver un mensaje genérico
    logger('Error manejando la solicitud:', error)
    response.status(500).send('Error de servidor.')
  }
})
