export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5909038cffmshb5b68ad5959bc6fp18adcdjsn9fb5b0681c4d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5909038cffmshb5b68ad5959bc6fp18adcdjsn9fb5b0681c4d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


  
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
