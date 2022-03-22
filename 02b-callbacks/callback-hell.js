const dividir = (num1, num2, cb) => {
    //cb va a ser una funcion sin nombre, pero que la puedo llamar acá adentro, y que va a tener 2 parametros
    //el primer param es el error, el segundo, es el ok (reject, resolve)
    if (num1 === 0 || num2 === 0) {
        cb(console.log("no podés dividir por cero!"), null); //ahora sabe que tiene dos parametro. En uno tiene que hacer console.log si hubo error (este if es el error!)
    } else {
        //el primero es nulo porque el error no existe!
        cb(null, num1 / num2); //el segundo valor ahora va a ser la cuenta. En el de error obviamente la cuenta no tenía valor!
    }
};

//al cb no le pongo nombre porque total no lo necesito afuera. Solo necesito que sea el tercer parámetro y tenga dos param propios: error y result!
dividir(15, 2, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log(res);
    }
});

//ahora vamos a ver el infierno
dividir(45, 5, (err, res1) => {
    if (err) {
        throw err;
    } else {
        console.log(res1);
        dividir(res1, 2, (err, res2) => {
            if (err) {
                throw err;
            } else {
                console.log(res2);
                dividir(res2, 3, (err, res3) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log(res3);
                    }
                });
            }
        });
    }
});

//*ESTO NO SE HACEEEEEEE