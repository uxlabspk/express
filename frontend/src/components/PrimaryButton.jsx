import {Link} from "react-router-dom";


const PrimaryButton = (prop) => {
    return(
        <div className={'bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded-full text-white font-medium text-center'}>
            <Link to={prop.goTo} >
                {prop.text}
            </Link>
        </div>
    )
}

export default PrimaryButton