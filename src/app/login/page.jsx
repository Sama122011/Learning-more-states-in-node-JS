import SignUp from "@/Components/SignUp/SignUp";

export const metadata = {
    title : 'Login',
    description:'Log into your free account using email and password'

}

export default function loginPage() {
    return <SignUp login/>
}