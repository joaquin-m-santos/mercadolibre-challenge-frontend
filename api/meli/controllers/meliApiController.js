import getItemByIDUseCase from '../useCases/ItemDetail/getMeliItemUseCase.js'

import getItemsUseCase from '../useCases/ItemList/getMeliItemsUseCase.js'

export const getItems = (req, res) => {
  getItemsUseCase(req.query.q)
    .then((val) => {
      res.status(200).json(val)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}

export const getItemByID = (req, res) => {
  let id = req.params.id

  getItemByIDUseCase(id)
    .then((val) => {
      res.status(200).json(val)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
}
