const config = require('./.contentful.json')

module.exports = {
  loading: false,
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
    users: [
      { id: 1, name: "Kobe Bryant", number: 24 },
      { id: 2, name: "Michael Jordan", number: 23 },
      { id: 3, name: "Stephen Curry", number: 30 },
      { id: 4, name: "Lebron James", number: 23 },
      { id: 5, name: "Kevin Durant", number: 35 },
      { id: 6, name: "Kyrie Irving", number: 2 }
    ]
  },
  generate: {
    routes: ["/1", "/2", "/3", "/4", "/5", "/6"]
  },
  build: {
    vendor: ['vue-markdown']
  }
};
