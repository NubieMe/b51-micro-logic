import { useEffect, useState } from "react"
import Title from "../components/Title"
import { getHeroes, searchHeroes } from "../components/api"

const ML = () => {
    const [heroes, setHeroes] = useState([])
    const div_styles = {
        backgroundColor: "#1e293b",
        border: "1 solid #353f4f",
        margin: "0 auto"
    }

    useEffect(() => {
        getHeroes()
        .then(result => setHeroes(result))
    },[])
    
    const search = () => {
        const q = document.getElementById("input").value
        searchHeroes(q)
        .then(result => setHeroes(result))
    }
    
    const reset = () => {
        document.getElementById("input").value = ""
        getHeroes()
        .then(result => setHeroes(result))
    }

    return (
        <div className='container-lg mt-5 column align-items-center'>
            <div className="w-100 d-flex row">
                <div className="col-lg-8">
                    <a href="/">
                        <button className="btn btn-outline-primary">Back</button>
                    </a>
                </div>
                <Title>Mobile Legends</Title>
            </div>
            <div className="container-lg p-4" style={div_styles}>
                <div className="bg-transparent mb-5 ms-4 mt-3">
                    <h2 className="bg-transparent text-light">Daftar Hero</h2>
                    <input id="input" className="form-control w-25 mb-3" placeholder="Search Hero based on name" />
                    <button className="btn btn-primary rounded px-4 me-3" onClick={() => search()}>Search</button>
                    <button className="btn btn-danger rounded px-4" onClick={() => reset()}>Reset</button>
                </div>
                <div className="p-4 bg-transparent">
                    {/* dynamic content */}
                    {heroes.map(data => 
                        <div style={{backgroundColor:"#293548", color:"white"}} className="mb-3 p-4" key={data.hero_id}>
                            <h5 style={{color:"#38bdf8", backgroundColor:"#293548"}} className="mb-3">{data.hero_name}</h5>
                            <p style={{backgroundColor:"#293548"}}>Role : {data.hero_role}</p>
                            <p style={{backgroundColor:"#293548"}}>Speciallist : {data.hero_specially}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ML