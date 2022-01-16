import { createContext } from "react";

import { useLocaleStorage } from "../hooks/useLocaleStorage";
import { getRandomId } from "../utils/utils";

type AppProviderProps = { children: React.ReactNode };

interface ExpenseTypes {
    id?: string;
    currentId: string;
    amount: number;
    description: string;
}

interface BudgetTypes {
    id: string;
    name: string;
    max: number;
    amount?: number;
}

interface AppContextTypes {
    expenses: ExpenseTypes[];
    budgets: BudgetTypes[];
    getExpense: (currentId: string) => BudgetTypes[];
    setExpense: ({ description, amount, currentId }: ExpenseTypes) => void;
}

export const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

export const AppProvider = ({ children }: AppProviderProps) => {
    const [budgets, setBudgets] = useLocaleStorage("budgets", []);
    const [expenses, setExpenses] = useLocaleStorage("expenses", []);

    // получить
    const getExpense = (currentId: string) => {
        return expenses.filter((expense: ExpenseTypes) => expense.currentId == currentId);
    };

    // создать новую трату
    const setExpense = ({ description, amount, currentId }: ExpenseTypes) => {
        setExpenses((prevExpenses: ExpenseTypes[]) => {
            return [...prevExpenses, { id: getRandomId(), description, amount, currentId }];
        });
    };

    return <AppContext.Provider value={{ budgets, expenses, getExpense, setExpense }}>{children}</AppContext.Provider>;
};
