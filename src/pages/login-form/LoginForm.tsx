import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <>
            <Link className="login-form__back" to="/">
                Hазад на главную
            </Link>
            <div className="login-form__wrapper">
                <h2>Login</h2>
                <form>
                    <div className="login-form__user-box">
                        <input type="text" name="user" required />
                        <label>Username</label>
                    </div>
                    <div className="login-form__user-box">
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="login-form__btn">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
