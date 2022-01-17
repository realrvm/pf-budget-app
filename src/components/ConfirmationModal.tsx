import { Modal, Stack, Button } from "react-bootstrap";

import { useAppContext } from "../hooks/useAppContext";

import { AddModalProps } from "../types/types";

const ConfirmationModal = ({ show, handleClose }: AddModalProps) => {
    const { removeEvthgFromLocaleStorage } = useAppContext();

    const handleConfirmationClick = () => {
        removeEvthgFromLocaleStorage();
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Удалить всё</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-4">Вы действительно хотите удалить все записи? Это билет в один конец &#128512;.</div>
                <Stack direction="horizontal" gap={2} className="d-flex justify-content-end">
                    <Button variant="primary" onClick={handleConfirmationClick}>
                        Да, конечно!
                    </Button>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Я передумал.
                    </Button>
                </Stack>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmationModal;
