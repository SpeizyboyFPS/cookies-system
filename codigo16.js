// "use strict"

// const newFechaUTC = dias =>{
//     let fecha = new Date();
//     fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
//     return fecha.toUTCString();
// }

// const crearCookie = (name,días)=>{
//     let expires = newFechaUTC(días);
//     document.cookie = `${name};Expires=${expires}`;
// }



// crearCookie("user=Bairon","2");

// const obtenerCookie = cookieName=>{
//     let Cookies = document.cookie;
//     cookies = Cookies.split(";");
//     for (let i = 0; i < Cookies.length; i++) {
//         cookie = cookies[i].trim();
//         if (cookie.startsWith(cookieName)) {
//             return cookie.split("=")[1];
//         }
//         else{
//             return "No hay Cookies con ese nombre";
//         }
//     }
// }