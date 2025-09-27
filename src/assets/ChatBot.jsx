import Spline from '@splinetool/react-spline';

export function ChatBot() {
    return (
        <>
            <div className="flex flex-col items-center" style={{ maxHeight: '80vh' }}>
                <div className='relative pl-[20%]' style={{ width: '50vw', height: '74vh' }}>
                    <Spline scene="https://prod.spline.design/lOXPRgvOko0CrlPW/scene.splinecode" />
                    <div className='absolute bottom-[20px] right-0 w-[50%] h-[40px] bg-[#242424] z-10'></div>
                </div>
                <button className="ml-[8%] font-medium p-3 bg-purple-400 rounded-2xl text-black hover:cursor-pointer hover:scale-105">Chat with Bot</button>
            </div> 
        </>
    );
}