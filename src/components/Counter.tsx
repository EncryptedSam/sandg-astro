import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button
            onClick={() => setCount(count + 1)}
            className="rounded bg-black px-5 py-3 text-white"
        >
            Count: {count}
        </button>
    );
}