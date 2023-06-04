// /**
//  * Returns the first non repeated char in the specified strings otherwise returns null.
//  *
// //  * @param {string} str
// //  * @return {string}
//  *
// //  * @example:
//  *   'The quick brown fox jumps over the lazy dog' => 'T'
//  *   'abracadabra'  => 'c'
//  *   'entente' => null
//  */
// const findFirstSingleChar = (str) => {
//   const arr = str.split('');
//   const result = [];
//   console.log('arr', arr);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j) {
//         // console.log(`Сравнение ${arr[i]} и ${arr[j]}`);
//         if(arr[i] !== arr[j]) {
//           result.push(arr[i]);
//         }
//       }
//     }
//   }

//   console.log(result);
// };

// findFirstSingleChar('abracadabra');
