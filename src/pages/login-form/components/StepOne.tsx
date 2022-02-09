import { useState } from "react";
import { useForm } from "react-hook-form";
import { RootState } from "../../../store/stepOneReducer";
import { useDispatch, useSelector } from "react-redux";
import { stepOneAction } from "../../../store/stepOneReducer";

type FormData = {
    firstName: string;
    lastName: string;
};

const StepOne = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector((state: RootState) => state);

    const [firstNameValue, setFirstNameValue] = useState(firstName);
    const [lastNameValue, setLastNameValue] = useState(lastName);

    const handleFirstName = (e: { target: HTMLInputElement }) => {
        setFirstNameValue(e.target.value);
    };

    const handleLastName = (e: { target: HTMLInputElement }) => {
        setLastNameValue(e.target.value);
    };

    const onSubmit = handleSubmit((data) => {
        dispatch(stepOneAction({ lastName: lastNameValue, firstName: firstNameValue }));
    });

    return (
        <div className="login-form__wrapper">
            <h2>Шаг 1</h2>
            <form onSubmit={onSubmit}>
                <div className="login-form__user-box">
                    <input
                        type="text"
                        value={firstNameValue}
                        {...register("firstName")}
                        onChange={handleFirstName}
                        required
                    />
                    <label>Имя</label>
                </div>
                <div className="login-form__user-box">
                    <input
                        type="text"
                        value={lastNameValue}
                        {...register("lastName")}
                        onChange={handleLastName}
                        required
                    />
                    <label>Фамилия</label>
                </div>
                <button type="submit" className="login-form__btn">
                    Далее
                </button>
            </form>
        </div>
    );
};

export default StepOne;
