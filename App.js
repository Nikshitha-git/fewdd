// // // // import logo from './logo.jpeg';
// // // import './App.css';
// // // import First from './components/first/First';
// // // import Second from './components/second/second';
// // // import Third from './components/third/third';
// // // import Fourth from './components/fourth/fourth';
// // // function App(){
// // //   const greeting = "Hello from thrid element Parent!";
// // //   const age=30;
// // //   return(
// // //     <div className='App'>
// // //       <h1>Welcome to nesting components in reactjs</h1>
// // //       {/* Nesting First component here */}
// // //       <First></First>
// // //       <Second></Second>
// // //       <Third greeting={greeting} />
// // //       <Fourth age={age}/>
// // //       </div>


// // //   );
// // // }

// // // export default App;
// // import logo from './logo.svg';
// // import './App.css';
// // import Eventhandling from './components/event/Eventhandling';
// // import Onmouseover from './components/Onmouseover/Onmouseover';

// // function App() {
// //   return (
// //     <div className="App">
// //           {/* <Eventhandling></Eventhandling> */}
// //           <Onmouseover></Onmouseover>
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';

//   import DF from './DF';


//   function App(){
//     return(
//       <div className="App">
//         <h1>Form Handling</h1>
//         {/* <Event/> */}
//         {/* <counter/> */}
//         {/* <PC/> */}
//         {/* <CR num={0}/> */}
//         {/* <ClassCR/> */}
//         {/* <FormHandling/> */}
//         <DF/>

//       </div>
//     );
//   }
//   export default App;
import React from 'react';
import ContactUs from './ContactUs';

function App() {
  return (
    <div className="App">
      <ContactUs />
    </div>
  );
}

export default App;
