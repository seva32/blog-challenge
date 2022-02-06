import React, { createContext, useContext, useState, ReactNode } from "react";

export type Blog = {
  title: string;
  description: string;
  imgSrc: string;
};

export type BlogListState = {
  blogList: Blog[];
  setBlogList: (bloglist: Blog[]) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
};

export const BlogListContext = createContext<BlogListState>({
  blogList: [],
  setBlogList: () => {},
  searchString: "",
  setSearchString: () => {},
});

export type BlogListProviderProps = {
  children: ReactNode;
};

export const blogListInitialState = [
  { title: "One", description: "My desc", imgSrc: "https://" },
];

export function BlogListProvider(params: BlogListProviderProps) {
  const { children } = params;
  const [blogList, setBlogList] = useState<Blog[]>(blogListInitialState);
  const [searchString, setSearchString] = useState<string>("");

  return (
    <BlogListContext.Provider
      value={{ blogList, setBlogList, searchString, setSearchString }}
    >
      {children}
    </BlogListContext.Provider>
  );
}

export const useBlogListContext = () => {
  return useContext(BlogListContext);
};
