import Card from "../Components/Chat_Box"
import { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';

export function ChatWithBot() {
  return (
    <>
      <div className="flex flex-row items-center h-[90v]">
        <div className='relative pl-[20%]' style={{ width: '50vw', height: '74vh' }}>
          <Spline scene="https://prod.spline.design/lOXPRgvOko0CrlPW/scene.splinecode" />
          <div className='absolute bottom-[20px] right-0 w-[50%] h-[40px] bg-[#242424] z-10'></div>
        </div>
        <Card />
      </div>
    </>
  );
}