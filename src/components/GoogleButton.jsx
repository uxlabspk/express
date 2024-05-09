import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config";
import { useState } from "react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";


export default function GoogleButton() {
    const [userData, setUserData] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        signInWithPopup(auth, provider).then((data) => {    
            localStorage.setItem('user', data.user);
            console.log("sdf");
            navigate("/");
        });
    }

    useEffect(() => {
        setUserData(localStorage.getItem('user'))
    });

    return (
        <div>
            <button className="flex items-center justify-center gap-2 border w-full py-2 rounded-md " onClick={handleSignIn}>
                <FcGoogle />
                Login with Google
            </button>
        </div>
    );
}

