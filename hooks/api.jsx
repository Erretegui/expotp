import { useEffect, useState } from "react"

const API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY

export function useApi() {

    const [datos, setDatos] = useState()

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => {
                setDatos(res)
            })
            .catch(error => {
                console.log("ERROR:", error)
            })

    }, [])

    return datos

}

