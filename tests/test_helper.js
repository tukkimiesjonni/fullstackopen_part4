const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'First blog',
    author: 'John Pork',
    url: 'https://myfirstblog.com',
    likes: 7
  },
  {
    title: 'Second blog',
    author: 'John Cena',
    url: 'https://mysecondblog.com',
    likes: 9
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((blog) => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}