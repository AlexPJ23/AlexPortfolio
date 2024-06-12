import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { EndeavorModel } from '../types/EndeavorModel';


const SinglePageEndeavor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [endeavor, setEndeavor] = useState<EndeavorModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const EndeavorLoader = async () => {
      try {
        const response = await fetch(`/api/endeavors/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch endeavor');
        }
        const data = await response.json();
        setEndeavor(data);
        // @ts-ignore
      } catch (err) {
        // @ts-ignore
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    EndeavorLoader();
  }, [id]);

  if (loading) {
    return <div className='text-center my-8'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center my-8 text-red-500'>{error}</div>;
  }

  const priorityColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500'];
  const priorityColor = endeavor ? priorityColors[endeavor.priority - 1] : '';

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
            <p className='text-gray-700'>Status: <span className='font-semibold'>{endeavor.status}</span></p>
            <p className='text-gray-700'>Start Date: <span className='font-semibold'>{endeavor.created_at}</span></p>
            <p className='text-gray-700'>End Date: <span className='font-semibold'>{endeavor.update_at}</span></p>
            <p className='text-gray-700'>Priority: <span className={`font-semibold ${priorityColor} text-white px-2 py-1 rounded`}>{endeavor.priority}</span></p>
            <p className='text-gray-700'>Type: <span className='font-semibold'>{endeavor.type}</span></p>
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
      <Link to='/endeavors' className='block text-center bg-blue-500 text-white py-2 px-4 rounded-xl mt-8'>Back to List</Link>
    </div>
  );
}

export default SinglePageEndeavor;


