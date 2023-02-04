import express from 'express'

import getNewsByCountry from '../controllers/getNewsByCountry.js'
import getNewsByCountryAndCategory from '../controllers/getNewsByCountryAndCategory.js'

const router = express.Router()

router.get('/:country', getNewsByCountry)
router.get('/:country/:category', getNewsByCountryAndCategory)

export default router