import "./App.css";
import GoalsList from "./components/GoalsList";
import AddGoal from "./components/AddGoal";
import { useState } from "react";

const App = () => {
  const [List, setList] = useState([
    { id: "task0", text: "Finish the course" },
    { id: "task1", text: "Cover all main topics of the couorse" },
    { id: "task2", text: "Help others Q&A section" },
  ]);

  const addNewGoal = (goal) => {
    setList((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <AddGoal addNewGoal={addNewGoal} />
      <GoalsList List={List} />
    </div>
  );
};

export default App;
