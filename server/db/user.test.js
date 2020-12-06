const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const users = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getUsers returns our users', () => {
  return users.getUsers(testDb)
    .then(users => {
      expect(users).toHaveLength(4)
      return null
    })
})

test('userExists finds an existing user', () => {
  const email = 'shellymutugrigg@gmail.com'

  return users.userExists(email, testDb)
    .then(email => {
      expect(email).toBe(true)
      return null
    })
})

test('userExists does not find an existing user', () => {
  const email = 'webdev@gmail.com'

  return users.userExists(email, testDb)
    .then(email => {
      expect(email).toBe(false)
      return null
    })
})