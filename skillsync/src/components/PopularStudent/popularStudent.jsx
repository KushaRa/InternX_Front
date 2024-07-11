import React, { useEffect, useState } from "react";
import axios from "axios";
import "./popularStudent.css";
import { StudentCard } from "../Student Card/studentCard";

export const PopularStudent = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/display-add');
        setDataProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Popular">
      {dataProduct.map((item, i) => (
        <StudentCard
          key={i}
          id={item._id}
          company_name={item.company_name}
          title={item.title}
          duration={item.duration}
          job_type={item.job_type}
          location={item.location}
          email={item.email}
          description={item.description}
        />
      ))}
    </div>
  );
};
