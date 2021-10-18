import { TaskNumber } from "../TaskNumber";
import { WelcomeDialog } from "./WelcomeDialog";
import { SignUpDialog } from "./SignUpDialog";

export const Task11 = () => {
  return (
    <div>
      <TaskNumber number="11" />
      <WelcomeDialog />
      <SignUpDialog />
    </div>
  );
};
