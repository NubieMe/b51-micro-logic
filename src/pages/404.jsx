import Header from "../components/Header"
import MainContainer from "../components/MainContainer"

const NotFound = () => {
    return (
        <MainContainer>
            <Header isHome={false}>
                <h1 className="text-center text-light mt-5 pt-5">404 Not Found</h1>
                <h4 className="text-secondary text-center mt-5">What Are You Looking For???</h4>
            </Header>
        </MainContainer>
    )
}

export default NotFound