import React, {lazy,Suspense} from 'react';
import { Ring } from '@uiball/loaders'

const Main = lazy(()=>import('./components/mainPage/Main'))



function App() {
  return (
    <div className="App">
      <Suspense fallback={<div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}><Ring 
 size={40}
 lineWeight={5}
 speed={2} 
 color="black" 
/></div>}>
      <Main/>

      </Suspense>
    </div>
  );
}

export default App;
