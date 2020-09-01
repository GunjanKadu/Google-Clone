import { useState, useEffect } from "react";

export interface googleItem {
  cacheId: string;
  displayLink: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  htmlSnippet: string;
  htmlTitle: string;
  kind: string;
  link: string;
  pagemap: { metatags: Array<any> };
  snippet: string;
  title: string;
}
export interface googleResponse {
  context: {};
  items: Array<googleItem>;
  kind: "string";
  queries: { request: Array<any>; nextPage: Array<any> };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  url: {
    type: string;
    template: string;
  };
}

const searchEngineKey = process.env.REACT_APP_SEARCH_ENGINE_KEY;
const api_key = process.env.REACT_APP_API_KEY;

const UseGoogleSearch = (term: string) => {
  const [data, setData] = useState<googleResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${searchEngineKey}&q=${term}`
      )
        .then((res) => res.json())
        .then((res: googleResponse) => {
          setData(res);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default UseGoogleSearch;
