const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: []
    },
    {
        id: 'whiteshirt',
        description: 'White Shirt',
        price: 10.4,
        reviews: []
    },
    {
        id: 'bluejean',
        description: 'Blue Jean',
        price: 55.55,
        reviews: []
    },
]

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    })
}

function getProductById(id) {
    return products.find((product) => {
        return product.id == id
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id, price, products, description, reviews: []
    }
    products.push(newProduct)
    return newProduct
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct

}