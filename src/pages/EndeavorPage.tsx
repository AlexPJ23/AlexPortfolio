import React, { useState, useEffect } from 'react';
import { EndeavorModel  } from '../types/EndeavorModel';
import EndeavorCard from '../components/EndeavorCard';
import SpinIt from '../components/Spinner';



const EndeavorPage: React.FC = () => {

  const [endeavors, setEndeavors] = useState<EndeavorModel[]>([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);
  const [ spinner , setSpinner ] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/endeavors?page=${currentPage}&perPage=3`);
        const data = await response.json();
        setEndeavors(data);
        console.log('Endeavors:', data);
      } catch (error) {
        console.error('Fetch data error:', error);
      } finally {
        setSpinner(false);
      }
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const response = await fetch('/api/endeavors/count');
        const data = await response.json();
        setTotalPages(Math.ceil(data.total / 3));
        console.log('Total pages:', data.total);
      } catch (error) {
        console.error('Fetch total pages error:', error);
      }
    };
    fetchTotalPages();
  }, []);

  const createPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button key={i} onClick={() => setCurrentPage(i)} className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          {i}
        </button>
      );
    }
    return pagination;
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-8'>Endeavors</h1>
      {
        spinner ? <SpinIt  /> : (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {endeavors.map((endeavor, index) => (
              <EndeavorCard key={index} endeavor={endeavor} />
            ))}
          </div>
          <div className='flex justify-center mt-8'>
            {createPagination()}
          </div>
          </>
        )
      }
    </div>
  );
};

export default EndeavorPage;
