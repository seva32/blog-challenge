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
    setTotalItems(blogList.length);
  }, [blogList]);

  function onPageChanged(data: any) {
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentBlogs = blogList.slice(offset, offset + pageLimit);

    // axios
    //   .get(`/api/blogs?page=${currentPage}&limit=${pageLimit}`)
    //   .then((response: any) => {
    //     const currentBlogs = response.data.countries;
    //     setCurrentPage(currentPage);
    //     setCurrentBlogs(currentBlogs);
    //     setTotalPages(totalPages);
    //   });
    setCurrentPage(currentPage);
    setCurrentBlogs(currentBlogs);
    setTotalPages(totalPages);
  }

  console.log(totalItems);
  return (
    <Layout>
      <div className="py-14">
        <SearchBar />
      </div>
      {searchString && totalItems > 0 && (
        <Text size="sm">
          Blogs found for: <strong className="italic">{searchString}</strong>
        </Text>
      )}
      {currentBlogs && totalItems > 0 && currentBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-9 md:gap-11 px-20% sm:px-0">
          {currentBlogs.map((blog, idx) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="flex w-full">
          <div className="min-w-50">No results available</div>
          <div className="w-1/2">
            <img
              src="https://s3-alpha-sig.figma.com/img/2677/f6df/3e802adde5ea9a4d0e59bf94ccd93e02?Expires=1644796800&Signature=CbrHije6-9hM0cXGLgWTOaengLvBDX5OeKY0y-r3RmhzUHnBN4dr06ftfVYZlLQB2g1icaGhcyQieLBvD-r6QgYqS0Hnw9bNw5CqyqGZArRdo1kyD-MqfHLZKa4ufhCGRApJFgV1viTGUyMATkIm15UVL55PfkuMcdRu6raZHt5AIdf0NZqX0Wcq27HyUFyFGYS3gHADUt1~qnkBEOzsYmxv86G-63OM3~uLN2iWPZirRAcadtE4FChaMOQtn3c8bOlGymN8dpy5TAX-0yyBn2~6UoaG8moHCFPkyPu9TT5R7mLCaGlOFQH2GTLnUfs~X-rhcUT38Kpy3rghG9RDOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              className="max-w-full"
            />
          </div>
        </div>
      )}
      <div className="my-16">
        <Pagination
          totalItems={totalItems}
          pageLimit={6}
          pageNeighbours={1}
          onPageChanged={onPageChanged}
        />
      </div>
    </Layout>
  );
}

export { Home };
