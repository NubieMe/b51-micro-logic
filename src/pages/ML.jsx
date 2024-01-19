import { useEffect, useState } from "react"
import Title from "../components/Title"
import { getHeroes } from "../utils/api"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import { subCon_styles } from "../utils/styling"

const ML = () => {
    const [heroes, setHeroes] = useState([])
    const [input, setInput] = useState("")
    const [display, setDisplay] = useState([])

    useEffect(() => {
        getHeroes()
        .then(result => setHeroes(result))
    },[])

    useEffect(() => {
        setDisplay(heroes)
    },[heroes])
    
    const search = (e) => {
        e.preventDefault()
        const filtered = heroes.filter((h) => {
            return (
                h.hero_name.toLowerCase().includes(input.toLowerCase()) ||
                h.hero_role.toLowerCase().includes(input.toLowerCase()) ||
                h.hero_specially.toLowerCase().includes(input.toLowerCase())
            )
        })
        setDisplay(filtered)
    }
    
    const reset = (e) => {
        e.preventDefault()
        setInput("")
        setDisplay(heroes)
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
                    onChange={e => setInput(e.target.value)}/>
                    <button type="submit" className="btn btn-primary rounded px-4 me-3" onClick={(e) => search(e)}>Search</button>
                    <button className="btn btn-danger rounded px-4" onClick={(e) => reset(e)}>Reset</button>
                </form>
                <div className="p-4 bg-transparent">
                    {/* dynamic content */}
                    {display.map(data => 
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