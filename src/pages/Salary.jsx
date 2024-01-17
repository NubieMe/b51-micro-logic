import { useState } from "react"
import Title from "../components/Title"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import { subCon_styles } from "../utils/subCon"

const Salary = () => {
    const [salary, setSalary] = useState("")
    const [incentive, setIncentive] = useState("")
    const [tax, setTax] = useState("")
    const [gross, setGross] = useState("")
    const [net, setNet] =useState("")

    let Rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    })

    
    function handle() {
        if(!salary | Math.sign(salary) === -1) return alert("Please input salary correctly!")
        
        if (!incentive | Math.sign(incentive) === -1) return alert("Please input incentive correctly!")
        
        if(!tax | Math.sign(tax) === -1 | tax === 100) return alert("Please input tax correctly!")
        
        const tx = (parseInt(salary) + parseInt(incentive)) / 100 * parseInt(tax)

        setGross(parseInt(salary) + parseInt(incentive))
        setNet(parseInt(salary) + parseInt(incentive) - tx)
    }
    
    function reset() {
        setSalary("")
        setIncentive("")
        setTax("")
        setGross("")
        setNet("")
    }

    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Salary Calculating</Title>
            </Header>
            <div style={subCon_styles} className="d-flex flex-wrap py-5 px-4 mt-5 justify-content-evenly gap-5 rounded">
                <div className="d-flex flex-column bg-transparent text-light">
                    <label className="form-label bg-transparent">Salary</label>
                    <input className="form-control mb-3" id="salary" type="number" value={salary}
                    onChange={e => setSalary(e.target.value)}/>
                    <label className="form-label bg-transparent">Incentives</label>
                    <input className="form-control mb-3" id="incentive" type="number" value={incentive}
                    onChange={e => setIncentive(e.target.value)}/>
                    <label className="form-label bg-transparent">Tax</label>
                    <input className="form-control mb-3" id="tax" type="number" value={tax}
                    onChange={e => setTax(e.target.value)} placeholder="in percent"/>
                    <button className="btn btn-primary" onClick={() => handle()}>Count</button>
                </div>
                <div className="d-flex flex-column justify-content-start bg-transparent text-light">
                    <h3 className="bg-transparent mb-4">Result</h3>
                    <p id="gross" className="bg-transparent">
                        Gross Salary: {gross === "" ? "Rp. 0,00" : gross}
                    </p>
                    <p id="main" className="bg-transparent">
                        Main Salary: {salary === "" ? "Rp. 0,00" : Rupiah.format(salary)}
                    </p>
                    <p id="net" className="bg-transparent">
                        Net Salary: {net === "" ? "Rp. 0,00" : net}
                    </p>
                    {net === "" ? null : (
                        <button className="btn btn-danger mt-4" onClick={() => reset()}>Reset</button>
                    )}
                </div>
            </div>
        </MainContainer>
    )
}

export default Salary