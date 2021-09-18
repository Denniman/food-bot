import React, { Suspense } from 'react';
import Routing from './Routing';
import Loading from './components/Loading';

// const Loader = lazy(() => import('./components/Loading'));

// const Loading = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <h1>Please wait...</h1>
//     </div>
//   );
// };

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routing />
    </Suspense>
  );
}

export default App;
