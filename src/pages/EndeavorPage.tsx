import React, { useState, useEffect } from 'react';

import EndeavorCard from '../components/EndeavorCard';
import SpinIt from '../components/Spinner';
import { endeavors, endeavors_count, endeavor_model } from '../routes/EndeavorRouteStatic';



const EndeavorPage: React.FC = () => {
  const totalPages = Math.ceil(endeavors_count / 3);
  const [endeavor, setEndeavors] = useState<endeavor_model[]>([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ spinner , setSpinner ] = useState(true);

  useEffect(() => {
    const fetchEndeavors = () => {
      const startIndex = (currentPage - 1) * 3;
      const endIndex = startIndex + 3;
      setEndeavors(
        // @ts-ignore
        endeavors.slice(startIndex, endIndex)
      );
      setSpinner(false);
    }
    fetchEndeavors();
  }, [currentPage])


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
            {endeavor.map((endeavor, index) => (
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
