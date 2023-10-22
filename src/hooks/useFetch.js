// import { useEffect, useState } from "react"

async function useFetch(url) {
  // const [data, setData] = useState(null)
  // const [isPending, setIsPending] = useState(null)
  // const [error, setError] = useState(null)

  // useEffect(()=>{

  //     fetch(url, {
  //         headers:{

  //         }
  //     }).then((res)=>{
  //         if(!res.ok){
  //             throw Error(`no valid response from this resource`)
  //         }
  //         return res.json()

  //     }).then((data)=>{

  //         setData(data)
  //         setError(null)
  //         setIsPending(null)

  //     }).catch((error)=>{
  //         setError(error.message)
  //     })

  // }, [url])

  // return {data, isPending, error}
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default useFetch;
