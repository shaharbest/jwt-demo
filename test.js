const db = require('./db');
const Product = require('./models/Product');

main();

async function main() {
    db.connect();
    const result = await Product.find({});
    console.log(result);
    db.disconnect();
}