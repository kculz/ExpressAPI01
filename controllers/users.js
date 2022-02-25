import {v4 as uuidv4} from 'uuid'
let users =[]
export const getUsers =  (req,res)=>{
    res.send(users)
  }
export const createUser = (req,res)=>{
    const newUser = req.body
    users.push({...newUser,id:uuidv4()})
   res.send(`User with name ${newUser.firstname} is added to database`)
 }
export const getUser = (req,res)=>{
   const {id} = req.params
   const foundUser = users.find((user) => user.id === id)
   res.send(foundUser)
  }
export const deleteUser = (req,res)=>{
    const {id} = req.params
    users = users.filter((user)=> user.id !== id)
    res.send(`User with ID# ${id} is successfully removed from the database`)
  }
export const updateUser = (req,res)=>{ 
    const {id} = req.params
    const { firstname, lastname, age } = req.body
    const user = users.find((user) => user.id === id)
    if(firstname) user.firstname = firstname
    if(lastname) user.lastname = lastname
    if(age) user.age = age
  }
