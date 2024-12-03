import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/navigation";

const reviewsData = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    post: 'Great Product',
    rating: 4,
    reviewText: 'I absolutely loved this product! It works just as described, and I highly recommend it.',
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Jane Smith',
    post: 'Not Bad',
    rating: 3,
    reviewText: 'The product is okay, but I think it could use some improvements in design.',
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Bob Johnson',
    post: 'Good Value',
    rating: 5,
    reviewText: 'Amazing quality for the price. Exceeded my expectations!',
  },
  {
    id: 4,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Alice Brown',
    post: 'Decent',
    rating: 4,
    reviewText: 'Good product overall. I have no major complaints, but a few features could be improved.',
  },
  {
    id: 5,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Alice Brown',
    post: 'Decent',
    rating: 4,
    reviewText: 'Good product overall. I have no major complaints, but a few features could be improved.',
  },
  {
    id: 6,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Alice Brown',
    post: 'Decent',
    rating: 4,
    reviewText: 'Good product overall. I have no major complaints, but a few features could be improved.',
  },
];

const Review = () => {
  return (
    <div className=' total-width mx-auto px-5 mt-10'>
      <div className=' py-1 flex justify-between items-center'>
        <h1 className=' text-xl font-semibold text-white'>Reviews</h1>
        <button className="bg-[#11113b] px-7 py-3 max-sm:px-4 max-sm:text-xs rounded-full text-sm text-white font-semibold">
          Read all
        </button>

      </div>
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 gap-5    py-8">
     
     {reviewsData.map((review) => (
        
        <div className="bg-secondary p-4 rounded-xl shadow-lg" key={review.id}>
        <div className="flex items-center justify-between gap-4 mb-4" key={review.id}>
          <div className=' flex items-center gap-2'>
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h3 className="text-base font-semibold text-white">{review.name}</h3>
            <p className="text-xs text-gray-400">{review.post}</p>
          </div>
          </div>
          <div className="flex items-center gap-2">
            <h2 className=' text-white text-xs'>{review.rating}/5</h2>
          {[...Array(1)].map((_, index) => (
            <span key={index}>
              {index < review.rating ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar className="text-yellow-500" />
              )}
            </span>
          ))}
        </div>

        </div>
        
        <p className="text-white text-sm w-[80%]">{review.reviewText}</p>
      </div>
     ))}
 </div>
    </div>
  );
};

export default Review;
