import express from 'express'

import getNewsByCategory from '../controllers/getNewsByCategory.js'

const router = express.Router()

router.get('/:category', getNewsByCategory)

export default router