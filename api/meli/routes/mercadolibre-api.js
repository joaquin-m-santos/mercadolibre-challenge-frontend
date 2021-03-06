var express = require('express')
var router = express.Router()
import { getItems, getItemByID } from '../controllers/meliApiController.js'

// define the home page route

// router.get('/items', async (req, res) => {

//   try {
//     let response = await getMeliItemsController(req.query.q);
//   }catch(error){

//   }

// })
router.get('/', (req, res) => {
  getItems(req, res)
})

// define the about route
router.get('/:id', (req, res) => {
  getItemByID(req, res)
})

module.exports = router
