import { createContext } from "react";

import { useLocaleStorage } from "../hooks/useLocaleStorage";
import { getRandomId, DEFAULT_ID } from "../utils/utils";

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
    description?: string;
}

interface AppContextTypes {
    expenses: ExpenseTypes[];
    budgets: BudgetTypes[];
    getExpense: (currentId: string) => BudgetTypes[];
    setExpense: ({ description, amount, currentId }: ExpenseTypes) => void;
    addBudget: ({ name, max }: { name: string; max: number }) => void;
    deleteBudget: (id: string) => void;
    deleteExpense: (id: string) => void;
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

    //создать новый карточку трат
    const addBudget = ({ name, max }: { name: string; max: number }) => {
        setBudgets((prevBudgets: BudgetTypes[]) => {
            if (prevBudgets.find((budget: BudgetTypes) => budget.name === name)) {
                return prevBudgets;
            }
            return [...prevBudgets, { id: getRandomId(), name, max }];
        });
    };

    // удалить
    const deleteBudget = (id: string) => {
        setExpenses((prevExpenses: ExpenseTypes[]) => {
            return prevExpenses.map((expense) => {
                if (expense.currentId === id) return expense;
                return { ...expense, currentId: DEFAULT_ID };
            });
        });
        setBudgets((prevBudgets: BudgetTypes[]) => {
            return prevBudgets.filter((budget: BudgetTypes) => budget.id !== id);
        });
    };

    // удалить
    const deleteExpense = (id: string) => {
        setExpenses((prevExpenses: ExpenseTypes[]) => {
            return prevExpenses.filter((expense: ExpenseTypes) => expense.id !== id);
        });
    };

    return (
        <AppContext.Provider
            value={{ budgets, expenses, getExpense, setExpense, addBudget, deleteBudget, deleteExpense }}
        >
            {children}
        </AppContext.Provider>
    );
};
