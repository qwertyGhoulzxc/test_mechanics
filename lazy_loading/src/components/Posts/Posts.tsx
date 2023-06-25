import { FC, lazy, useEffect, useMemo, useState,Suspense } from 'react'
import { IPost } from '../../services/interfaces/Post.interface'
import { PostService } from '../../services/postService'
import {useInView} from 'react-intersection-observer'
import { DotPulse, Ring } from '@uiball/loaders'
import Loading from '../Loading'

const Post =lazy(()=>import('./Post/Post'))

const Posts: FC = () => {
    const [posts,setPosts] = useState<IPost[]>([])
    const [loading,setLoading] = useState<boolean>(false) 

    const [page,setPage] = useState<number>(1)
    const lazyLoadingPostStart:number = 7;
    const Limit:number =10
    const {ref:NextPageLoadingRef,inView} = useInView({
        threshold:0.5
    })
    
    const getAndSetData=async(page:number=1,limit:number=Limit)=>{
        setLoading(true)
        const data = await PostService.getPosts(page,limit)
        setPosts(prev=>[...prev,...data])
        setLoading(false)
    }

    useEffect(()=>{
        getAndSetData(page)
    },[])

    useEffect(()=>{
        if(inView){
        setPage(prev=>{
            const nextPage =++prev
            getAndSetData(nextPage);
            return nextPage
        })
        }

    },[inView])

    const memoizedPosts = useMemo(() => posts, [posts]);


  return <div>
  <h1>Posts:</h1>
  <Suspense fallback={<Loading/>}>
    {memoizedPosts.map(val=>{
        return val.id==(page-1)*Limit+lazyLoadingPostStart?<Post key={val.id} ref={NextPageLoadingRef} post={val}/> :<Post key={val.id} post={val}/>
    })}
    </Suspense>
    {loading&&<Loading/>}
  </div>
}

export default Posts