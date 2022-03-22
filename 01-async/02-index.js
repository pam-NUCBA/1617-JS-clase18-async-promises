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

//console.log(info[1].type)
const getInfo = () => {
    setTimeout(() => {
        console.log('uf, uf, ahí llegué!')
        return menu;
    }, 1000);
};
//dio undefined! por qué? porque ese console.log y getInfo son sincrónicos, no esperan a los datos. No saben qué va a llegar, buscan y no lo encuentran

console.log(getInfo());