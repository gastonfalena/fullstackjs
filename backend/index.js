import express from 'express'
import conectarDB from './config/db.js'
import dotenv from 'dotenv'
import veterinarioRoutes from './routes/veterinarioRoutes.js'

const app =  express()
app.use(express.json())

dotenv.config()

conectarDB()

app.use('/api/veterinarios',veterinarioRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> {
    console.log('servidor funcionando en el puerto 4000')
})