import { useEffect, useState } from "react"
import Title from "../components/Title"
import { getHeroes, searchHeroes } from "../utils/api"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import { subCon_styles } from "../utils/styling"

const ML = () => {
    const [heroes, setHeroes] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        getHeroes()
        .then(result => setHeroes(result))
    },[])
    
    const search = (e) => {
        e.preventDefault()
        searchHeroes(input)
        .then(result => setHeroes(result))
    }
    
    const reset = (e) => {
        e.preventDefault()
        setInput("")
        getHeroes()
        .then(result => setHeroes(result))
    }

    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Mobile Legends</Title>
            </Header>
            <div className="container-lg p-4 rounded" style={subCon_styles}>
                <form className="bg-transparent mb-5 px-4 mt-3">
                    <h2 className="bg-transparent text-light">List of Heroes</h2>
                    <input id="input" className="form-control mb-3" value={input} style={{width:"260px"}}
                    placeholder="Search Hero based on name" onChange={e => setInput(e.target.value)}/>
                    <button type="submit" className="btn btn-primary rounded px-4 me-3" onClick={(e) => search(e)}>Search</button>
                    <button className="btn btn-danger rounded px-4" onClick={(e) => reset(e)}>Reset</button>
                </form>
                <div className="p-4 bg-transparent">
                    {/* dynamic content */}
                    {heroes.map(data => 
                        <div style={{backgroundColor:"#293548", color:"white"}} className="mb-3 p-4 rounded" key={data.hero_id}>
                            <h5 style={{color:"#38bdf8", backgroundColor:"#293548"}} className="mb-4">{data.hero_name}</h5>
                            <p style={{backgroundColor:"#293548"}}>Role : {data.hero_role}</p>
                            <p style={{backgroundColor:"#293548"}}>Speciallist : {data.hero_specially}</p>
                        </div>
                    )}
                </div>
            </div>
        </MainContainer>
    )
}

export default ML