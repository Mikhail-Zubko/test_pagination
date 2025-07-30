export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
}

fetchArticles() {
  // console.log('До запроса: ',this);
  const options = {
  headers: {
    Authorization: '4330ebfabc654a6992c2aa792f3173a3'
  },
};
const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

return fetch(url, options)
  .then(r => r.json())
  .then(data => {
    console.log(data);
    this.incrementPage();
      // console.log('После запроса если все ок: ',this);
    return data.articles;
  });
}

incrementPage() {
  this.page += 1;
}

resetPage() {
  this.page = 1;
}

get query() {
  return this.searchQuery;
}

set query(newQuery) {
  this.searchQuery = newQuery;
  }
}


// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
// const BASE_URL = 'https://newsapi.org/v2';
// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchArticles() {
//     const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

//     return fetch(url, options)
//       .then(response => response.json())
//       .then(({ articles }) => {
//         this.incrementPage();
//         return articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
