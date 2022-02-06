const StepThree = () => {
    return (
        <div className="login-form__wrapper">
            <h2>Шаг 3</h2>
            <form>
                <div className="login-form__user-box">
                    <input type="text" name="user" required />
                    <label>Имя</label>
                </div>
                <div className="login-form__user-box">
                    <input type="password" name="password" required />
                    <label>Фамилия</label>
                </div>
                <button type="submit" className="login-form__btn">
                    Далее
                </button>
            </form>
        </div>
    );
};

export  default StepThree
