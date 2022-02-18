 import express from "express";
 import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";
 
 const router = express.Router()


 
 //get all users 
 router.get('/',getUsers);

 //posting new users to the list 
 router.post('/', createUser);

 // getting users with specific id#
 router.get('/:id',getUser);

 // delete user with a specific id#
  router.delete('/:id',deleteUser);

 // update specific user details using id#
  router.patch('/:id',updateUser)


 export default router;