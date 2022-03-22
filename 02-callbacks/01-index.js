//*https://developer.mozilla.org/es/docs/Glossary/Callback_function
//*https://www.javascripttutorial.net/javascript-callback/

const userName = document.getElementById("nombre");

const getUserName = (callback) => {
    let user = prompt("decinos tu nombre! sos el ganador de un millón de dólares!");
    //me traigo por parámetro la otra función, y lo que capture user es lo que va a recibir la otra
    callback(user);
};

//console.log('user', user) //acá rompería, porque user vive adentro de getUserName

//recibe el nombre y hace algo
const sayHello = (nombre) => {
    alert("Hola " + nombre);
    userName.innerHTML = nombre;
};

getUserName(sayHello);