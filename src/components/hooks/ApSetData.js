import { useEffect, useState } from "react"

const ApSetData = (info) =>{
    const [data, setData] = useState([])

    console.log(info);

    return {data, setData}

}

export default ApSetData