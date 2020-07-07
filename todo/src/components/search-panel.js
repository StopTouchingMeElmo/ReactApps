import React from "react";

const SearchPanel = () => {
  const placeholderText = "Search smthn";
  const inputStyle = { fontSize: "20px" };
  return <input placeholder={placeholderText} style={inputStyle} />;
};

export default SearchPanel;
