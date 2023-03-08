// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <div className="item-container">
        <div>
          <img className="item-image" src={imageUrl} alt={`item${id}`} />
        </div>
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-author-cont">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
