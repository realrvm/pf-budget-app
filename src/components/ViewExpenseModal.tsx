import { Modal, Stack, Button } from "react-bootstrap";

import { formatToRoubles, DEFAULT_ID } from "../utils/utils";

import { useAppContext } from "../hooks/useAppContext";

interface ViewExpenseModalProps {
    currentId: string;
    handleClose: () => void;
}

const ViewExpenseModal = ({ currentId, handleClose }: ViewExpenseModalProps) => {
    // использование контекста
    const { budgets, getExpense, deleteBudget, deleteExpense } = useAppContext();

    const expenses = getExpense(currentId);
    const budget =
        DEFAULT_ID === currentId
            ? { name: "По умолчанию", id: DEFAULT_ID }
            : budgets.find((budget) => budget.id === currentId);

    return (
        <Modal show={currentId?.length > 0} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap={2}>
                        <div>Вид затрат - {budget?.name}</div>
                        {currentId !== DEFAULT_ID && (
                            <Button
                                variant="outline-danger"
                                onClick={() => {
                                    budget && deleteBudget(budget.id);
                                    handleClose();
                                }}
                            >
                                Удалить карточку
                            </Button>
                        )}
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={3}>
                    {expenses.map((expense) => {
                        const { id, description, amount } = expense;
                        return (
                            <Stack key={id} direction="horizontal" gap={2}>
                                <div className="me-auto fs-4">{description}</div>
                                <div className="fs-5">{amount && formatToRoubles.format(amount)}</div>
                                <Button size="sm" variant="outline-danger" onClick={() => deleteExpense(id)}>
                                    &times;
                                </Button>
                            </Stack>
                        );
                    })}
                </Stack>
            </Modal.Body>
        </Modal>
    );
};

export default ViewExpenseModal;
