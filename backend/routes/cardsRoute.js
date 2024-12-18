import express from 'express'
import { cardsList } from '../controllers/cardsController.js'



const cardsRoute = express.Router();


cardsRoute.get('/list',cardsList)






export default cardsRoute;