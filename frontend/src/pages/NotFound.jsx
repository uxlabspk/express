import PrimaryButton from "../components/PrimaryButton.jsx";


const NotFound = () => {
    return(
        <div className={'flex flex-col gap-3 items-center justify-center h-[90vh]'}>
            <h1 className={'text-2xl font-medium'}>404 | Not found</h1>
            <p>The resource you are looking is not available or restricted</p>
            <PrimaryButton goTo={'/'} text={'Go Home'} />
        </div>

    )
}

export default NotFound