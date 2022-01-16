import { Container, Stack, Button } from "react-bootstrap";
import { BudgetCard } from "./components";

import "./App.css";

const App = () => {
    return (
        <>
            <Container className="my-4">
                <Stack direction="horizontal" gap={2} className="mb-4">
                    <h1 className="me-auto">Бюджет</h1>
                    <Button variant="primary">Приход</Button>
                    <Button variant="outline-primary">Расход</Button>
                </Stack>
                <div className="app-content">
                    <BudgetCard
                        name={`Тест`}
                        amount={450}
                        max={1000}
                        onAddExpenseClick={() => alert("add")}
                        onViewExpenseClick={() => alert("view")}
                    />
                </div>
            </Container>
        </>
    );
};

export default App;
