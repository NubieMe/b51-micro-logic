import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Title from "../components/Title"

const Scramble = () => {
    return (
        <MainContainer>
            <Header isHome={false}>
                <Title>Word Scramble</Title>
            </Header>
        </MainContainer>
    )
}

export default Scramble