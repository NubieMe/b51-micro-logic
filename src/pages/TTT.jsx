import { useEffect, useState } from "react"
import Title from "../components/Title"

const TTT = () => {
    const [turn, setTurn] = useState("O")
    const [winner, setWinner] = useState("")
    const [arr, setArr] = useState([])

    const div_styles = {
        height: "50px",
        width: "50px",
        fontSize:"24px",
        padding: "20px",
        justifyContent: "center",
        alignItems:"center",
        border: "1 solid #ccc"
    }

    let val

    function handle(e) {
        const id = e.target.id
        if(document.getElementById(id).innerHTML) return
        document.getElementById(id).innerHTML = turn
        const set = id - 1
        
        if (turn === "O") {
            val = "X"
        } else {
            val = "O"
        }
        
        arr[set] = turn
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
        } else if ((arr[2] === "O") && (arr[5] === "O") && (arr[7] === "O")) {
            setWinner(arr[2])
            return 
        } else if ((arr[3] === "O") && (arr[4] === "O") && (arr[5] === "O")) {
            setWinner(arr[3])
            return 
        } else if ((arr[5] === "O") && (arr[7] === "O") && (arr[8] === "O")) {
            setWinner(arr[5])
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
        } else if ((arr[2] === "X") && (arr[5] === "X") && (arr[7] === "X")) {
            setWinner(arr[2])
            return 
        } else if ((arr[3] === "X") && (arr[4] === "X") && (arr[5] === "X")) {
            setWinner(arr[3])
            return 
        } else if ((arr[5] === "X") && (arr[7] === "X") && (arr[8] === "X")) {
            setWinner(arr[5])
            return 
        }
    },[turn])

    function reset() {
        setTurn("O")
        setWinner("")
        setArr([])
        document.getElementById("1").innerHTML = ""
        document.getElementById("2").innerHTML = ""
        document.getElementById("3").innerHTML = ""
        document.getElementById("4").innerHTML = ""
        document.getElementById("5").innerHTML = ""
        document.getElementById("6").innerHTML = ""
        document.getElementById("7").innerHTML = ""
        document.getElementById("8").innerHTML = ""
        document.getElementById("9").innerHTML = ""
    }

    return (
        <div className='container-lg mt-5 column align-items-center'>
            <div className="w-100 d-flex row">
                <div className="col-lg-8">
                    <a href="/">
                        <button className="btn btn-outline-primary">Back</button>
                    </a>
                </div>
                <Title>Tic Tac Toe</Title>
            </div>
            <div className="container mt-5">
                <div className="alert alert-primary text-center mb-5">{winner === "" ? `Now Its ${turn} Turn` : `The Winner is ${winner}`}</div>
                <div className="d-flex flex-row">
                    <button id="1" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                    <button id="2" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                    <button id="3" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                </div>
                <div className="d-flex flex-row">
                    <button id="4" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                    <button id="5" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                    <button id="6" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                </div>
                <div className="d-flex flex-row">
                    <button id="7" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                    <button id="8" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                    <button id="9" style={div_styles} className="btn btn-light d-flex" onClick={(e) => handle(e)}></button>
                </div>
                <div id="over">{winner === "" ? null : (
                    <button className="btn btn-primary mt-3" onClick={() => reset()}>Play Again</button>
                )}</div>
            </div>
        </div>
    )
}

export default TTT