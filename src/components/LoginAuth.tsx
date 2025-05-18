import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../hooks/useUser";

type AuthInput = {
    email: string;
    password: string;
}
export const SignupAuth = ()=>{
    const {setUser} = useUser()
    const [userInput, setUserInputs] = useState<AuthInput>(
           { email: "", password: "" }
    );
    const navigate = useNavigate();
    
    const handleSubmit = async () => {
        const user = { email: userInput.email, password: userInput.password };
        localStorage.setItem("user", JSON.stringify(userInput))

        setUser(user);
        navigate('/dashboard')
    }

    return (

        <div className="bg-white md:transparent rounded-xl h-[500px] md:h-screen w-[90%] flex justify-center flex-col">
        
 
            <div className="flex p-2 ">
                <div className="flex-col w-full p-6">
                    <div className="flex flex-col gap-4">
                        <div className="text-4xl font-semibold">
                            <h3>Login</h3>
                            
                        </div>
                        <div className="text-slate-500">
                           Log in to your account.
                        </div>
                    </div>
                    <div className="pt-4">
                        
                        <LabelledInput label="E-mail Address" placeholder="" onChange={(e) => {
                        setUserInputs({
                            ...userInput, 
                            email: e.target.value
                        })
                        }} />
                        <LabelledInput label="Password" type={"password"} placeholder="" onChange={(e) => {
                        setUserInputs({
                            ...userInput,
                            password: e.target.value
                        })
                        }} />
                        <button onClick={(handleSubmit)}  type="button" className="mt-8 w-full text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 ">
                             Sign in</button>
                           
                    </div>
                    <div className="text-slate-500 font-light flex justify-center pt-4">
                           "Don't have an account yet?
                            <Link className="pl-2 text-blue-800 font-semibold" to={"/"}>
                                Join KRIS Today
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-blue-900 font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  outline-none block w-full p-2.5" placeholder={placeholder} required />
    </div>
}