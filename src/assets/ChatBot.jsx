import Spline from '@splinetool/react-spline';

export function ChatBot() {
    return (
        <>
            <div className="flex flex-col justify-center items-center" style={{ maxHeight: '80vh' }}>
                <div style={{ width: '40vw', height: '80vh' }}>
                    <Spline scene="https://prod.spline.design/lOXPRgvOko0CrlPW/scene.splinecode" />
                </div>
                <button className="p-3 bg-purple-400 rounded-2xl text-black hover:cursor-pointer hover:scale-105">Chat with Bot</button>
            </div> 
        </>
    );
}