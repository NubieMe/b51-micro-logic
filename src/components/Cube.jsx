import { cube_styles } from "../utils/styling"

const Cube = ({ id, click, children, isHidden }) => {
    return (
        <button id={id} style={cube_styles} className="btn btn-light d-flex" onClick={click}>
            {isHidden === true ? null : children}
        </button>
    )
}

export default Cube