import React, { useState } from "react";
import { Layout, SearchBar, Text, Card } from "../components";
import { useBlogListContext } from "../context";

type Props = {};

function Home(props: Props) {
  const { searchString } = useBlogListContext();
  return (
    <Layout>
      <div className="py-14">
        <SearchBar />
      </div>
      {searchString && (
        <Text size="sm">
          Blogs found for: <strong className="italic">{searchString}</strong>
        </Text>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-9 md:gap-11 px-20% sm:px-0">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}

export { Home };
