import app from './app'
import 'reflect-metadata'
import './database'
app.listen(3005, () => {
  console.log('💥 Running server')
})
