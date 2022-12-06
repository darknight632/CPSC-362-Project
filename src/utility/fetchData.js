export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '6106664ae2mshcae8d28bdb008cfp1302f3jsn2cb8fe78e860',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const DB = {
  method: 'GET',
  url: 'us-cdbr-east-06.cleardb.net',
  headers: {
    'DB-User': 'b7282e7db1ca80',
    'DB-Pass': 'b48f6bbf'
  }
};
export const fetchData = async (url,options) => {
    const res = await fetch(url,options);
    const data = await res.json();

    return data;
};