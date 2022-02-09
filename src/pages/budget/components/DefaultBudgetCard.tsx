import { BudgetCard } from ".";

import { useAppContext } from "../../../hooks/useAppContext";

import { DEFAULT_ID } from "../../../utils/utils";

interface DefaultBudgetCardProps {
    onAddExpenseClick: () => void;
    onViewExpenseClick: () => void;
}

const DefaultBudgetCard = ({ onAddExpenseClick, onViewExpenseClick }: DefaultBudgetCardProps) => {
    // использование контекста
    const { getExpense } = useAppContext();

    const amount = getExpense(DEFAULT_ID).reduce((acc, expense) => {
        const { amount } = expense;
        if (amount === undefined) return 0;
        return acc + amount;
    }, 0);

    if (amount === 0) return null;

    return (
        <BudgetCard
            amount={amount}
            name="По умолчанию"
            onAddExpenseClick={onAddExpenseClick}
            onViewExpenseClick={onViewExpenseClick}
        />
    );
};

export default DefaultBudgetCard;
