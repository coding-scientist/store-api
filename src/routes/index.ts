import { Router } from 'express'
import { get } from '../controllers/index'

const router = Router()

router.route('/').get(get)

export {
	router as indexRouter
}