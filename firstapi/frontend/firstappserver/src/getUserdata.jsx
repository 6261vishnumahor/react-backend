import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const GetUserdata = () => {
    const [n, setN] = useState([])
    const [n1, setN1] = useState([0])
    useEffect(() => {
        const f = async () => {
            const mydata = await axios.get("http://127.0.0.1:3000/fetchdata")
            const res = await mydata.data
            setN(res)
        }
        f()
    }, [n1])
    console.log(n)



    const run = () => {
        setN1(n1 + 1)
    }

    return (
        <>
            <button onClick={run}> click</button>
            {
                n.map(e => (
                    <div key={e._id}>
                        <div>{e.name}</div>
                        <div>{e.email}</div>
                    </div>
                ))
            }
        </>
    )


}
export default GetUserdata