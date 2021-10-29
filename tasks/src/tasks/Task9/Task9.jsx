import { TaskNumber } from "../TaskNumber";
import { NameForm } from "./NameForm";
import { EssayForm } from "./EssayForm";
import { FlavorForm } from "./FlavorForm";
import { Reservation } from "./Reservation";

export const Task9 = () => {
  return (
    <div>
      <TaskNumber number="9" />
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <Reservation />
    </div>
  );
};
