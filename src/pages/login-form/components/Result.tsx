import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Result = () => {
    const { stepOneReducer, stepTwoReducer, stepThreeReducer } = useSelector((state: RootState) => state);
    const navigate = useNavigate();

    const illBeBack = () => {
        navigate("/login-form/stepthree");
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        const commonState = { ...stepOneReducer, ...stepTwoReducer, files: stepThreeReducer };
        const enries = Object.entries(commonState);

        enries.forEach((entry) => {
            formData.append(entry[0], entry[1] as string | Blob);
        });

        const res = await fetch("", {
            method: "POST",
            body: formData,
        });

        if (res.status === 200) {
            alert("welldone");
        } else {
            alert("нет сервера");
        }
    };

    return (
        <div className="login-form__wrapper">
            <h2>Результат</h2>
            <Table className="text-white">
                <thead>
                    <tr>
                        <th>Поле</th>
                        <th>Значение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Имя</td>
                        <td>{stepOneReducer?.firstName}</td>
                    </tr>
                    <tr>
                        <td>Фамилия</td>
                        <td>{stepOneReducer?.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{stepTwoReducer?.mail}</td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td>{stepTwoReducer?.phone ? stepTwoReducer?.phone : "Не указан"}</td>
                    </tr>
                </tbody>
            </Table>
            {stepThreeReducer.length > 0 && (
                <>
                    <h4 className="login-form__result-filehead">Файлы</h4>
                    {stepThreeReducer.map((element) => {
                        const { id, name } = element;
                        return (
                            <p key={id} className="login-form__result-files">
                                {name}
                            </p>
                        );
                    })}
                </>
            )}
            <button type="button" onClick={illBeBack} className="login-form__btn">
                Назад
            </button>
            <button type="button" onClick={handleSubmit} className="login-form__btn">
                Завершить
            </button>
        </div>
    );
};

export default Result;
