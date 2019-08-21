// const selector = (id) => document.querySelector(`#${id}`);
// const form = selector('form');
// const msgSpan = selector('msg');

// const validate = () => {
//   let status;
//   if (selector('delivery').value !== true || selector('delivery').value !== false) {
//     msgSpan.textContent = 'The delivery filed should have a boolean value';
//     status = false;
//   } else if (typeof (selector('phone').value) !== Number) {
//     msgSpan.textContent = 'the phone should be a number';
//     status = false;
//   } else {
//     status = true;
//   }
//   return status;
// };

// form.addEventListener('onsubmit', (e) => {
//   if (!validate()) {
//     e.preventDefault();
//   }
// });
