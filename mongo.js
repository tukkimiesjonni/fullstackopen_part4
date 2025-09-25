const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

if (process.argv.length > 3 && process.argv.length < 5) {
  console.log('add a new blog in this form (node mongo.js password title author url likes)')
  process.exit(1)
}
const password = process.argv[2]


// Uusi mongodb url tähän
const url = `mongodb+srv://jonnitukkimies:${password}@cluster0.f4jjywz.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)


const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

if (process.argv.length == 6) {
  console.log('Blog:')
  Blog.find({}).then(result => {
    result.forEach(blog => {
      console.log(Blog.title, Blog.author, Blog.url, Blog.likes)
    })
    mongoose.connection.close()
  })
}

if (process.argv.length == 6) {
  const title = process.argv[3]
  const author = process.argv[4]
  const url = process.argv[5]
  const likes = process.argv[6]

  const Blog = new Blog({
    title: String,
    author: String,
    url: String,
    likes: Number,  
  })

  Blog.save().then(result => {
    console.log('Added title', title, 'Name', number, 'Author', author, 'URL', url, 'likes', likes, 'to blog')
    mongoose.connection.close()
  })
}
