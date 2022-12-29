import express from 'express'
import {getUser, getUserFriends, addRemoveFriend} from '../controllers/users.js'
import { verifyToken } from '../middlewares/auth.js'

const router = express.Router()
// Fetch user info
router.get('/:id',verifyToken,getUser)
// Fetch friends of a user
router.get("/:id/friends",verifyToken,getUserFriends)
// Update Friend List of user
router.put("/:id:/friendId",verifyToken,addRemoveFriend)

export default router