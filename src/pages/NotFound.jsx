
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';



export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <p className="text-2xl md:text-4xl">404 | Not Found</p>
            <p className="mt-2">Access Denied: Resource Unavailable or Unauthorized</p>
            <Link to={'/'} className='mt-5 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-8 py-2 rounded-md'> <AiOutlineHome /> Return to home</Link>
        </div>
    );
}