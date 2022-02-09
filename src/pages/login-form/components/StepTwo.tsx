import { useState } from "react";
import { useForm } from "react-hook-form";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stepTwoAction } from "../../../store/stepTwoReducer";

const StepTwo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { mail } = useSelector((state: RootState) => state.stepTwoReducer);

    const [mailbox, setMailbox] = useState(mail);

    const handleMailbox = (e: { target: HTMLInputElement }) => {
        setMailbox(e.target.value);
    };

    const onSubmit = handleSubmit((data) => {
        dispatch(stepTwoAction(data.mail));
        reset();
        navigate("/login-form/stepthree");
    });

    return (
        <div className="login-form__wrapper">
            <h2>Шаг 2</h2>
            <form onSubmit={onSubmit}>
                <div className="login-form__user-box">
                    <input
                        type="text"
                        value={mailbox}
                        {...register("firstName", {
                            required: "Поле обязательно для заполнения!",
                        })}
                        onChange={handleMailbox}
                    />
                    <label>Email</label>
                    <div className="login-form__errors">
                        {errors?.mail && <p>{errors?.mail?.message || "Ошибка!"}</p>}
                    </div>
                </div>
                <button type="submit" className="login-form__btn">
                    Далее
                </button>
            </form>
        </div>
    );
};

export default StepTwo;
