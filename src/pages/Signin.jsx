import GoogleButton from "../components/GoogleButton";




export default function Signin() {
    return(
        <div className="h-screen flex items-center justify-center">
            <div className=" bg-slate-50 bg-opacity-50 backdrop-filter backdrop-blur-sm text-black rounded-lg p-10  ">
                <GoogleButton />
            </div>
        </div>
    );
}