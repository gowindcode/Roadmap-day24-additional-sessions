// import { useEffect } from 'react';
import './App.css'
import MainBox from './Components/MainBox';
import SideBar from './Components/SideBar';
import TopBar from './Components/TopBar';
// import MainBox from './Components/MainBox';
// import SideBar from './Components/SideBar';
// import TopBar from './Components/TopBar';
import WorkSpace from './Components/WorkSpace';

function App() {

  return (
    <div>
    <WorkSpace>
      <TopBar>Top bar area</TopBar>
      <SideBar>Side Bar</SideBar>
      <MainBox>Main Box area</MainBox>
    </WorkSpace>
    </div>

   );
  }
  
  export default App
// function Classdetails(){
//   return(
//     <div>
//       <h2>React day 24 Additional class sessions</h2>
//       <h3>26/10/2023 - Thursday</h3>
//       <h3>Two different type of components are using in React JS</h3>
//       <ul>
//       <li>Functional Components</li>
//       <li>Class Components</li>
//       </ul>
//     </div>
//       );
//       }

  
// //stateless component example
//   function Stateless() {
//     return(
//       <div>
//         <h1>This is state less component sample</h1>
//       </div>
//     )
//   }

//   //statefull component example
//   function Statefull () {
//     const [state, setState] = useState("This is statefull component");
//     return(
//       <div>
//         <h1>{state}</h1>
//         <h1>{setState}</h1>
//         </div>
//     );
//   }

  // export default function App() {
  //   //initalization phase
  //   const [state, setState] = useState(0);

  //   //mounting phase
  //   useEffect(() => {
  //     console.log("This is mounting Phase");
  //   });
  // here above colser can show the last count in screen, but below empty array inbetween
//  },[]); can initizalise the fist setState value in every refresh or page open. 

  //   return (
  //     <div className='App'>
  //       <h1>{state}</h1>
  //       {/* updation phase */}
  //       <button onClick={() => setState(state+1)}></button>
  //       <button onClick={() => setState(state-1)}></button>
  //     </div>
  //   );
  // }
    
// // instead of this function components, we can write code in class components as below, but it is not advanced.
// export default class extends component {
//   render () {
//     return(
//       <div className='App'>
//         <h1>This is Class component method code writing</h1>
//         </div>
//     );
//   }
// }