module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/cannopy'
  },
  test: {}.
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
