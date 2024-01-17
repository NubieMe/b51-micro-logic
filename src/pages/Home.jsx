import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Title from "../components/Title"
import { button_styles, home_styles } from "../utils/styling"

const Home = () => {
    return (
        <MainContainer>
            <Header isHome={true}>
                <Title>Challenge Task</Title>
            </Header>
            <div style={home_styles} className="lg">
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
        </MainContainer>
    )
}

export default Home