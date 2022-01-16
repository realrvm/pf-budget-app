import { Modal, Stack, Button } from "react-bootstrap";
import { formatToRoubles } from "../utils/utils";

interface ViewExpenseModalProps {
    currentId: string;
    handleClose: () => void;
}

const ViewExpenseModal = ({ currentId, handleClose }: ViewExpenseModalProps) => {
    return (
        <Modal show={currentId?.length > 0} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap={2}>
                        <div>Вид затрат - Заглушка</div>
                        <Button variant="outline-danger">Удалить всё</Button>
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={3}>
                    <Stack direction="horizontal" gap={2}>
                        <div className="me-auto fs-4">Затрата</div>
                        <div className="fs-5">{formatToRoubles.format(300)}</div>
                        <Button size="sm" variant="outline-danger">
                            &times;
                        </Button>
                    </Stack>
                </Stack>
            </Modal.Body>
        </Modal>
    );
};

export default ViewExpenseModal;
