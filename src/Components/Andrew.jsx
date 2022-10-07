import { useState } from "react"
import { Barbara } from "./Barbara"
import { Carlos } from "./Carlos"



export const Andrew = () => {

   const [count,setCount] = useState(0)

    return (
        <>
            <Carlos count={count}></Carlos>
            <Barbara count={count} setCount={setCount}></Barbara>
        </>
    )
}