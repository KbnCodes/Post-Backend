const express = require('express')
const router = express.Router()

const {authenticateUser} = require('../app/middlewares/authenticate')

const usersController = require('../app/controllers/usersController')
const postsController = require('../app/controllers/postsController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)
router.get('/users/show', usersController.showApi)
router.get('/users/show/:id',usersController.show)

router.put('/users/:id', usersController.update)

router.get('/posts/show',postsController.showPost)
router.post('/posts/add',postsController.addPost)

module.exports = router