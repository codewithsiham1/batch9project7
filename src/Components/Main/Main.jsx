

const Main = () => {
  
    return (
        <div className="my-10 rounded-xl"
        style={{
            backgroundImage: 'url(https://i.ibb.co/Ph3srJX/Rectangle-1-1.png)',
            height: '60vh', 
            width: '100%', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
        }}
        >
            <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full">
            <h1 className="text-4xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-lg font-normal text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems
                 to become an exceptionally well world-class Programmer.</p>
                 <div className="flex gap-4 text-xl font-semibold">
                    <button className="btn bg-green-400 rounded-full border-none">Explore Now</button>
                    <button className="btn btn-outline text-white hover:bg-green-400 rounded-full">Our Feedback</button>
                 </div>
            </div>
        </div>
    );
};

export default Main;