import jwt from 'jsonwebtoken'


//Doctor auth middleware
const authDoctor = async (req,res,next) => {
    try {
        const {dtoken} = req.headers
        
        if (!dtoken) {
            return res.json({success: false, message: "Not Athorized, login again"})
        }
        
        const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)

        req.doc = { docId: token_decode.id };

        next()
    } catch (error) {
        console.log(error)
        res.json({success: false,message:"Error at authadmin middleware" + error.message})
    }
}

export default authDoctor