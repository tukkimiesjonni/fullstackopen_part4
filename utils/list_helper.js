const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => total + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  let maxBlog = blogs[0]

  for (const blog of blogs) {
    if (blog.likes > maxBlog.likes) {
      maxBlog = blog
    }
  }
  return maxBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
