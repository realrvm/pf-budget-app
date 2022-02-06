import "./LoginForm.css";
import { Link, Outlet } from "react-router-dom";

const LoginForm = () => {
    return (
        <>
            <Link className="login-form__back" to="/">
                Hазад на главную
            </Link>
            <Outlet />
        </>
    );
};

export default LoginForm;
