import { useState } from "react";

import {
    BudgetCard,
    AddBudgetModal,
    AddExpenseModal,
    ViewExpenseModal,
    TotalBudgetCard,
    DefaultBudgetCard,
    ConfirmationModal,
} from "../components";

import { useAppContext } from "../hooks/useAppContext";

import { Container, Stack, Button } from "react-bootstrap";

import { DEFAULT_ID } from "../utils/utils";

import "./Budget.css";

const Budget = () => {
    // модалки для меню
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    // модалки для карточки затрат
    const [addExpenseModalCurrentId, setAddExpenseModalCurrentId] = useState("");
    const [viewExpenseModalCurrentId, setViewExpenseModalCurrentId] = useState("");

    const openExpenseModal = (currentId: string) => {
        setShowAddExpenseModal(true);
        setAddExpenseModalCurrentId(currentId);
    };

    const openExpenseModalDefault = () => {
        setShowAddExpenseModal(true);
    };

    // использование контекста
    const { budgets, getExpense } = useAppContext();

    return (
        <>
            <Container className="my-4">
                <Stack direction="horizontal" gap={2} className="mb-4">
                    <h1 className="me-auto">Бюджет</h1>
                    <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
                        Категория
                    </Button>
                    <Button variant="outline-primary" onClick={() => setShowAddExpenseModal(true)}>
                        Расходы
                    </Button>
                    <Button variant="outline-danger" onClick={() => setShowConfirmationModal(true)}>
                        Удалить всё
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
                    <DefaultBudgetCard
                        onAddExpenseClick={openExpenseModalDefault}
                        onViewExpenseClick={() => setViewExpenseModalCurrentId(DEFAULT_ID)}
                    />
                    <TotalBudgetCard />
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
            <ConfirmationModal show={showConfirmationModal} handleClose={() => setShowConfirmationModal(false)} />
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

export default Budget;
