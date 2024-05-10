const router = require('express').Router();

const {products} = require('../../resource/files/data');

console.log(products);
console.log(Object.keys(products).length);

const myMAP = new Map();

router.post("/", (req, res) => {
    const {code, description, stock, value, 'sotck-min': stockMin} = req.body;
    myMAP.set(code, {code, description, stock, value, 'sotck-min': stockMin});
    res.redirect('/');
});

router.get('/add-product', (req, res) => {
    res.render('new-product.ejs', { title: 'Products', products: myMAP});
})

router.get('/', (req, res) => {
    res.render('index.ejs', { title: 'My Web Page', message: 'Hello there!'});
});

module.exports = router;