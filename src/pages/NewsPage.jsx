import NewsList from "components/NewsCard/NewsList/NewsList";
import Pagination from "components/Pagination/Pagination";
import Search from "components/Search/Search";
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchAllNews } from "redux/news/newsOperation";
import { selectAllNewsTotalPages } from "redux/news/newsSelectors";



  const NewsPage = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(6)
  const totalNewsPages = useSelector(selectAllNewsTotalPages )
  const [searchParams, setSearchParams] = useSearchParams({page:1});
  const productName = searchParams.get('searchQuery') ?? null;
  const numberOfPage =  searchParams.get('page') ?? null


  useEffect(() => { dispatch(fetchAllNews({searchQuery: productName, page:numberOfPage, limit}))
  }, [dispatch, productName, numberOfPage, limit])
  
  return (
    <>
    <Search searchParams={searchParams} setSearchParams={setSearchParams} titleSearch={'News'}  />
    <NewsList/> 
    <Pagination totalNewsPages={totalNewsPages} setSearchParams={setSearchParams} />
    </>
    

  );
};
export default NewsPage;

