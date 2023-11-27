// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Checkbox from '@mui/material/Checkbox';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// function App() {
//   return (
//     <div className="App">
//        <Checkbox {...label}  /> 
//     </div>
//   );
// }
// export default App;
import { RouterProvider } from 'react-router-dom';
import './App.css';
import {router} from './Router/router'

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />
}

export default App;