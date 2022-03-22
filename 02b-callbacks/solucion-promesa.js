//la promesa va a cumplir el papel de ese callback
const dividir = (num1, num2) => {
    return new Promise((resolve, reject) => {
        //casos tristes
        //&& en este caso es cortocircuito. Significa que si se cumple, hacemos algo
        num1 === 0 && reject(new Error("boo")); // si es verdad que es cero, rechazalo
        num2 === 0 && reject(new Error("boo"));

        //caso feliz
        resolve(num1 / num2);
    });
};

dividir(30, 2)
    .then((res1) => {
        console.log(res1);
        return dividir(res1, 2);
    })
    .then((res2) => {
        console.log(res2);
        return dividir(res2, 7);
    })
    .then((res3) => {
        console.log(res3);
        return dividir(res3, 0); //acá hay un error! va a ir al catch, no a los siguientes then
    })
    .then((res4) => {
        console.log(res4);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("chau"));