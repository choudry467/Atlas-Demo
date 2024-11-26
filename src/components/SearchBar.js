import "./SearchBar.css";

function SearchBar(props) {
  const { data, setFilteredData } = props;

  const handleChange = (e) => {
    setFilteredData(
      data.filter(
        (doc) =>
          doc.data.headline
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          doc.data.text.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <input
      className="searchBar"
      type="text"
      placeholder="Search here"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
