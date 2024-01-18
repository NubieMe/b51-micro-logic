import { useState } from "react"
import Title from "../components/Title"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import { subCon_styles } from "../utils/styling"

const Convert = () => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [result, setResult] = useState("")
    const [input, setInput] = useState("")

    const usd = {
        idr: 15592.39,
        eur: 0.92,
        gbp: 0.79
    }

    const idr = {
        usd: 0.000064,
        eur: 0.000059,
        gbp: 0.000051
    }

    const eur = {
        idr: 17030.64,
        usd: 1.09,
        gbp: 0.86
    }

    const gbp = {
        eur: 1.16,
        usd: 1.27,
        idr: 19782.35,
    }


    function handle() {
        e.preventDefault()
        //error handling
        if (from | to === "") {
            return alert("Please input the currency correctly!")
        } else if (from === to) {
            return alert("Please input the currency correctly!")
        } else if (!input | Math.sign(input) === -1) {
            return alert("Please input the amount correctly!")
        }

        let res

        //usd conversion
        if (from === "usd" & to === "idr") {
            res = input * usd.idr
        } else if (from === "usd" & to === "eur") {
            res = input * usd.eur
        } else if (from === "usd" & to === "gbp") {
            res = input * usd.gbp
        }

        //idr conversion
        if (from === "idr" & to === "usd") {
            res = input * idr.usd
        } else if (from === "idr" & to === "eur") {
            res = input * idr.eur
        } else if (from === "idr" & to === "gbp") {
            res = input * idr.gbp
        }

        //eur conversion
        if (from === "eur" & to === "usd") {
            res = input * eur.usd
        } else if (from === "eur" & to === "idr") {
            res = input * eur.idr
        } else if (from === "eur" & to === "gbp") {
            res = input * eur.gbp
        }

        //gbp conversion
        if (from === "gbp" & to === "usd") {
            res = input * gbp.usd
        } else if (from === "gbp" & to === "idr") {
            res = input * gbp.idr
        } else if (from === "gbp" & to === "eur") {
            res = input * gbp.eur
        }

        setResult(res)
    }


    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Currency Convert</Title>
            </Header>
            <div style={subCon_styles} className="d-flex flex-wrap py-5 px-4 mt-5 justify-content-around gap-5 rounded">
                <form className=" d-flex align-items-center flex-wrap gap-3 bg-transparent">
                    <input type="number" id="number" placeholder="Input the amount" className="form-control"
                    onChange={e => setInput(e.target.value)}/>
                    <select id="from" className="bg-light p-1 rounded mx-3" onChange={e => setFrom(e.target.value)}>
                        <option className="bg-light" value=""></option>
                        <option className="bg-light" value="idr">IDR</option>
                        <option className="bg-light" value="usd">USD</option>
                        <option className="bg-light" value="eur">EUR</option>
                        <option className="bg-light" value="gbp">GBP</option>
                    </select>
                    <span className="bg-transparent text-light">TO</span>
                    <select id="to" className="bg-light p-1 rounded mx-3" onChange={e => setTo(e.target.value)}>
                        <option className="bg-light" value=""></option>
                        <option className="bg-light" value="idr">IDR</option>
                        <option className="bg-light" value="usd">USD</option>
                        <option className="bg-light" value="eur">EUR</option>
                        <option className="bg-light" value="gbp">GBP</option>
                    </select>
                    <button className="btn btn-primary rounded-4 px-4" onClick={(e) => handle(e)}>Convert</button>
                </form>
                <div className="bg-transparent">
                    <div id="output" className="bg-light p-2 rounded mb-2" style={{height:"38px", width:"300px"}}>
                        {result === "" ? null : result}
                    </div>
                    <label htmlFor="output" className="bg-transparent text-light">Result will show up here ^</label>
                </div>
            </div>
        </MainContainer>   
    )
}

export default Convert