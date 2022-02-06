import React from "react";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { Button, Text } from "../";

type Props = {};

export function Header({}: Props) {
  return (
    <div className="md:flex h-20 items-center">
      <div className="md:w-1/2">
        <Logo />
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <Button
            onClick={() => alert("Fuck")}
            variant="naked"
            className="mr-12"
          >
            <Text type="tab">Articles</Text>
          </Button>
          <Button onClick={() => alert("Fuck")} variant="naked" selected>
            <Text type="tab">Favorites</Text>
          </Button>
        </div>
        <div>
          <Button onClick={() => alert("Fuck")} variant="naked">
            <Text type="tab">Login</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
