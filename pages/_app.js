import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

// // import admin from "./admin";
// import Home from "./index";
// import Userhotel from "./user/hotel/index";
// import Userhotelroom from "./user/hotel/room";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function MyApp() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/user/hotel" element={<Userhotel />}></Route>
//         <Route path="/user/hotel/room" element={<Userhotelroom />}></Route>
//         {/* <Route path="*" element={<NotFound />}></Route> */}
//       </Routes>
//     </BrowserRouter>

//   );
// }
// export default MyApp;
