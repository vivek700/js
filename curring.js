// function calculateVolume(length) {
//   return function (width) {
//     return function (heigth) {
//       return length * width * heigth;
//     };
//   };
// }
//
// const withLen = calculateVolume(2);
// const withLenAndWid = withLen(3);
// const vol = withLenAndWid(4);
//

const calculateVolume = (len) => (width) => (heigth) => len * width * heigth;

console.log(calculateVolume(2)(3)(4));
