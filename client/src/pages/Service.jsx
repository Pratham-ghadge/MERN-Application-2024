import React from 'react';
import { useAuth } from '../store/Auth';
import { motion } from 'framer-motion';

// Import the images
import img1 from '../assets/service-image-1.jpg';
import img2 from '../assets/service-image-2.jpg';
import img3 from '../assets/service-image-3.jpg';
import img4 from '../assets/service-image-4.jpg';
import img5 from '../assets/service-image-5.jpg';
import img6 from '../assets/service-image-6.jpg';

const Service = () => {
    const { service } = useAuth();

    if (!service) {
        return <div>Loading services...</div>;
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div className="container max-w-[1240px] mx-auto px-4 md:px-12 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.map((curElem, index) => {
                    const { price, provider, description, service } = curElem;
                    return (
                        <motion.div
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <a href="#">
                                <img
                                    alt="Service"
                                    className="block h-64 w-full object-cover"
                                    src={images[index % images.length]}
                                />
                            </a>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{service}</h3>
                                <p className="text-gray-600 mb-4">{description}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-500 font-medium">{price}</p>
                                    <a
                                        href="#"
                                        className="text-violet-500 hover:text-violet-700 transition-colors duration-300"
                                    >
                                        {provider}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Service;