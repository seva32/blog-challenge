import React from "react";
import { Text } from "../";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="w-full h-16 bg-lightgray flex justify-center items-center">
      <Text size="sm">Landkit. © all rights reserved 2022</Text>
    </div>
  );
}

export { Footer };
