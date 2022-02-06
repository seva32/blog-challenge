import React, { useState, useEffect } from "react";
import { Layout, SearchBar, Text, Card, Pagination } from "../components";
import { BlogProps, useBlogListContext } from "../context";

function Home() {
  const { searchString, blogList } = useBlogListContext();
  const [currentPage, setCurrentPage] = useState();
  const [currentBlogs, setCurrentBlogs] = useState<BlogProps[]>();
  const [totalPages, setTotalPages] = useState();
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    console.log(blogList.length);
    if (totalItems !== blogList.length) setTotalItems(blogList.length);
  }, [blogList]);

  function onPageChanged(data: any) {
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentBlogs = blogList.slice(offset, offset + pageLimit);

    setCurrentPage(currentPage);
    setCurrentBlogs(currentBlogs);
    setTotalPages(totalPages);
  }

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
        {currentBlogs &&
          currentBlogs.length > 0 &&
          currentBlogs.map((blog, idx) => <Card key={blog.id} blog={blog} />)}
      </div>
      {totalItems > 0 && (
        <div className="my-16">
          <Pagination
            totalItems={totalItems}
            pageLimit={6}
            pageNeighbours={1}
            onPageChanged={onPageChanged}
          />
        </div>
      )}
    </Layout>
  );
}

export { Home };
