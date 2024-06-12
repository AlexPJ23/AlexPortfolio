import Card from 'react-bootstrap/Card';
import { EndeavorModel } from '../types/EndeavorModel';
import { Link } from 'react-router-dom';

interface EndeavorCardProps {
    endeavor: EndeavorModel;
}




const EndeavorCard = ({ endeavor  } : EndeavorCardProps ) => {
    let description = endeavor.description;

    // @ts-ignore
    const endpoint = endeavor._id;
    let date = new Date(endeavor.created_at);
    endeavor.created_at = date.toDateString();
    const Mapping  = {
        1: 'Very High',
        2: 'High',
        3: 'Medium',
        4: 'Low',
        5: 'Very Low'
    }


    return (
        <Card className='bg-white rounded-xl shadow-md border-8 border-blue-500 p-8 relative'>
            <Card body>
                <Card.Title className='text-xl text-center font-bold'>{endeavor.title}</Card.Title>
                <Card.Text className='text-gray-600 my-2'>Type: {endeavor.type[0].toUpperCase() + endeavor.type.slice(1)}</Card.Text>
                <Card.Text className='text-gray-600 my-2'>Status: {endeavor.status[0].toUpperCase() + endeavor.status.slice(1)}</Card.Text>
                <Card.Text className='mb-5'>{description}</Card.Text>
                <div className='flex justify-between items-center'>
                    <span className='text-indigo-500'>Priority: {Mapping[endeavor.priority]} </span>
                    <span className='border border-gray-100'></span>
                    <span className='text-orange-700'>Created On: {endeavor.created_at}</span>
                </div>
            </Card>
            < Link to={`/endeavors/${endpoint}`} className='absolute bottom-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-xl rounded-tr-xl'>View</Link>
        </Card>
    );
}


export default EndeavorCard;
