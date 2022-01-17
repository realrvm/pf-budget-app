import { useState } from "react";
import { BudgetCard, AddBudgetModal, AddExpenseModal, ViewExpenseModal, TotalBudgetCard } from "./components";
import { useAppContext } from "./hooks/useAppContext";

import { Container, Stack, Button } from "react-bootstrap";

import "./App.css";

const App = () => {
    // модалки для меню
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    // модалки для карточки затрат
    const [addExpenseModalCurrentId, setAddExpenseModalCurrentId] = useState("");
    const [viewExpenseModalCurrentId, setViewExpenseModalCurrentId] = useState("");
    const openExpenseModal = (currentId: string) => {
        setShowAddExpenseModal(true);
        setAddExpenseModalCurrentId(currentId);
    };

    // использование контекста
    const { budgets, getExpense } = useAppContext();

    return (
        <>
            <Container className="my-4">
                <Stack direction="horizontal" gap={2} className="mb-4">
                    <h1 className="me-auto">Бюджет</h1>
                    <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
                        Приход
                    </Button>
                    <Button variant="outline-primary" onClick={() => setShowAddExpenseModal(true)}>
                        Расход
                    </Button>
                </Stack>
                <div className="app-content">
                    {budgets.map((budget) => {
                        const { id, name, max } = budget;
                        const amount = getExpense(id).reduce((acc, expense) => {
                            if (expense.amount === undefined) return 0;
                            return acc + expense.amount;
                        }, 0);
                        return (
                            <BudgetCard
                                key={id}
                                name={name}
                                amount={amount}
                                max={max}
                                onAddExpenseClick={() => openExpenseModal(id)}
                                onViewExpenseClick={() => setViewExpenseModalCurrentId(id)}
                            />
                        );
                    })}
                    <TotalBudgetCard />
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
            <AddExpenseModal
                show={showAddExpenseModal}
                handleClose={() => setShowAddExpenseModal(false)}
                defaultCurrentId={addExpenseModalCurrentId}
            />
            <ViewExpenseModal
                currentId={viewExpenseModalCurrentId}
                handleClose={() => setViewExpenseModalCurrentId("")}
            />
        </>
    );
};

export default App;
