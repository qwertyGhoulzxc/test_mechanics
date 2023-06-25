import { DotPulse } from '@uiball/loaders'
import { FC } from 'react'

const Loading: FC = () => {
  return <div style={{display:'flex',justifyContent:"center",margin:'20px 0'}}>
  <DotPulse 
size={60}
speed={1.3} 
color="black" 
/>
</div>
}

export default Loading