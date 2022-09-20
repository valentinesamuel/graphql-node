const express = require('express')
const { graphqlHTTP} = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`)
const root = {
    description: 'Red Shoe',
    price:42.12
}
const app = express()
app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(3000, () => {
    console.log('GraphQL server is running')
})