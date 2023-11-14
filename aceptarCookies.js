
const newFechaUTC = dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}

const crearCookie = (name,días)=>{
    let expires = newFechaUTC(días);
    document.cookie = `${name};Expires=${expires}`;
}



crearCookie("user=Bairon","2");

const obtenerCookie = cookieName=>{
    let Cookies = document.cookie;
    cookies = Cookies.split(";");
    for (let i = 0; i < Cookies.length; i++) {
        cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.split("=")[1];
        }
        else{
            return "No hay Cookies con ese nombre";
        }
    }
}

if (obtenerCookie("acceptedCookies") !== "si"){
    setTimeout(()=>{
        document.querySelector(".bg-modal").style.zIndex = "10";
        document.querySelector(".bg-modal").style.opacity = "1";
        document.getElementById("accept").addEventListener("click",()=>{
            crearCookie("acceptCookies=si",23);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(()=>{
                document.querySelector(".bg-modal").style.zIndex = "-1";
            },1000)
        })
        document.getElementById("deny").addEventListener("click", ()=>{
            crearCookie("acceptCookies=no",2);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(()=>{
                document.querySelector(".bg-modal").style.zIndex = "-1";
            },1000)
        })
    },200)
}