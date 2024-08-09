import PrimaryButton from "../components/PrimaryButton.jsx";
import {useEffect} from "react";


const signout = () => {

    useEffect(() => {
        localStorage.removeItem('user') //.setItem('user', JSON.stringify({}));
    }, [])


    return (
        <div className={'flex h-[90vh] flex-col justify-center items-center px-6 py-12 lg:px-8 gap-4'}>
            <p className={'text-2xl'}>You are currently signed out.</p>
            <div className={'w-40'}>
                <PrimaryButton goTo={'/signin'} text={'Sign in'}/>
            </div>
        </div>
    );
}


export default signout;