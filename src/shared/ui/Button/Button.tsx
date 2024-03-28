import {FC} from "react";
import pointer from "./icons/pointer.svg";
import close from "./icons/close.svg";
import {ButtonProps} from "./Button.props"
import "./Button.scss";

const Button: FC<ButtonProps> = ({onClick, buttonText, isDropdownDisplayed}) => {
    return (
        <button className="button" onClick={onClick}>
            {buttonText}
            {isDropdownDisplayed
                ? <img src={close} alt="pointer"/>
                : <img src={pointer} alt="pointer"/>}
        </button>
    );
}
export default Button;