import { useEffect, useState } from "react"
import Title from "../components/Title"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import { miniCon_styles } from "../utils/styling"
import Cube from "../components/Cube"

const TTT = () => {
    const [turn, setTurn] = useState("O")
    const [winner, setWinner] = useState("")
    const [arr, setArr] = useState([])

    let val

    function handle(e) {
        const id = e.target.id

        if(arr[id]) return
        
        if (turn === "O") {
            val = "X"
        } else {
            val = "O"
        }
        
        arr[id] = turn
        setTurn(val)
    }
    
    useEffect(() => {
        if((arr[0] === "O") && (arr[1] === "O") && (arr[2] === "O")) {
            setWinner(arr[0])
            return 
        } else if ((arr[0] === "O") && (arr[3] === "O") && (arr[6] === "O")) {
            setWinner(arr[0])
            return 
        } else if ((arr[0] === "O") && (arr[4] === "O") && (arr[8] === "O")) {
            setWinner(arr[0])
            return 
        } else if ((arr[1] === "O") && (arr[4] === "O") && (arr[7] === "O")) {
            setWinner(arr[1])
            return 
        } else if ((arr[2] === "O") && (arr[4] === "O") && (arr[6] === "O")) {
            setWinner(arr[2])
            return 
        } else if ((arr[2] === "O") && (arr[5] === "O") && (arr[8] === "O")) {
            setWinner(arr[2])
            return 
        } else if ((arr[3] === "O") && (arr[4] === "O") && (arr[5] === "O")) {
            setWinner(arr[3])
            return 
        } else if ((arr[6] === "O") && (arr[7] === "O") && (arr[8] === "O")) {
            setWinner(arr[6])
            return 
        }

        if((arr[0] === "X") && (arr[1] === "X") && (arr[2] === "X")) {
            setWinner(arr[0])
            return 
        } else if ((arr[0] === "X") && (arr[3] === "X") && (arr[6] === "X")) {
            setWinner(arr[0])
            return 
        } else if ((arr[0] === "X") && (arr[4] === "X") && (arr[8] === "X")) {
            setWinner(arr[0])
            return 
        } else if ((arr[1] === "X") && (arr[4] === "X") && (arr[7] === "X")) {
            setWinner(arr[1])
            return 
        } else if ((arr[2] === "X") && (arr[4] === "X") && (arr[6] === "X")) {
            setWinner(arr[2])
            return 
        } else if ((arr[2] === "X") && (arr[5] === "X") && (arr[8] === "X")) {
            setWinner(arr[2])
            return 
        } else if ((arr[3] === "X") && (arr[4] === "X") && (arr[5] === "X")) {
            setWinner(arr[3])
            return 
        } else if ((arr[6] === "X") && (arr[7] === "X") && (arr[8] === "X")) {
            setWinner(arr[6])
            return 
        }
    },[turn])

    function reset() {
        setTurn("O")
        setWinner("")
        setArr([])
    }

    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Tic Tac Toe</Title>
            </Header>
            <div style={miniCon_styles} className="p-5 rounded border border-primary-subtle">
                <div className="alert alert-info text-center mb-5" role="alert">
                    {winner === "" ? `Now Its ${turn} Turn` : `The Winner is ${winner}`}
                </div>
                <div className="d-flex flex-row gap-1 mb-1 ms-4 bg-transparent">
                    <Cube id={"0"} isHidden={false} click={(e) => handle(e)}>{arr[0]}</Cube>
                    <Cube id={"1"} isHidden={false} click={(e) => handle(e)}>{arr[1]}</Cube>
                    <Cube id={"2"} isHidden={false} click={(e) => handle(e)}>{arr[2]}</Cube>
                </div>
                <div className="d-flex flex-row gap-1 mb-1 ms-4 bg-transparent">
                    <Cube id={"3"} isHidden={false} click={(e) => handle(e)}>{arr[3]}</Cube>
                    <Cube id={"4"} isHidden={false} click={(e) => handle(e)}>{arr[4]}</Cube>
                    <Cube id={"5"} isHidden={false} click={(e) => handle(e)}>{arr[5]}</Cube>
                </div>
                <div className="d-flex flex-row gap-1 ms-4 bg-transparent">
                    <Cube id={"6"} isHidden={false} click={(e) => handle(e)}>{arr[6]}</Cube>
                    <Cube id={"7"} isHidden={false} click={(e) => handle(e)}>{arr[7]}</Cube>
                    <Cube id={"8"} isHidden={false} click={(e) => handle(e)}>{arr[8]}</Cube>
                </div>
                <div className="ms-5 bg-transparent">{winner === "" ? null : (
                    <button className="btn btn-primary mt-4" onClick={() => reset()}>Play Again</button>
                )}</div>
            </div>
        </MainContainer>
    )
}

export default TTT