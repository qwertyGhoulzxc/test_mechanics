import ky from 'ky'
import {IPost} from './interfaces/Post.interface'

const api = ky.create({prefixUrl:'https://jsonplaceholder.typicode.com/'})



export const PostService = {

    async getPosts(page:number=1,limit:number=10):Promise<IPost[]>{
        try{
        const res = await api.get('posts',{
            searchParams:{
                _limit:limit,
                _page:page
        }
    })
    const data = await res.json()

    return data as IPost[]
    }
    catch(e){
        console.error(e);
        throw e
    }
    },

}