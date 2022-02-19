// import React, { useState } from "react";

// export default function About() {
//   const [myStyle, setmyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });

//   const [btnText, setbtnText] = useState("Enable Dark Mode");

//   const toggleStyle = () => {
//     if (myStyle.color === "black") {
//       setmyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: "1px solid white",
//       });
//       setbtnText("Enable Light Mode");
//     } else {
//       setmyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setbtnText("Enable Dark Mode");
//     }
//   };

//   return (
//     <div className="container" style={myStyle}>
//       <h1 className="mb-4">About Us</h1>
//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="headingOne">
//             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//               Accordion Item #1
//             </button>
//           </h2>
//           <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//             <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quidem nam quae necessitatibus laboriosam, fuga debitis velit officia laborum, nisi suscipit. Natus odio assumenda pariatur fuga autem iste quisquam adipisci.</div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="headingTwo">
//             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//               Accordion Item #2
//             </button>
//           </h2>
//           <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//             <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quidem nam quae necessitatibus laboriosam, fuga debitis velit officia laborum, nisi suscipit. Natus odio assumenda pariatur fuga autem iste quisquam adipisci.</div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="headingThree">
//             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               Accordion Item #3
//             </button>
//           </h2>
//           <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//             <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quidem nam quae necessitatibus laboriosam, fuga debitis velit officia laborum, nisi suscipit. Natus odio assumenda pariatur fuga autem iste quisquam adipisci.</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
