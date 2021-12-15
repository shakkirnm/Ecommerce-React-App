import bcrypt from 'bcryptjs'


const users = [
    {
        name : 'sha',
        email : 'sha@gmail.com',
        password : bcrypt.hashSync('7070',10),
        isAdmin :true
        
    }, 
    {
        name : 'shakkir',
        email : 'shakkir@gmail.com',
        password : bcrypt.hashSync('1234',10),

        
    }, 
    {
        name : 'Hafiz',
        email : 'hafiz@gmail.com',
        password : bcrypt.hashSync('1234',10),

        
    },
    {
        name : 'anees',
        email : 'anees@gmail.com',
        password : bcrypt.hashSync('1234',10),        
    },  
]


export default users