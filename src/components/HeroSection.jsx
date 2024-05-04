import { ReactTyped } from 'react-typed';


function HeroSection() {
    return (
        <div className="h-[80vh]  flex flex-col items-center justify-center">
            <ReactTyped 
                strings={[
                    "Easy to used",
                    "Easy to modify",
                    "Easy to style"
                ]}
                typeSpeed={40}
                backSpeed={80}
                loop
                className='text-2xl text-indigo-400'
            />
            <h1 className='md:text-7xl text-5xl mt-4'>Bring Life to your UI</h1>
            <p className='md:text-2xl text-xl mt-2'>By using ready to use components</p>
            <button className='mt-5 bg-indigo-900 px-8 py-2 rounded-lg hover:bg-indigo-800'>Get Started</button>
        </div>
      );
}


export default HeroSection;