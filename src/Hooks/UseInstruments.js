import { useEffect, useState } from "react"

const useInstruments = () => {
    const [instruments, setInstruments] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setInstruments(data))
    }, []);
    return [instruments, setInstruments];
}
export default useInstruments;