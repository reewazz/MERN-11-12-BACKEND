import User from "../model/User.js";
import bcrypt from "bcrypt"

 export const CreateUser =  async (req, res) => {
try {

  
    const {password}  = req.body
    const hashedpassword = await bcrypt.hash(password,10)

    const newuser = await User.create({
        fullName : req.body.fullName,
        email : req.body.email,
        password : hashedpassword
    });
  res.json(newuser);
}
catch(err) {
  return res.status(500).json ({
    message : err.message
  })
}
}

export const login = async (req,res)=> {

    const {email,password} = req.body

    const existingUser = await User.findOne({email:email})
 

    if(!existingUser) {
        return res.status(404).send("user not found")
    }

    const isMatch = await bcrypt.compare(password,existingUser.password)

    if (!isMatch) {
        return res.status(404).send("email or password incorrect")

    }

    return res.json ({
        message : "Logged in sucessfully"
    })




}


// export const UpdateBlog = async (req, res) => {
//   const {id} = req.params
//   const newValue = req.body
//   const newBlog = await Blog.findByIdAndUpdate(id,newValue,{new:true})
//   res.json(newBlog);
// }


 export const getAllUsers =  async (req, res) => {
try{
    const allUsers = await User.find()
  res.status(200).json(allUsers);
}
catch (err) {
  console.error(err)
  
}
}