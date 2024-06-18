import React from "react";

const FeedBackPage : React.FC = () => {
    return (
        <>
            <h1 className='text-3xl font-bold text-center my-8'>Feedback</h1>
            <form className='w-1/2 mx-auto'>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='name' className='text-lg font-semibold'>Name</label>
                    <input type='text' id='name' name='name' className='border-2 border-gray-300 p-2 rounded-lg' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='email' className='text-lg font-semibold'>Email</label>
                    <input type='email' id='email' name='email' className='border-2 border-gray-300 p-2 rounded-lg' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='message' className='text-lg font-semibold'>Message</label>
                    <textarea id='message' name='message' className='border-2 border-gray-300 p-2 rounded-lg' />
                </div>
                <button type='submit' className='bg-gray-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
            </form>
        </>
    )
}

export default FeedBackPage;