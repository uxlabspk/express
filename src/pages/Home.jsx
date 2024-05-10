import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {                
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);
    
    return (
        <div>
            {user ? (
                navigate("/dashboard")
            ) : (
                <div>
                    <NavBar />
                    <HeroSection />
                </div>
            )}
        </div>
    )
}

export default Home;