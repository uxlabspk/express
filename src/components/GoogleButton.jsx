import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config";
import { useState } from "react";
import { useEffect } from "react";
import Home from '../pages/Home';



export default function GoogleButton() {
    // const [userData, setUserData] = useState('');

    const handleSignIn = () => {
        signInWithPopup(auth, provider).then((data) => {    
            localStorage.setItem('user', data.user);
            console.log("sdf");
        });
    }

    // useEffect(() => {
    //     setUserData(localStorage.getItem('user'))
    // });

    return (
        <div>
            <button className="py-2 px-8 bg-green-900 text-white" onClick={handleSignIn}>Google</button>
        </div>
    );
}

