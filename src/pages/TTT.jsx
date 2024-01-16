import Title from "../components/Title"

const TTT = () => {
    return (
        <div className='container-lg mt-5 column align-items-center'>
            <div className="w-100 d-flex row">
                <div className="col-lg-8">
                    <a href="/">
                        <button className="btn btn-outline-primary">Back</button>
                    </a>
                </div>
                <Title>Tic Tac Toe</Title>
            </div>
        </div>
    )
}

export default TTT