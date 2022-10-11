import * as Papa from "papaparse";
export const loadFile = () => {
  return fetch("./tmdb_5000_movies.csv")
    .then((response) => response.text())
    .then((responseText) => {
      let data = Papa.parse(responseText);
      console.log("data", data);
      return data;
    });
};
export const parseFile = () => {
  const file = "./tmdb_5000_movies.csv";
  return fetch(file)
    .then((response) => response.text())
    .then((responseText) => {
      let response = Papa.parse(responseText);
      return response.data;
    });
  // return Papa.parse(file, {
  //   header: true,
  //   complete: results => {
  //     console.log("hello",results)
  //     return results.data;
  //   },
  // });
};
