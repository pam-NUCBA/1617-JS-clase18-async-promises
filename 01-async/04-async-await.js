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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(menu);
            reject((err) => console.log(err));
        }, 2000);
    });
};

//async es que van a llegar en algún momento
const result = async() => {
    //try es intentá hacerlo. Si sale, hacés lo de adentro
    try {
        console.log(await getInfo()); //esperá que llegue getInfo
        //catch es agarrá el error, no lo dejes ahí suelto
    } catch (error) {
        console.log(error);
    }
    //acá iría el finally
};

result();

//*ojo! la sintaxis cuando no es flecha es levemente distinta:
// async function getInfo() {

// }