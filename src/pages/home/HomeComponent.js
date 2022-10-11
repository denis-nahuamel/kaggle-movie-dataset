import { useEffect, useState } from "react";
import Papa from "papaparse";
import { HomePage } from ".";

export const HomeComponent = () => {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    Papa.parse(event, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };
  useEffect(() => {
    changeHandler("./tmdb_5000_movies.csv");
  }, []);
  return <HomePage tableRows={tableRows} values={values}></HomePage>;
};
