import { useState } from "react";
import { BudgetCard, AddBudgetModal, AddExpenseModal, ViewExpenseModal } from "./components";

import { Container, Stack, Button } from "react-bootstrap";

import "./App.css";

const App = () => {
    // модалки для меню
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    // модалки для карточки затрат
    const [viewExpenseModalCurrentId, setViewExpenseModalCurrentId] = useState("");
    const openExpenseModal = (currentId: string) => {
        setShowAddExpenseModal(true);
        console.log(currentId);
    };

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
                    <BudgetCard
                        name={`Тест`}
                        amount={450}
                        max={1000}
                        onAddExpenseClick={() => openExpenseModal("1")}
                        onViewExpenseClick={() => setViewExpenseModalCurrentId("1")}
                    />
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
            <AddExpenseModal show={showAddExpenseModal} handleClose={() => setShowAddExpenseModal(false)} />
            <ViewExpenseModal currentId={viewExpenseModalCurrentId} handleClose={() => setViewExpenseModalCurrentId("")} />
        </>
    );
};

export default App;
