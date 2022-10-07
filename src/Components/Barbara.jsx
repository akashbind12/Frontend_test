import { Dawn } from "./Dawn"
import { Emre } from "./Emre"




export const Barbara = ({count,setCount}) => {

    return (
        <>
            <Dawn count={count} setCount={setCount}></Dawn>
            <Emre count={count} setCount={setCount}></Emre>
        </>
    )
}