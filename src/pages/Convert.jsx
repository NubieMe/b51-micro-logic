import { useEffect, useState } from "react"
import Title from "../components/Title"

const Convert = () => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")

    const div_styles = {
        backgroundColor: "#1e293b",
        border: "1 solid #353f4f",
        width: "130vh",
        margin: "0 auto"
    }

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


    function handle(e) {
        e.preventDefault()
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
        <div className='container-lg mt-5 column align-items-center'>
            <div className="w-100 d-flex row">
                <div className="col-lg-8">
                    <a href="/">
                        <button className="btn btn-outline-primary">Back</button>
                    </a>
                </div>
                <Title>Currency Convert</Title>
            </div>
            <div style={div_styles} className="d-flex flex-column py-5 px-4 mt-5 rounded">
                <div className=" d-flex flex-row align-items-center" style={{backgroundColor:"transparent"}}>
                    <input type="number" id="number" placeholder="Input the amount" className="form-control w-75"/>
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
                    <button className="btn btn-primary rounded-4 px-5" onClick={e => handle(e)}>Convert</button>
                </div>
                <div className="bg-transparent mt-3">
                    <label htmlFor="output" className="bg-transparent text-light">Result:</label>
                    <div id="output" className="bg-light w-50 p-2 rounded" style={{height:"38px"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Convert