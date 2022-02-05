import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Layout = () => {
    return (
        <Container>
            <p>Layout</p>
            <Link className="btn btn-primary" to="/budget">
                Budget App
            </Link>
        </Container>
    );
};
