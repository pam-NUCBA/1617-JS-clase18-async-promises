const menu = [{
        id: 1,
        type: "desayuno",
        nombre: "café y dos medialunas",
    },
    {
        id: 2,
        type: "almuerzo",
        nombre: "bife a caballo",
    },
    {
        id: 3,
        type: "merienda",
        nombre: "tostado",
    },
];

const getInfo = () => {
    //el primer paso es crear la promesa nueva
    //resolve es el "caso feliz". Reject es "falló por algún motivo"
    return new Promise((resolve, reject) => {
        //con resolve, le decimos que eventualmente van a llegar los datos para resolverlo
        setTimeout(() => {
            console.log("uf, uf, ahí llegué!");
            resolve(menu);
            reject((err) => console.log(err));
        }, 2000);
    });
};

//getInfo ahora espera a que lleguen los datos!
getInfo()
    //y entonces...
    .then((menu) => console.log(menu)) //podemos tener muchos then
    .then(() => console.log("qué alegría")) //este segundo then depende de que funcione el primero
    .catch((err) => console.log(err)) //catch es para todos
    .finally(() => console.log("eso es todo amigos")); //finally se ejecuta con then y con catch. Es optativo.