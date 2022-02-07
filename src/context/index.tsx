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
  totalItems: number;
};

export const BlogListContext = createContext<BlogListState>({
  blogList: [],
  setBlogList: () => {},
  searchString: "",
  setSearchString: () => {},
  totalItems: 0,
});

export type BlogListProviderProps = {
  children: ReactNode;
};

export const blogListInitialState = [];

export function BlogListProvider(params: BlogListProviderProps) {
  const { children } = params;
  const [blogList, setBlogList] = useState<BlogProps[]>(blogListInitialState);
  const [searchString, setSearchString] = useState<string>("");
  const [totalItems, setTotalItems] = useState<number>(0);

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

  useEffect(() => {
    setTotalItems(blogList.length);
  }, [blogList]);

  return (
    <BlogListContext.Provider
      value={{
        blogList,
        setBlogList,
        searchString,
        setSearchString,
        totalItems,
      }}
    >
      {children}
    </BlogListContext.Provider>
  );
}

export const useBlogListContext = () => {
  return useContext(BlogListContext);
};
