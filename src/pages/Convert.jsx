import Title from "../components/Title"

const Convert = () => {
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
        </div>
    )
}

export default Convert