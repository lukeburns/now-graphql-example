const types = `
  type Query {
    greeting: String
  }
`

const resolvers = {
  greeting: () => 'Howdy neighbor!'
}

module.exports = { types, resolvers }
