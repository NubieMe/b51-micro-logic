import Title from "../components/Title"

const Home = () => {
    const button_styles = {
        color: "#38bdf8",
        backgroundColor: "#162a42",
    }

    const div_styles = {
        width: "130vh",
        margin: "100px auto",
        display: "flex", 
        flexWrap: "wrap",
        gap: "50px",
        justifyContent: "center",
        textDecoration: "none"
    }

    return (
    <div className='container-md mt-5 column align-items-center'>
        <div className="w-100 d-flex row">
            <div className="flex-grow-1">
                
            </div>
            <Title>Challenge Task</Title>
        </div>
        <div style={div_styles} className="lg">
            <a href="/count">
            <button className="btn p-3" style={button_styles}>Count Duration</button>
            </a>
            <a href="/convert">
            <button className="btn p-3" style={button_styles}>Currency Convert</button>
            </a>
            <a href="/ML">
            <button className="btn p-3" style={button_styles}>Mobile Legends</button>
            </a>
            <a href="/TTT">
            <button className="btn p-3" style={button_styles}>Tic Tac Toe</button>
            </a>
            <a href="/matching">
            <button className="btn p-3" style={button_styles}>Matching Card</button>
            </a>
            <a href="/salary">
            <button className="btn p-3" style={button_styles}>Salary Calculating</button>
            </a>
            <a href="/scramble">
            <button className="btn p-3" style={button_styles}>Word Scramble</button>
            </a>
        </div>
    </div>
    )
}

export default Home