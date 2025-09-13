import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../reducer/counterReducer";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 flex items-center space-x-6">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          -
        </button>

        <span className="text-3xl font-bold text-gray-800 w-16 text-center">
          {count}
        </span>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
