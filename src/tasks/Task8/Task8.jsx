import { TaskNumber } from "../TaskNumber";
import { NumberList } from "./NumberList";
import { Blog } from "./Blog";

const numbers = [1, 2, 3, 4, 5];

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

export const Task8 = (props) => {
  return (
    <div>
      <TaskNumber number="8" />
      <NumberList numbers={numbers} />
      <Blog posts={posts} />
    </div>
  );
};
