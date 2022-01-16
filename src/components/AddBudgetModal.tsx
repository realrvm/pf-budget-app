import { Modal, Form, Button } from "react-bootstrap";
import { AddModalProps } from "../types/types";


const AddBudgetModal = ({ show, handleClose }: AddModalProps) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Новая графа расходов</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Название</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="maximum">
                        <Form.Label>Максимальная сумма</Form.Label>
                        <Form.Control type="number" required min={0} step={10} />
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
