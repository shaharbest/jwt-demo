const db = require('./db');
const Product = require('./models/Product');

const products = [
    { name: 'nuclear missle', price: 7 },
    { name: 'pita bread', price: 42 },
    { name: 'apple', price: 99 },
];

main();

async function main() {
    db.connect();
    console.log('resetting db...');
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('finished!');
    db.disconnect();
}