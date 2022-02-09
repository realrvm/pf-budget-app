import { useState } from "react";
import { useForm } from "react-hook-form";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { stepOneAction } from "../../../store/stepOneReducer";
import { useNavigate } from "react-router-dom";

type FormData = {
    firstName: string;
    lastName: string;
};

const StepOne = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        mode: "onBlur",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { firstName, lastName } = useSelector((state: RootState) => state.stepOneReducer);

    const [firstNameValue, setFirstNameValue] = useState(firstName);
    const [lastNameValue, setLastNameValue] = useState(lastName);

    const handleFirstName = (e: { target: HTMLInputElement }) => {
        setFirstNameValue(e.target.value);
    };

    const handleLastName = (e: { target: HTMLInputElement }) => {
        setLastNameValue(e.target.value);
    };

    const onSubmit = handleSubmit((data) => {
        dispatch(stepOneAction({ lastName: data.lastName, firstName: data.firstName }));
        reset();
        navigate("/login-form/steptwo");
    });

    return (
        <div className="login-form__wrapper">
            <h2>Шаг 1</h2>
            <form onSubmit={onSubmit}>
                <div className="login-form__user-box">
                    <input
                        type="text"
                        value={firstNameValue}
                        {...register("firstName", {
                            required: "Поле обязательно для заполнения!",
                            minLength: { value: 3, message: "Не менее 3х символов!" },
                            pattern: { value: /^([^0-9]*)$/, message: "Никаких цифр в имени!" },
                        })}
                        onChange={handleFirstName}
                    />
                    <label>Имя</label>
                    <div className="login-form__errors">
                        {errors?.firstName && <p>{errors?.firstName?.message || "Ошибка!"}</p>}
                    </div>
                </div>
                <div className="login-form__user-box">
                    <input
                        type="text"
                        value={lastNameValue}
                        {...register("lastName", {
                            required: "Поле обязательно для заполнения!",
                            minLength: { value: 3, message: "Не менее 3х символов!" },
                            pattern: { value: /^([^0-9]*)$/, message: "Никаких цифр в фамилии!" },
                        })}
                        onChange={handleLastName}
                    />
                    <label>Фамилия</label>
                    <div className="login-form__errors">
                        {errors?.lastName && <p>{errors?.lastName?.message || "Ошибка!"}</p>}
                    </div>
                </div>
                <button type="submit" className="login-form__btn">
                    Далее
                </button>
            </form>
        </div>
    );
};

export default StepOne;
