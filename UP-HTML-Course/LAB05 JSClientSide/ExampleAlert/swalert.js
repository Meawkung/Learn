import Swal from 'sweetalert2';

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
})

// const ipAPI = "//api.ipify.org?format=json";
// const response = await fetch(ipAPI);
// const data = await response.json();
// const inputValue = data.ip;
// const { value: ipAddress } = await Swal.fire({
//   title: "Enter your IP address",
//   input: "text",
//   inputLabel: "Your IP address",
//   inputValue,
//   showCancelButton: true,
//   inputValidator: (value) => {
//     if (!value) {
//       return "You need to write something!";
//     }
//   }
// });
// if (ipAddress) {
//   Swal.fire(`Your IP address is ${ipAddress}`);
// }