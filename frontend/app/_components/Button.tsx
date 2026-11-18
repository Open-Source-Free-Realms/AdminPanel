import { ButtonTypes } from "./component.types";

const Button = ( { buttonText, buttonIcon, onClick } : ButtonTypes) => {
    return (
        <button>
            {buttonIcon}
            {buttonText}
        </button>
    )
}

export default Button;