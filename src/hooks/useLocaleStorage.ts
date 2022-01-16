import { useState, useEffect } from "react";

export const useLocaleStorage = (key: string, defaultValue: string[] | (() => string[])) => {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) return JSON.parse(jsonValue);

        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
};
