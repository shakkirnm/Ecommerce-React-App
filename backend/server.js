import express from 'express'
import dotenv from 'dotenv'
import colors  from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'

dotenv.config()

const app = express()

app.use(express.json())


connectDB()


app.get('/',(req,res)=>{
    res.send('API is running.....')
})






app.use('/users', userRoute)

app.use('/products', productRoute)




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow.bold))
