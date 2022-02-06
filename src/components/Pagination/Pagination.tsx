import React, { Component } from "react";

type PaginationProps = {
  totalItems: number;
  pageLimit?: number;
  pageNeighbours?: number;
  onPageChanged?: (data: any) => void;
};

type State = {
  currentPage: number;
};

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class Pagination extends Component<PaginationProps, State> {
  pageLimit: number;
  totalItems: number;
  pageNeighbours: number;
  totalPages: number;

  constructor(props: PaginationProps) {
    super(props);
    const { totalItems = null, pageLimit = 30, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
    this.totalItems = typeof totalItems === "number" ? totalItems : 0;

    // pageNeighbours can be: 0, 1 or 2
    this.pageNeighbours =
      typeof pageNeighbours === "number"
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

    this.totalPages = Math.ceil(this.totalItems / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.pageNeighbours;

    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage) as any;

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  componentDidMount() {
    console.log("this ", this.totalItems);
    this.gotoPage(1);
  }

  gotoPage = (page: number) => {
    // @ts-ignore
    const { onPageChanged = (f: any) => f } = this.props;
    const currentPage = Math.max(0, Math.min(page, this.totalPages));
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalItems,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = (page: number) => (evt: any) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = (evt: any) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
  };

  handleMoveRight = (evt: any) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
  };

  render() {
    if (!this.totalItems || this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <div className="w-full flex justify-center h-14 text-darkblue">
        <nav
          aria-label="Pagination"
          className="border-pagination border-2 rounded flex justify-center items-center"
          style={{ maxWidth: "570px", minWidth: "570px" }}
        >
          <ul className="flex">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className="px-2">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <div aria-hidden="true" style={{ lineHeight: "20px" }}>
                        &laquo;
                      </div>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li key={index} className="px-2">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <div aria-hidden="true" style={{ lineHeight: "20px" }}>
                        &raquo;
                      </div>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                );

              return (
                <li
                  key={index}
                  className={`${
                    currentPage === page ? "transform scale-150" : ""
                  } px-2`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={this.handleClick(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export { Pagination };
