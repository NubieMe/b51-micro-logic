import { useEffect, useState } from "react"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Title from "../components/Title"
import { subCon_styles } from "../utils/styling"

const Scramble = () => {
    const [input, setInput] = useState("")
    const [score, setScore] = useState(0)
    const [word, setWord] = useState("")

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const index = getRndInteger(0, 10)
    const shuffle = (str) => [...str].sort(()=>Math.random()-.5).join('')
    const arr = ["apple", "samsung", "huawei", "oneplus", "xiaomi", "infinix", "realme", "tecno", "vivo", "asus"]
    
    useEffect(() => {
        setWord(arr[index])
    },[])

    function handle(e) {
        e.preventDefault()
        if(input !== word) return alert("Wrong answer, Try again!")

        setWord(arr[index])
        setScore(score + 1)
        setInput("")
    }

    function reset(e) {
        e.preventDefault()

        setInput("")
        setScore(0)
        setWord(arr[index])
    }

    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Word Scramble</Title>
            </Header>
            <div style={subCon_styles} className="container-lg mt-5 p-5 gap-5 d-flex flex-wrap rounded">
                <form className="bg-transparent d-flex flex-column text-light col-md-6">
                    <h3 className="bg-transparent mb-5" style={{color:"#38bdf8"}}>Guess the word</h3>
                    <h5 className="bg-transparent text-center mb-3">{shuffle(word)}</h5>
                    <input id="input" className="form-control mb-3" value={input}
                    onChange={e => setInput(e.target.value)}/>
                    <div className="d-flex flex-wrap bg-transparent justify-content-center gap-5 mt-3">
                        <button className="btn btn-primary px-5" onClick={(e) => handle(e)}>Submit</button>
                        <button className="btn btn-danger px-5" onClick={(e) => reset(e)}>Reset</button>
                    </div>
                </form>
                <div style={{backgroundColor:"#293548"}} className="d-flex p-5 flex-column text-light text-center col-md-5 rounded">
                    <h3 className="bg-transparent" style={{color:"#38bdf8"}}>Score:</h3>
                    <p className="bg-transparent fs-1 fw-semibold">{score}</p>
                </div>
            </div>
        </MainContainer>
    )
}

export default Scramble