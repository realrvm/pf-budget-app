import { useState } from "react";
import { useForm } from "react-hook-form";
import { RootState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stepTwoAction } from "store/stepTwoReducer";

import { mailSchema } from "utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const StepTwo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(mailSchema),
    });

    const hasPhone = watch("phone");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { mail, phone } = useSelector((state: RootState) => state.stepTwoReducer);

    const [mailbox, setMailbox] = useState(mail);
    const [phoneNumber, setPhoneNumber] = useState(phone);

    const handleMailbox = (e: { target: HTMLInputElement }) => {
        setMailbox(e.target.value);
    };

    const normalizePhoneNumber = (phoneNumber: string) => {
        const phoneNormNumber = parsePhoneNumberFromString(phoneNumber);

        if (!phoneNormNumber) return phoneNumber;
        return phoneNormNumber.formatInternational();
    };

    const handePhoneNumber = (e: { target: HTMLInputElement }) => {
        const normalizedPhoneNumber = normalizePhoneNumber(e.target.value);
        setPhoneNumber(normalizedPhoneNumber);
    };

    const onSubmit = handleSubmit((data) => {
        dispatch(stepTwoAction({ mail: data.mail, phone: data.phone }));
        reset();
        navigate("/login-form/stepthree");
    });

    const illBeBack = () => {
        navigate("/login-form");
    };

    return (
        <div className="login-form__wrapper">
            <h2>Шаг 2</h2>
            <form onSubmit={onSubmit}>
                <div className="login-form__user-box">
                    <input
                        type="email"
                        value={mailbox}
                        {...register("mail", {
                            required: "Поле обязательно для заполнения!",
                        })}
                        onChange={handleMailbox}
                    />
                    <label>Email</label>
                    <div className="login-form__errors">
                        {errors?.mail && <p>{errors?.mail?.message || "Ошибка!"}</p>}
                    </div>
                </div>
                <div className="login-form__phone-box">
                    <div className="login-form__phone-header">
                        <input type="checkbox" {...register("phone")} />
                        <label htmlFor="hasPhone" className="login-form__phone-label">
                            Телефонный номер
                        </label>
                    </div>
                    {hasPhone && (
                        <input
                            type="tel"
                            className="login-form__phone-num"
                            value={phoneNumber}
                            {...register("phone")}
                            onChange={handePhoneNumber}
                        />
                    )}
                </div>
                <button type="button" onClick={illBeBack} className="login-form__btn">
                    Назад
                </button>
                <button type="submit" className="login-form__btn">
                    Далее
                </button>
            </form>
        </div>
    );
};

export default StepTwo;
