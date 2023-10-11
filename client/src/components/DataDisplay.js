import React, { useEffect, useState } from "react";
import axios from "axios";
import DataCard from "./DataCard";
import Pagination from "./Pagination";

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [openItem, setOpenItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleDetails = (itemId) => {
    setOpenItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  const isDetailsVisible = (itemId) => itemId === openItem;

  // Calculate the index range for the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-2">Data Display</h1>
      <ul>
        {data.slice(indexOfFirstItem, indexOfLastItem).map((item) => (
          <DataCard
            key={item.id}
            item={item}
            detailsVisible={isDetailsVisible(item.id)}
            toggleDetails={() => toggleDetails(item.id)}
          />
        ))}
      </ul>
      <Pagination
        data={data}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default DataDisplay;
