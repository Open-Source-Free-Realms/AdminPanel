import { ContainerTypes } from "./component.types";

const Container = ( { children } : ContainerTypes ) => {
    return (
        <div>{children}</div>
    )
}

export default Container;