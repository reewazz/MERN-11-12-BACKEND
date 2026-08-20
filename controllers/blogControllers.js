import Blog from "../model/Blog.js";

 export const CreateBlog =  async (req, res) => {
try {
  console.log(req.file)

  const imageName =req.file.filename
    const newBlog = await Blog.create({...req.body,image:imageName});
  res.json(newBlog);
}
catch(err) {
  return res.status(500).json ({
    message : err.message
  })
}
}


export const UpdateBlog = async (req, res) => {
  const {id} = req.params
  const newValue = req.body
  const newBlog = await Blog.findByIdAndUpdate(id,newValue,{new:true})
  res.json(newBlog);
}


 export const getAllBlogs =  async (req, res) => {
try{
    const allBlogs = await Blog.find().populate('category','-title')
  res.status(200).json(allBlogs);
}
catch (err) {
  console.error(err)
  
}
}