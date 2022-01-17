import BudgetCard from "./BudgetCard";
import { useAppContext } from "../hooks/useAppContext";

const TotalBudgetCard = () => {
    // использование контекста
    const { expenses, budgets } = useAppContext();

    const amount = expenses.reduce((acc, expense) => {
        const { amount } = expense;
        if (amount === undefined) return 0;
        return acc + amount;
    }, 0);

    const max = budgets.reduce((acc, budget) => {
        const { max } = budget;
        if (max === undefined) return 0;
        return acc + max;
    }, 0);

    if (max === 0) return null;

    return <BudgetCard amount={amount} name="Всего" max={max} hideButtons />;
};

export default TotalBudgetCard;
