import { useState } from "react"
import Title from "../components/Title"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import { subCon_styles } from "../utils/subCon"

const Salary = () => {
    const [salary, setSalary] = useState("")
    const [incentive, setIncentive] = useState("")
    const [tax, setTax] = useState("")

    let Rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    })

    const gross = () => {
        const sum = parseInt(salary) + parseInt(incentive)
        return Rupiah.format(sum)
    }

    const net = () => {
        const tx = (parseInt(salary) + parseInt(incentive)) / 100 * parseInt(tax)
        const sum = parseInt(salary) + parseInt(incentive) - tx
        return Rupiah.format(sum)
    }

    function handle() {
        const sal = document.getElementById("salary").value
        const inc = document.getElementById("incentive").value
        const tx = document.getElementById("tax").value
        
        if (!inc | Math.sign(inc) === -1) return alert("Please input incentive correctly!")
        
        if(!tx | Math.sign(tx) === -1 | tx === 100) return alert("Please input tax correctly!")
        
        if(!sal | Math.sign(tx) === -1) return alert("Please input salary correctly!")
        
        setIncentive(inc)
        setTax(tx)
    }
    
    function reset() {
        document.getElementById("salary").value = ""
        document.getElementById("incentive").value = ""
        document.getElementById("tax").value = ""
        
        setSalary("")
        setIncentive("")
        setTax("")
    }

    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Salary Calculating</Title>
            </Header>
            <div style={subCon_styles} className="d-flex flex-wrap py-5 px-4 mt-5 justify-content-evenly gap-5 rounded">
                <div className="d-flex flex-column bg-transparent text-light">
                    <label className="form-label bg-transparent">Salary</label>
                    <input className="form-control mb-3" id="salary" type="number" onChange={e => setSalary(e.target.value)}/>
                    <label className="form-label bg-transparent">Incentives</label>
                    <input className="form-control mb-3" id="incentive" type="number"/>
                    <label className="form-label bg-transparent">Tax</label>
                    <input className="form-control mb-3" id="tax" type="number" placeholder="in percent"/>
                    <button className="btn btn-primary" onClick={() => handle()}>Count</button>
                </div>
                <div className="d-flex flex-column justify-content-start bg-transparent text-light">
                    <h3 className="bg-transparent mb-4">Result</h3>
                    <p id="gross" className="bg-transparent">Gross Salary: {incentive === "" ? "Rp. 0,00" : gross()}</p>
                    <p id="main" className="bg-transparent">Main Salary: {salary === "" ? "Rp. 0,00" : Rupiah.format(salary)}</p>
                    <p id="net" className="bg-transparent">Net Salary: {tax === "" ? "Rp. 0,00" : net()}</p>
                    {tax === "" ? null : (
                        <button className="btn btn-danger mt-4" onClick={() => reset()}>Reset</button>
                    )}
                </div>
            </div>
        </MainContainer>
    )
}

export default Salary