import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (req, res) => {



    const{fullName, email, username, passsword} = req.body
    console.log("email", email)
    
})


export {
    registerUser,
}