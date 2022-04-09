import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => {
  return <div>hello {name}, how do you do</div>;
};

export default SayHello;
