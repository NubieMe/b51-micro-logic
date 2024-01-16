import Title from "../components/Title"
import { useEffect, useState } from "react"

const Count = () => {
    const [date, setDate] = useState("")
    const date_styles = {
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
        
        const element = document.getElementById("submit")
        element?.classList.toggle("disabled")
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

    
    function reset(e) {
        e.preventDefault()
        clearInterval(timer)
        setDate("")
        const element = document.getElementById("submit")
        element?.classList.toggle("disabled")
        document.getElementById("date").value = ""
    }
    

    return (
        <div className='container-lg mt-5 column align-items-center'>
            <div className="w-100 d-flex row mb-4">
                <div className="col-lg-8">
                    <a href="/">
                        <button className="btn btn-outline-primary">Back</button>
                    </a>
                </div>
                <Title>Counting Duration</Title>
            </div>
            <div style={date_styles} className="rounded p-4 ps-5 d-flex flex-row">
                <div style={{backgroundColor:"transparent"}} className="flex-column w-50">
                    <label htmlFor="date" className="text-light form-label" style={{backgroundColor:"transparent"}}>Input Countdown Date</label>
                    <input className="me-3 form-control w-100 mb-3" type="datetime-local" name="date" id="date"/>
                    <button type="submit" id="submit" className="btn btn-primary text-light rounded-5 w-50  " onClick={e => handle(e)}>{date === "" ? "Start" : "Counting. . . " }</button>
                    {date === "" ? null : (
                        <button className="btn btn-danger text-light rounded-5 w-50" onClick={e => reset(e)}>Reset</button>
                    )}
                </div>
                
                <div style={{backgroundColor:"transparent"}} className="d-flex flex-column ps-5 pt-4">
                    <label style={{backgroundColor:"transparent"}} className="text-light text-right">Countdown:</label>
                    <div style={{backgroundColor:"transparent"}} className="text-light text-right" id="count">{date === "" ? null : ""}</div>
                </div>
                
            </div>
        </div>
    )
}

export default Count