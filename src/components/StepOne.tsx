import { useForm } from "react-hook-form";

type FormData = {
    firstName: string;
    lastName: string;
};

const StepOne = () => {
    const { register, setValue, handleSubmit } = useForm<FormData>();
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="login-form__wrapper">
            <h2>Шаг 1</h2>
            <form onSubmit={onSubmit}>
                <div className="login-form__user-box">
                    <input type="text" required {...register("firstName")} />
                    <label>Имя</label>
                </div>
                <div className="login-form__user-box">
                    <input type="password" required {...register("lastName")} />
                    <label>Фамилия</label>
                </div>
                <button
                    type="submit"
                    className="login-form__btn"
                    onClick={() => {
                        setValue("lastName", "luo");
                        setValue("firstName", "test");
                    }}
                >
                    Далее
                </button>
            </form>
        </div>
    );
};

export default StepOne;
