import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };

    const handleDecrement = (id) => {
        const newCounters = counters.map((c) => {
            let cc = c;
            if (c.id === id) {
                cc.value = cc.value - 1;
            }
            return cc;
        });
        setCounters(newCounters);
    };

    const handleIncrement = (id) => {
        const newCounters = counters.map((c) => {
            let cc = c;
            if (c.id === id) {
                cc.value = cc.value + 1;
            }
            return cc;
        });
        setCounters(newCounters);
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={() => handleIncrement(count.id)}
                    onDecrement={() => handleDecrement(count.id)}
                    {...count}
                />
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
                Сброс
            </button>
        </>
    );
};
export default CountersList;
