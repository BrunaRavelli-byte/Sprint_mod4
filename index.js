import express from 'express';
const app = express();

app.get('/desenvolvedor', (req, res) => {
    res.send('Rota principal');
})

app.listen(3333, () => {
    console.log("Hello, world");
})

//import {Css} from './src/controller/dev-controller.js'

let css = [  
    {
        propriedade: 'background_color'
    },
    {
        propriedade: 'align_text'
    },
    {
        propriedade: 'font_size'
    },
    {
        propriedade: 'border'
    },
    {
        propriedade: 'font-size'
    },
    {
        propriedade: 'color'
    },
    {
        propriedade: 'padding'
    },
    {
        propriedade: 'Sair'
    }
];

for (let item in css){
    console.log(item + " - " + css[item]);
}; 



css.sort(function(a, b){
    if (a.propriedade < b.propriedade) {
        return -1;
    } else {
        return true;
    }
})

console.log(css);