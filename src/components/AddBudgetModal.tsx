import { useRef } from "react";

import { Modal, Form, Button } from "react-bootstrap";

import { useAppContext } from "../hooks/useAppContext";

import { AddModalProps } from "../types/types";

const AddBudgetModal = ({ show, handleClose }: AddModalProps) => {
    // использование контекста
    const { addBudget } = useAppContext();

    // refs
    const nameRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const maxRef = useRef<HTMLInputElement>({} as HTMLInputElement);

    const handleSubmit = (element: React.FormEvent<HTMLFormElement>) => {
        element.preventDefault();
        addBudget({
            name: nameRef.current.value,
            max: parseInt(maxRef.current.value),
        });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Новая графа расходов</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Название</Form.Label>
                        <Form.Control ref={nameRef} type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="maximum">
                        <Form.Label>Максимальная сумма</Form.Label>
                        <Form.Control ref={maxRef} type="number" required min={0} step={10} />
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

export default AddBudgetModal;
