export const getRandomId = () => {
    return Math.random().toString(32).slice(2);
};

export const formatToRoubles = Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    minimumIntegerDigits: 0,
});
