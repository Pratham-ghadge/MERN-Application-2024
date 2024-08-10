import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import service from "../assets/service-image-3.jpg"
import { useAuth } from '../store/Auth';
const About = () => {
  const { user } = useAuth();
 
 


  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg shadow-lg"
            ></motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              src={service}
              alt="About"
              className="relative z-10 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              Welcome to Our Studio {user && user.username}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg mb-8"
            >
              We are a team of passionate designers and developers who create stunning digital experiences. Our mission is to help businesses and individuals achieve their goals through innovative and user-friendly solutions.
            </motion.p>
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center font-medium text-violet-500 hover:text-fuchsia-500 transition-colors duration-300"
            >
              Learn More
              <FaAngleRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
