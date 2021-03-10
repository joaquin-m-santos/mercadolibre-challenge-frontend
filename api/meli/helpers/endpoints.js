const API_MERCADOLIBRE = 'https://api.mercadolibre.com'

export const apiItems = `${API_MERCADOLIBRE}/sites/MLA/search?q=:query&limit=4`
export const apiItem = `${API_MERCADOLIBRE}/items/:id`
export const apiItemDescription = `${API_MERCADOLIBRE}/items/:id/description`
export const apiCategory = `${API_MERCADOLIBRE}/categories/:category`
