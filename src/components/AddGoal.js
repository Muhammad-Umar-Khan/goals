import { useState } from "react";
import "./AddGoal.css";
const AddGoal = ({ addNewGoal }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal) {
      const newGoal = {
        id: `cg${Math.floor(Math.random() * 10).toString()}`,
        text: goal,
      };
      addNewGoal(newGoal);
    }
    setGoal("");
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        placeholder="New goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      ></input>
      <button className="Add">Add</button>
    </form>
  );
};

export default AddGoal;
