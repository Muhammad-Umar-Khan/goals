import "./GoalsList.css";

const GoalsList = ({ List }) => {
  return (
    <>
      <ul className="goal-list">
        {List.map((goal) => (
          <li key={goal.id}>{goal.text}</li>
        ))}
      </ul>
    </>
    // <ul className="goal-list">
    //   <li>Finish the course</li>
    //   <li>Cover all main topics of the couorse</li>
    //   <li>Help others Q&amp;A section</li>
    // </ul>
  );
};
export default GoalsList;
