const Header = ({ children, isHome }) => {
    return (
        <div className="w-100 d-flex row">
            <div className="col-lg-8">
                {isHome === true ? null : (
                    <a href="/">
                        <button className="btn btn-outline-primary">Back</button>
                    </a>
                )}
            </div>
            {children}
        </div>
    )
}

export default Header