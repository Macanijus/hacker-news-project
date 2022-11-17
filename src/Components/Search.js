import { useEffect, useState } from "react";
import News from "./News";
import { SpinnerCircular } from "spinners-react";
import ReactPaginate from "react-paginate";

export default function Search({ searchWord, articlesPerPage }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalPages, setTotalPages] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  const url = `http://hn.algolia.com/api/v1/search?query=${searchWord}&tags=story`;

  function fetchData() {
    const endOffset = itemOffset + articlesPerPage;
    setTimeout(() => {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setArticles(data.hits.slice(itemOffset, endOffset));
          setTotalPages(Math.ceil(data.hits.length / articlesPerPage));
          setLoading(false);
          console.log(data.hits);
        })
        .catch((e) => console.log(e));
    }, 1500);
  }

  useEffect(() => {
    fetchData();
  }, [searchWord, itemOffset, articlesPerPage, pageNumber]);

  const handleChange = (page) => {
    console.log("handle change fired");
    const newOffset = page.selected * articlesPerPage;
    setPageNumber(page.selected);
    console.log(
      `User requested page number ${page.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log("PAGE NUMBER:", pageNumber);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <SpinnerCircular />
        </div>
      ) : (
        <div>
          <News articles={articles} setArticles={setArticles} />
          <ReactPaginate
            nextLabel="Next >"
            previousLabel="< Previous"
            breakLabel="..."
            onPageChange={handleChange}
            pageCount={totalPages}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            previousLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            forcePage={pageNumber}
          />
        </div>
      )}
    </div>
  );
}
