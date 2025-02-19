import React from 'react';

const About = () => {
  return (
    <div className="max-w-8/12 mx-auto p-8 bg-gray-50 shadow-xl mt-4">
      <h1 className="text-4xl font-bold text-left text-gray-600 mb-6 py-4 border-b-2 border-gray-300">About Us</h1>
      <h2 className='font-bold text-2xl text-gray-600'>Description</h2>
      <p className="text-lg text-gray-600 text-left mb-8">
        Welcome to Food Hunt, your go-to food delivery service that brings your favorite meals right to your doorstep. 
        Whether you're craving a hot pizza, fresh sushi, or a healthy salad, we deliver it all with speed, convenience, and a smile!
      </p>
      <h2 className='font-bold text-2xl text-gray-600'>Our Services</h2>
      <p className="text-lg text-gray-600 text-left mb-8">
      Our mission is to offer a seamless food ordering experience by connecting you with top-quality restaurants in your area. 
      Whether you're craving a quick snack or a full-course meal, our platform ensures fast and reliable delivery.
      </p>

      <h2 className='font-bold text-2xl text-gray-600'>Our Mission</h2>
      <p className="text-lg text-gray-600 text-left mb-8">
      We strive to bring convenience and variety to your dining experience, making it easier than ever to enjoy your favorite dishes from the comfort of your home.
      </p>

      <div>
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Our Values</h2>
        <ul className="list-none space-y-2 text-lg text-gray-600">
          <li>Customer Satisfaction</li>
          <li>Quality Food</li>
          <li>Fast & Reliable Delivery</li>
          <li>Innovative Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
