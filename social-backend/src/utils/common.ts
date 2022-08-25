import { AuthenticationError , ApolloError} from "apollo-server-express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { JsonWebTokenError } from "jsonwebtoken";

export const handleError = (e) => {
    if(e instanceof JsonWebTokenError){
        throw new AuthenticationError("Jwt Token Error")
    } else {
        throw new ApolloError("General Server Error")
    }
};

export const generateToken = (paylaod : {} , expiresIn ?: string, ) => {
    return jwt.sign(paylaod , process.env.JWT_SECRET_KEY!, {
        // algorithm : "ES256",
        audience : "localhost",
        expiresIn : expiresIn ?? "1d",
        issuer: "https:socail.com"
    })
    
}

export const verfiyToken = (token: string) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET_KEY!)
    } catch (error) {
        handleError(error)
    }
}

export const hashPassword = (plainPassword: string): string => {
    const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS!);
    const hash = bcrypt.hashSync(plainPassword, salt);
    return hash;
}

export const validatePassword = (password: string , hashedPassword: string): Boolean => {
    return bcrypt.compareSync(password,hashedPassword)
}

export const  sendMail = () => {

}


// sudo docker run --name postgresql -e POSTGRES_USER=kunal -e POSTGRES_PASSWORD=root123 -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres
