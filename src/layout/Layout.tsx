import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Layout.css";

export const Layout = () => {
    return (
        <Container>
            <h1 className="demo-menu__title">Раздаточная страница</h1>
            <div className="demo-menu__content">
                <Link className="btn btn-primary" to="/budget">
                    Budget App
                </Link>
                <Link className="btn btn-secondary" to="/login-form">
                    Login Form
                </Link>
            </div>
        </Container>
    );
};
