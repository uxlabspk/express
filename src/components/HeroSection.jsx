import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className="h-[80vh]  flex flex-col items-center justify-center">
            <ReactTyped 
                strings={[
                    "Solve, Collaborate, Progress",
                    "Track, Manage, Resolve"
                ]}
                typeSpeed={40}
                backSpeed={80}
                loop
                className='text-2xl text-indigo-400'
            />
            <h1 className='md:text-7xl text-5xl mt-4'>Bring Life to your Ideas</h1>
            <p className='md:text-2xl text-xl mt-2'>By collaboration to stay organized and efficient    </p>
            <Link to={'/signin'} className='mt-5 bg-indigo-900 px-8 py-2 rounded-lg hover:bg-indigo-800'>Get Started</Link>
        </div>
      );
}


export default HeroSection; 