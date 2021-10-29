import { TaskNumber } from "./TaskNumber";

export const Task3 = () => {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  return (
    <div>
      <TaskNumber number="3" />
      {element}
    </div>
  );
};
