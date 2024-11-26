import "./App.css";
import ArticleView from "./components/ArticleView";
import SearchBar from "./components/SearchBar";
import conf from "./configuration";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Initialize the Firebase database with the provided configuration
    const database = getFirestore(conf);

    // Reference to the specific collection in the database
    const collectionRef = collection(database, "articles");

    getDocs(collectionRef).then((collection) => {
      const parsedData = [];
      // collection is a snapshot that doesn't implement map
      collection.forEach((doc) => {
        const tempData = { id: doc.id, data: doc.data() };
        parsedData.push(tempData);
      });
      console.log(parsedData);
      // Set our local state to collection data for frontend rendering
      setData(parsedData);
      setFilteredData(parsedData);
    });
  }, []);

  return (
    <div className="App">
      <h1>Demo Article App</h1>
      <p>*This app is for demo purposes only!</p>
      <SearchBar data={data} setFilteredData={setFilteredData} />
      <ArticleView filteredData={filteredData} />
    </div>
  );
}

export default App;
