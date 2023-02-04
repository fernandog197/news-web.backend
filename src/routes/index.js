import express from 'express'

import routerByCountry from './getNewsByCountry.js'
import routerAllCountries from './getCountriesList.js'
import routerByCategory from './getNewsByCategory.js'

const router = express.Router()

router.use('/country', routerByCountry)
router.use('/countriesList', routerAllCountries)
router.use('/category', routerByCategory)

export default router