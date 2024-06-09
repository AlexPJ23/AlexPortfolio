import React, { useState, useEffect } from 'react';
import { EndeavorModel , TaskModel } from '../types/EndeavorModel';



const EndeavorPage: React.FC = () => {

  const [endeavors, setEndeavors] = useState<EndeavorModel[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/endeavors`);
        const data = await response.json();
        setEndeavors(data);
      } catch (error) {
        console.error('Fetch data error:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <></>
  );
};

export default EndeavorPage;
