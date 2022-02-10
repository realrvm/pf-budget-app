import { Input } from ".";
import { useForm } from "react-hook-form";

const StepThree = () => {
    const { control } = useForm();

    return (
        <form>
            <Input name={`name`} control={control} />
            <button type="submit">Загрузка</button>
        </form>
    );
};

export default StepThree;
