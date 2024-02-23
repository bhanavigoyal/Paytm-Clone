import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const SignUp=()=>{
    const [username, setUsername] = useState("");
    const [firstName, setFirtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 h-max px-4 text-center p-2 flex flex-col justify-center">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your infromation to create an account"}/>
                <InputBox onChange={e=>{
                    setFirtName(e.target.value)
                }} name={"firstName"} label={"First Name"} placeholder={"John"}/>
                <InputBox onChange={e=>{
                    setLastName(e.target.value)
                }} name={"lastName"} label={"Last Name"} placeholder={"Doe"}/>
                <InputBox onChange={e=>{
                    setUsername(e.target.value)
                }} name={"username"} label={"Email"} placeholder={"john@email.com"}/>
                <InputBox onChange={e=>{
                    setPassword(e.target.value)
                }} name={"password"} label={"Password"} placeholder={"123456"}/>
                <div className="pt-4">
                <Button onClick={async()=>{
                    try{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username: username,
                        firstName: firstName,
                        lastName: lastName,
                        password: password
                    });
                    localStorage.setItem("token", response.token);
                    navigate("/dashboard");
                    }catch(error){
                        console.error("error creating user: ", error);
                    }
                }} label={"Sign Up"}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
}