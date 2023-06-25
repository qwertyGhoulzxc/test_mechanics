import React, {lazy,Suspense} from 'react';

const Main = lazy(()=>import('./components/mainPage/Main'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading ...</h1>}>
      <Main/>

      </Suspense>
    </div>
  );
}

export default App;
