import Swal from "sweetalert2";

 let showError = (errorMessage) => {
   return Swal.fire({
     title: "Error!",
     text: errorMessage,
     icon: "error",
     confirmButtonText: "Ok",
   });
}
export default showError;