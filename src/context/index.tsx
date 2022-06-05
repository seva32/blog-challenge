import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type BlogProps = {
  title: string;
  body: string;
  imageUrl: string;
  id: number;
  price: number;
  userId: number;
  date: string;
};

export type BlogListState = {
  blogList: BlogProps[];
  setBlogList: (bloglist: BlogProps[]) => void;
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

export const blogListInitialState = [];

export function BlogListProvider(params: BlogListProviderProps) {
  const { children } = params;
  const [blogList, setBlogList] = useState<BlogProps[]>(blogListInitialState);
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3004/blogs")
      .then((response) => response.json())
      .then((json) => setBlogList(json));
  }, []);

  useEffect(() => {
    if (searchString) {
      const updateList = fetch("http://localhost:3004/blogs")
        .then((response) => response.json())
        .then((json) => {
          const updateList = json.filter((blog: any) =>
            blog.title.toLowerCase().includes(searchString.toLowerCase())
          );
          setBlogList(updateList);
        });
    } else {
      fetch("http://localhost:3004/blogs")
        .then((response) => response.json())
        .then((json) => setBlogList(json));
    }
  }, [searchString]);

  return (
    <BlogListContext.Provider
      value={{
        blogList,
        setBlogList,
        searchString,
        setSearchString,
      }}
    >
      {children}
    </BlogListContext.Provider>
  );
}

export const useBlogListContext = () => {
  return useContext(BlogListContext);
};
