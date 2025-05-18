import { SignupAuth } from "../components/LoginAuth"

const Login = () => {
  return (
    <div className="w-full min-h-screen h-screen flex flex-col md:flex-row ">
        <div className=" md:transparent h-full md:w-4/6 flex items-center justify-center p-6">
            <SignupAuth />
        </div>
        <div className="h-full absolute md:relative -z-10 md:w-5/6 bg-yellow-100 flex items-center justify-center">
        <img src="/loginpage.png" className="h-full w-full"/>
        </div>
    </div>
  )
}

export default Login