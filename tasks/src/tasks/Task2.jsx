import { TaskNumber } from "./TaskNumber";

export const Task2 = () => {
  //   const name = "Иван-Царевич";
  //   const element = <h1>Здравствуй, {name}!</h1>;

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Harper",
    lastName: "Perez",
  };

  const element = <div>{getGreeting(user)}</div>;

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  return (
    <div>
      <TaskNumber number="2" />
      {element}
    </div>
  );
};

// export default Task2;
