import { FileInput } from ".";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StepThree = () => {
    const { control } = useForm();
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/login/form/result");
    };

    const illBeBack = () => {
        navigate("/login-form/steptwo");
    };

    return (
        <div className="login-form__wrapper">
            <h2>Шаг 3</h2>
            <form onSubmit={onSubmit}>
                <FileInput name={`name`} control={control} />
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

export default StepThree;
