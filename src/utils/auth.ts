import jsonwebtoken from 'jsonwebtoken';

const JWT_SECRET='yourtoken'
export const generateToken=async(email:string,name:string,role:string)=>{
const token= jsonwebtoken.sign({email,name,role},JWT_SECRET,{expiresIn:'1d'})
console.log(token);

return token
}