import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/navigation";

const reviewsData = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Ravi Sharma',
    post: 'Bahut accha product',
    rating: 4,
    reviewText: 'Yeh product bahut accha hai. Quality bhi acchi hai aur price bhi theek hai.',
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Priya Patel',
    post: 'Good hai',
    rating: 3,
    reviewText: 'Product best hai,  uska design and quality bahut accha hai.',
  },
  {
    id: 3,
    avatar: 'https://img.freepik.com/free-photo/indian-man-portrait-temple_53876-14535.jpg',
    name: 'Amit Verma',
    post: 'Accha value hai',
    rating: 5,
    reviewText: 'Price ke hisaab se yeh product zabardast hai. Mere expectations se bhi zyada accha hai.',
  },
  {
    id: 4,
    avatar: 'https://media.gettyimages.com/id/1429125771/photo/portrait-of-mature-indian-female-employee-in-office-indian-businesswoman-looking-at-camera.jpg?s=612x612&w=gi&k=20&c=9dkDWiKirlZ5rNTanpZuygOXpaMMrP8sJkCDEqvlvzA=',
    name: 'Neha Singh',
    post: 'packing safe kya hai',
    rating: 4,
    reviewText: 'price ke hisab se prodcut kafi accha hai and working me output sahi hai.',
  },
  {
    id: 5,
    avatar: 'https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=',
    name: 'Sonali Mehta',
    post: 'Quality build achha hai',
    rating: 4,
    reviewText: ' Delivery fast and safe ki hai products valuable  and unique hai. ',
  },
  {
    id: 6,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72wtv4XJ9ulL-xamtFXt6AKWb0cX9ZWlYyQ&s',
    name: 'Simran Kaur',
    post: 'Nice Products',
    rating: 4,
    reviewText: 'Product accha hai overall. Koi bada complaint nahi hai, lekin kuch features ko thoda aur improve kiya jaa sakta tha.',
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
            className="w-12 h-12 rounded-full object-top object-cover"
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
