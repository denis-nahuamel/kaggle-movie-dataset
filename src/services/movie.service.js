import * as Papa from "papaparse";
const movies_file = "./tmdb_5000_movies.csv"
// return only the visible columns 
const parserColumns = (columns) => {
  const show= ["original_title","status", "vote_average"]
  return columns
    .filter((e) => {
      if (show.includes(e))
        return e;
    })
    .map((e) => {
      return { id: e, label: e };
    });
};
export const getMovies = () => {
  return new Promise((resolve, reject) =>{Papa.parse(movies_file, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const rowsArray = [];
      // Iterating data to get column name and their values
      results.data.map((d) => {
        rowsArray.push(Object.keys(d));
      });
      const response = [results.data,parserColumns(rowsArray[0])]
      resolve(response)
     
    },
    error (err) {
      reject(err)
    }
  });
})
}

