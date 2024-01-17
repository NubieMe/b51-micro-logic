import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Title from "../components/Title"
import { useEffect, useState } from "react"

const Count = () => {
    const [date, setDate] = useState("")

    const subCon_styles = {
        backgroundColor: "#1e293b",
        border: "1 solid #353f4f",
        width: "auto",
        margin: "0 auto"
    }

    let timer
    
    useEffect(() => {
        if (date === "") return
        setTimeout(timer = setInterval(render, 1000), 1000)
    },[date])
        
    
    function handle(e) {
        e.preventDefault()
        const elem = document.getElementById("date").value
        setDate(elem)
        
        if (elem === "") return alert("Please input the date required!")
        
        document.getElementById("submit").classList.toggle("disabled")
        render()
    }
    
    function render() {
        if(date === "") return
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
    
        return `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`
    }

    
    function reset() {
        clearInterval(timer)
        setDate("")
        
        const element = document.getElementById("submit").classList.toggle("disabled")
        document.getElementById("date").value = ""
    }
    

    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Counting Duration</Title>
            </Header>
            <div style={subCon_styles} className="rounded p-4 mt-5 ps-5 d-flex flex-wrap">
                <div className="flex-column bg-transparent">
                    <label htmlFor="date" className="text-light form-label bg-transparent">Input Countdown Date</label>
                    <input className="me-3 form-control w-100 mb-3" type="datetime-local" name="date" id="date"/>
                    <button type="submit" id="submit" className="btn btn-primary text-light rounded-5 px-4"
                    onClick={e => handle(e)}>{date === "" ? "Start" : "Counting. . . " }</button>
                    {date === "" ? null : (
                        <button className="btn btn-danger text-light rounded-5 px-4" onClick={() => reset()}>Reset</button>
                    )}
                </div>
                <div className="d-flex flex-column ps-5 pt-4 bg-transparent">
                    <label className="text-light text-right bg-transparent">Countdown:</label>
                    <div className="text-light text-right bg-transparent" id="count">{date === "" ? null : ""}</div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Count