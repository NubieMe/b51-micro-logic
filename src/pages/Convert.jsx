import { useState } from "react"
import Title from "../components/Title"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import { subCon_styles } from "../utils/subCon"

const Convert = () => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

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
        //error handling
        const elem = document.getElementById("number").value
        if (from | to === "") {
            return alert("Please input the currency correctly!")
        } else if (from === to) {
            return alert("Please input the currency correctly!")
        } else if (!elem | Math.sign(elem) === -1) {
            return alert("Please input the amount correctly!")
        }
        let result

        //usd conversion
        if (from === "usd" & to === "idr") {
            result = elem * usd.idr
        } else if (from === "usd" & to === "eur") {
            result = elem * usd.eur
        } else if (from === "usd" & to === "gbp") {
            result = elem * usd.gbp
        }

        //idr conversion
        if (from === "idr" & to === "usd") {
            result = elem * idr.usd
        } else if (from === "idr" & to === "eur") {
            result = elem * idr.eur
        } else if (from === "idr" & to === "gbp") {
            result = elem * idr.gbp
        }

        //eur conversion
        if (from === "eur" & to === "usd") {
            result = elem * eur.usd
        } else if (from === "eur" & to === "idr") {
            result = elem * eur.idr
        } else if (from === "eur" & to === "gbp") {
            result = elem * eur.gbp
        }

        //gbp conversion
        if (from === "gbp" & to === "usd") {
            result = elem * gbp.usd
        } else if (from === "gbp" & to === "idr") {
            result = elem * gbp.idr
        } else if (from === "gbp" & to === "eur") {
            result = elem * gbp.eur
        }

        document.getElementById("output").innerHTML = result
    }


    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Currency Convert</Title>
            </Header>
            <div style={subCon_styles} className="d-flex flex-wrap py-5 px-4 mt-5 justify-content-around gap-5 rounded">
                <div className=" d-flex align-items-center flex-wrap gap-3 bg-transparent">
                    <input type="number" id="number" placeholder="Input the amount" className="form-control"/>
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
                    <button className="btn btn-primary rounded-4 px-5" onClick={() => handle()}>Convert</button>
                </div>
                <div className="bg-transparent">
                    <div id="output" className="bg-light p-2 rounded" style={{height:"38px", width:"300px"}}></div>
                    <label htmlFor="output" className="bg-transparent text-light">Result will show up here ^</label>
                </div>
            </div>
        </MainContainer>   
    )
}

export default Convert