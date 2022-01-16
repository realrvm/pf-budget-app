import { Modal, Form, Button } from "react-bootstrap";
import { AddModalProps } from "../types/types";

const AddExpenseModal = ({ show, handleClose }: AddModalProps) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Траты</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Количество</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="currentId">
                        <Form.Label>Выбрать вид затрат</Form.Label>
                        <Form.Select>
                            <option>По умолчанию</option>
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
