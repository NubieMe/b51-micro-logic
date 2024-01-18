import { useEffect, useState } from "react"
import Cube from "../components/Cube"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Title from "../components/Title"
import { miniCon_styles } from "../utils/styling"

const Matching = () => {
    const [firstId, setFirstId] = useState("")
    const [secondId, setSecondId] = useState("")
    const [firstVal, setFirstVal] = useState("")
    const [secondVal, setSecondVal] = useState("")
    const [mixed, setMixed] = useState([])
    const [hidden, setHidden] = useState([
        true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true
    ])

    const negHidden = [
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    ]

    const copy = [
        true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true
    ]

    function compare(a, b) {
        return JSON.stringify(a) === JSON.stringify(b)
    }

    const result = compare(hidden, negHidden)

    const arr = ["🤖","🤖","🐺","🐺","🦁","🦁","🐯","🐯","🐻","🐻","🐨","🐨","🐼","🐼","🐵","🐵"]

    let shuffled
    useEffect(() => {
        shuffled = arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        setMixed(shuffled)
    },[])

    useEffect(() => {
        if ((firstVal === "") && (secondVal === "")) {
            return
        } else if ((firstVal !== "") && (secondVal !== "")) {
            if (firstVal !== secondVal) {
                setTimeout(neg, 1000)
                return 
            }
            equal()
            return
        }
        
    },[firstVal, secondVal])
    
    function neg() {
        hidden[firstId] = true
        hidden[secondId] = true
        setFirstVal("")
        setSecondVal("")
        setFirstId("")
        setSecondId("")
    }
    
    function equal() {
        setFirstVal("")
        setSecondVal("")
        setFirstId("")
        setSecondId("")
    }

    function handle(e) {
        const id = e.target.id
        if (hidden[id] === false) return
        if (firstVal === "") {
            setFirstVal(mixed[id])
            setFirstId(id)
            hidden[id] = false
        } else if (secondVal === "") {
            setSecondVal(mixed[id])
            setSecondId(id)
            hidden[id] = false
        }
    }

    function reset() {
        shuffled = arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        setMixed(shuffled)
        setHidden(copy)
    }

    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Matching Card</Title>
            </Header>
            <div style={miniCon_styles} className="p-5 border border-primary-subtle rounded">
                <div className="d-flex flex-row gap-1 mb-1 bg-transparent">
                    <Cube id={"0"} isHidden={hidden[0]} click={(e) => handle(e)}>{mixed[0]}</Cube>
                    <Cube id={"1"} isHidden={hidden[1]} click={(e) => handle(e)}>{mixed[1]}</Cube>
                    <Cube id={"2"} isHidden={hidden[2]} click={(e) => handle(e)}>{mixed[2]}</Cube>
                    <Cube id={"3"} isHidden={hidden[3]} click={(e) => handle(e)}>{mixed[3]}</Cube>
                </div>
                <div className="d-flex flex-row gap-1 mb-1 bg-transparent">
                    <Cube id={"4"} isHidden={hidden[4]} click={(e) => handle(e)}>{mixed[4]}</Cube>
                    <Cube id={"5"} isHidden={hidden[5]} click={(e) => handle(e)}>{mixed[5]}</Cube>
                    <Cube id={"6"} isHidden={hidden[6]} click={(e) => handle(e)}>{mixed[6]}</Cube>
                    <Cube id={"7"} isHidden={hidden[7]} click={(e) => handle(e)}>{mixed[7]}</Cube>
                </div>
                <div className="d-flex flex-row gap-1 mb-1 bg-transparent">
                    <Cube id={"8"} isHidden={hidden[8]} click={(e) => handle(e)}>{mixed[8]}</Cube>
                    <Cube id={"9"} isHidden={hidden[9]} click={(e) => handle(e)}>{mixed[9]}</Cube>
                    <Cube id={"10"} isHidden={hidden[10]} click={(e) => handle(e)}>{mixed[10]}</Cube>
                    <Cube id={"11"} isHidden={hidden[11]} click={(e) => handle(e)}>{mixed[11]}</Cube>
                </div>
                <div className="d-flex flex-row gap-1 bg-transparent">
                    <Cube id={"12"} isHidden={hidden[12]} click={(e) => handle(e)}>{mixed[12]}</Cube>
                    <Cube id={"13"} isHidden={hidden[13]} click={(e) => handle(e)}>{mixed[13]}</Cube>
                    <Cube id={"14"} isHidden={hidden[14]} click={(e) => handle(e)}>{mixed[14]}</Cube>
                    <Cube id={"15"} isHidden={hidden[15]} click={(e) => handle(e)}>{mixed[15]}</Cube>
                </div>
                {!result ? null : (
                    <button className="btn btn-primary mt-4 ms-5" onClick={() => reset()}>Play Again</button>
                )}
            </div>
        </MainContainer>
    )
}

export default Matching