import { useState } from "react";
export const usecount=()=>{
    const [count,setCount]=useState<number>(0)
    const handlerCount=():void=>{
      setCount((prev)=>prev+1);
      console.log("count",count)
    }
    const DecrementCount=():void=>{
        if(count>0){
        setCount((prev)=>prev-1)
        }
    }
    return{
        count,handlerCount,DecrementCount
    }
}