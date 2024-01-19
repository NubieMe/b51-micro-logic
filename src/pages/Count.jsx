import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Title from "../components/Title"
import { useEffect, useState } from "react"
import { miniCon_styles } from "../utils/styling"

const Count = () => {
    const [date, setDate] = useState("")
    const [counting, setCounting] = useState(false)

    let timer
    
    useEffect(() => {
        if (counting === false) return
        setTimeout(timer = setInterval(render, 1000), 1000)
    },[counting])
    
    
    function handle() {
        if (date === "") {
            return alert("Please input the date required!")
        } else if (new Date(date).getTime() < new Date().getTime()) {
            return alert("Please input the date correctly!")
        }
        
        setCounting(true)
        
        document.getElementById("submit").classList.toggle("disabled")
        render()
    }
    
    function render() {
        if (date === "") return
        if (getDistanceTime(date) === null) {
            clearInterval(timer)
            setCounting(false)
            document.getElementById("submit").classList.toggle("disabled")
            return
        }
        document.getElementById("count").innerHTML = getDistanceTime(date);
    }
    
    function getDistanceTime(time) {
        const timeNow = new Date().getTime()
        const timeInput = new Date(time).getTime()
    
        const distance = timeInput - timeNow
    
        const seconds = Math.floor((distance / 1000) % 60 ) 
        const minutes = Math.floor((distance / 1000 / 60) % 60 )
        const hours = Math.floor((distance / 1000 / 60 / 60) % 60 )
        const days = Math.floor((distance / 1000 / 60 / 60 / 24))

        if (Math.sign(seconds) === -1) {
            return null
        } else if ((days === 0) && (hours === 0) && (minutes === 0) && (seconds === 0)) {
            return "Time's Up!"
        }

        return `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`
    }

    
    function reset() {
        clearInterval(timer)
        setDate("")
        setCounting(false)
        
        document.getElementById("submit").classList.toggle("disabled")
    }
    

    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Counting Duration</Title>
            </Header>
            <div style={miniCon_styles} className="rounded p-4 mt-3 d-flex flex-wrap">
                <div style={{height:"100px"}} className="d-flex flex-column ps-2 bg-transparent">
                    <label className="text-info text-right bg-transparent mb-3">Countdown:</label>
                    <div className="text-light text-right bg-transparent" id="count">{date === "" ? null : ""}</div>
                </div>
                <div className="ms-2 flex-column bg-transparent">
                    <label htmlFor="date" className="text-info form-label bg-transparent">Input Countdown Date</label>
                    <input className="me-3 form-control w-100 mb-3" type="datetime-local" name="date" id="date"
                    value={date} onChange={e => setDate(e.target.value)}/>
                    <button type="submit" id="submit" className="btn btn-primary text-light rounded-5 px-4"
                    onClick={() => handle()}>{counting === false ? "Start" : "Counting. . . " }</button>
                    {counting === false ? null : (
                        <button className="btn btn-danger text-light rounded-5 px-4" onClick={() => reset()}>Reset</button>
                    )}
                </div>
            </div>
        </MainContainer>
    )
}

export default Count