import { isEmail, minLength } from "@/helpers/validators";
import { usersDB } from "@/data/usersDB";

export const loginUser = ({ email , password}) => {
    if (!email || !password) {
        throw new Error('please provide email and password');
    }

    if (!isEmail({value: email})) {
       throw new Error('please provide valid email');
    }
    if (!minLength({value: password, min:6})) {
        throw new Error('password should be at least 6 chars');

    }
const userExist = usersDB.find((user) => user.email === email);

 if (!userExist) {
    throw new Error('no user exist with this email');
 }
 if (userExist.password !== password) {
    throw new Error("Password and email doesn't match");
  }

 const safeUser = { ...userExist };
 delete safeUser.password;
 return safeUser;

};

