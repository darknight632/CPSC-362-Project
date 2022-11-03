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


export const fetchData = async (url,options) => {
    const res = await fetch(url,options);
    const data = await res.json();

    return data;
};