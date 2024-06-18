import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { endeavor_model, endeavors } from '../routes/EndeavorRouteStatic';


const SinglePageEndeavor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [endeavor, setEndeavor] = useState<endeavor_model | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEndeavor = () => {
      const foundEndeavor = endeavors.find((endeavor) => endeavor._id.$oid === id);
      if (foundEndeavor) {
        // @ts-ignore
        setEndeavor(foundEndeavor);
      } else {
        setEndeavor(null);
        setError('Endeavor not found');
        console.log(error)
      }
    };
    fetchEndeavor();
  }, [id]);



  const priorityColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500'];
  const priorityColor = endeavor ? priorityColors[endeavor.priority - 1] : '';
  const priorityMapping = 
  { 1: ' Very High', 2: ' High', 3: ' Medium', 4: ' Low', 5: ' Very Low' }

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-4xl font-bold text-center my-8'>{endeavor?.title}</h1>
      {endeavor && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-4'>Description</h2>
            <p className='text-gray-700'>{endeavor.description}</p>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-4'>Details</h2>
            <p className='text-gray-700'>Status: <span className='font-semibold'>{endeavor.status[0].toUpperCase() + endeavor.status.slice(1) }</span></p>
            <p className='text-gray-700'>Start Date: <span className='font-semibold'>{endeavor.created_at.date}</span></p>
            <p className='text-gray-700'>Priority: <span className={`font-semibold ${priorityColor} text-white px-2 py-1 rounded`}>{priorityMapping[endeavor.priority]}</span></p>
            <p className='text-gray-700'>Type: <span className='font-semibold'>{endeavor.type[0].toUpperCase() + endeavor.type.slice(1)}</span></p>
          </div>
          <div className='bg-gray-100 p-6 rounded-lg shadow-md col-span-1 md:col-span-2'>
            <h2 className='text-2xl font-bold mb-4'>Tasks</h2>
            <ul className='list-disc pl-5 text-gray-700'>
              {endeavor.tasks.map((task, index) => (
                <li key={index} className='mb-2'>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <Link to='/endeavors' className='block text-center bg-gray-700 text-white py-2 px-4 rounded-xl mt-8'>Back to List</Link>
    </div>
  );
}

export default SinglePageEndeavor;
