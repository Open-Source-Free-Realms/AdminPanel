import { TextTypes } from "./component.types";

const Text = ({ children } : TextTypes) => {
    return (
        <p>{children}</p>
    )
}

export default Text;