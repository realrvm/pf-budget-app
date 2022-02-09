import { useRef } from "react";

import { useAppContext } from "../../../hooks/useAppContext";

import { Modal, Form, Button } from "react-bootstrap";

import { DEFAULT_ID } from "../../../utils/utils";

import { AddModalProps } from "../../../types/types";

interface AddExpenseModalProps extends AddModalProps {
    defaultCurrentId: string;
}

const AddExpenseModal = ({ show, handleClose, defaultCurrentId }: AddExpenseModalProps) => {
    // использование контекста
    const { budgets, setExpense } = useAppContext();

    // refs
    const desctiptionRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const amountRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const currentIdRef = useRef<HTMLSelectElement>({} as HTMLSelectElement);

    const handleSubmit = (element: React.FormEvent<HTMLFormElement>) => {
        element.preventDefault();
        setExpense({
            description: desctiptionRef.current.value,
            amount: parseInt(amountRef.current.value),
            currentId: currentIdRef.current.value,
        });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Расходы</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control ref={desctiptionRef} type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Стоимость</Form.Label>
                        <Form.Control ref={amountRef} type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="currentId">
                        <Form.Label>Выбрать категорию расходов</Form.Label>
                        <Form.Select defaultValue={defaultCurrentId} ref={currentIdRef}>
                            <option>{DEFAULT_ID}</option>
                            {budgets.map((budget) => {
                                const { id, name } = budget;
                                return (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                );
                            })}
                        </Form.Select>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">
                            Добавить
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    );
};

export default AddExpenseModal;
