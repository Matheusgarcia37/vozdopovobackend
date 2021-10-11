import { createConnection } from 'typeorm'

try {
    createConnection().then(() => console.log('👌 connected with database'))
} catch (error) {
    console.log(error)
}
