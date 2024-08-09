import PrimaryButton from "./PrimaryButton.jsx";


const Card = (prop) => {
    return (
        <div className="rounded overflow-hidden shadow-lg text-center w-96 h-64">
            <div className="p-6 flex flex-col justify-between h-full">
                <div>
                    <div className="font-medium text-xl mb-6">{prop.title}</div>
                    <p className="text-gray-700 text-base my-3">{prop.desc}</p>
                </div>
                <PrimaryButton goTo={prop.goTo} text={'All Issues'} />
            </div>
        </div>
    )
}

export default Card