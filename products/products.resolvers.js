const productsModel = require('./products.model')
odule.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts()
        }
    }
}