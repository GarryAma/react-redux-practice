import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";

export const CounterPage = () => {
  const [countInput, setCountInput] = useState(0);

  const counterSelector = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const clickIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const clickDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const setInput = () => {
    dispatch({
      type: "SET_INPUT",
      payload: countInput,
    });
  };

  return (
    <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8 flex flex-col justify-center items-center gap-4">
      <p className="text-5xl font-bold">Count:{counterSelector.count}</p>

      <div className="flex items-center gap-4">
        <Button onClick={clickDecrement} size="icon">
          <Minus className="h-4 w-4" />
        </Button>
        <Button onClick={clickIncrement} size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex gap-2 mt-8">
        <Input type="number" onChange={(e) => setCountInput(e.target.value)} />
        <Button onClick={setInput}>Submit</Button>
      </div>
    </main>
  );
};
