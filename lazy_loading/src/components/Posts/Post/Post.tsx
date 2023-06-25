import React,{ FC,ForwardedRef,forwardRef } from 'react'
import { IPost } from '../../../services/interfaces/Post.interface'
import './PostStyle.scss'

interface PostProps {
post:IPost
ref?: ForwardedRef<HTMLDivElement>;
}



const Post: FC<PostProps> = forwardRef<HTMLDivElement,PostProps>(({post},ref) => {
  return <div className='post' ref={ref}>
    <h2 className='title'><span>Title: </span>{post.title}</h2>
    <p className='text'><span>Description: </span>{post.body}</p>
    {post.id}

  </div>
})

export default Post