// CHALLENGE: uncomment the code below and see the car stats rendered

// import animals from "./data.js";
//
// console.log(animals);
//
// const [cat, dog] = animals;
// console.log(cat);
// const {name, sound} = cat;
// console.log(sound)

import cars from "./practice.js";

const [honda, tesla] = cars;

const { coloursByPopularity: [hondaTopColour], speedStats: {topSpeed: hondaTopSpeed} } = honda
console.log(honda.model, hondaTopSpeed, hondaTopColour)

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
