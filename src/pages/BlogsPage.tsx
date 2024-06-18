import React from "react";

const BlogsPage : React.FC = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'>Blog</h1>
            <div className='grid grid-cols-2 md:grid-cols-2 md:grid-cols-3 gap-4 pl-4'>
                <div className='bg-gray-200 p-4 rounded-lg'>
                    <h2 className='text-2xl font-semibold'>Blog Title</h2>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper elit. Nullam nec semper elit.</p>
                </div>
                <div className='bg-gray-200 p-4 rounded-lg'>
                    <h2 className='text-2xl font-semibold'>Blog Title</h2>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper elit. Nullam nec semper elit.</p>
                </div>
                <div className='bg-gray-200 p-4 rounded-lg'>
                    <h2 className='text-2xl font-semibold'>Blog Title</h2>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper elit. Nullam nec semper elit.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogsPage;