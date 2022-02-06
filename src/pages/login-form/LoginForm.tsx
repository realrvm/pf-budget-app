import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <>
            <p className="login-form__title">login form</p>
            <Link to="/" >Hазад на главную</Link>
        </>
    );
};

export default LoginForm;
