import { Card, Stack, ProgressBar, Button } from "react-bootstrap";

import { formatToRoubles } from "../utils/utils";

interface BudgetCardProps {
    name: string;
    amount: number;
    max?: number;
    onAddExpenseClick?: () => void;
    onViewExpenseClick?: () => void;
    hideButtons?: boolean;
}

const BudgetCard = ({ name, amount, max, onAddExpenseClick, onViewExpenseClick, hideButtons }: BudgetCardProps) => {
    const getCardBGColor = (amount: number, max: number = 0) => {
        const [danger, light, opacity] = ["bg-danger", "bg-light", "bg-opacity-10"];
        return max && amount > max ? `${danger} ${opacity}` : light;
    };

    const getPBVariant = (amount: number, max: number) => {
        const ratio = amount / max;
        if (ratio < 0.5) return "primary";
        if (ratio < 0.75) return "warning";
        return "danger";
    };

    return (
        <Card className={getCardBGColor(amount, max)}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-berween align-items-baseline fw-normal mb-3">
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline ms-auto">
                        {formatToRoubles.format(amount)}
                        {max && `/ `}{" "}
                        {max && <span className="text-muted fs-6 ms-1">{formatToRoubles.format(max)}</span>}
                    </div>
                </Card.Title>
                {max && (
                    <ProgressBar
                        className="rounded-pill"
                        variant={getPBVariant(amount, max)}
                        min={0}
                        max={max}
                        now={amount}
                    ></ProgressBar>
                )}
                {!hideButtons && (
                    <Stack direction="horizontal" gap={2} className="mt-4">
                        <Button variant="outline-primary" className="ms-auto" onClick={onAddExpenseClick}>
                            Потратить
                        </Button>
                        <Button variant="outline-secondary" onClick={onViewExpenseClick}>
                            Подробнее
                        </Button>
                    </Stack>
                )}
            </Card.Body>
        </Card>
    );
};

export default BudgetCard;
