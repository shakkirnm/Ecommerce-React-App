import User from "../models/userModel.js";

const userRegister = async (req, res) => {
   console.log(req.body);

   try{
       const userExist = await User.findOne({email : req.body.email})
       if(userExist){
           throw new Error("User Alredy Exist")
       }else{
           const newUser = new User({
               name: req.body.name,
               email:req.body.email,
               password:req.body.password
           })
           const savedUser = await newUser.save()
           res.status(200).json(savedUser)
       }

   }catch(err){
       res.status(500).json(err.message)
   }



};

const userLogin =async (req,res)=>{
    console.log("jhgfds");
    console.log(req.body);

    try{
        const email = await User.findOne({email : req.body.email})
        if(email){
            const password = await User.findOne({password : req.body.password})
            if(password){
                res.json(email)
            }else{
                throw new Error ("Incorrect Password")
            }
        }else{
            throw new Error ("Invalid Email")
        }

    }catch(err){
        res.status(400).json(err.message)
    }
}


export { userRegister, userLogin}