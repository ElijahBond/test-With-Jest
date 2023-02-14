// function expect(value) {
//     return {
//         toBe: exp => {
//             if (value === exp) {
//                 console.log('Success')
//             } else {
//                 console.error(`Value is ${value} but exp is ${exp}`)
//             }
//         }
//     }
// }

const sum = (a, b) => a + b;

const nativeNull = () => null;

// expect(sum(3, 97)).toBe(100);

module.exports = {sum, nativeNull}