import React from 'react';
import { ArrowRight, Users, Target, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

// --- Placeholder Images ---
// IMPORTANT: Create a 'public/images' folder and place your images there.
// Then update these paths accordingly. For example: '/images/factory.jpg'
const storyImages = [
  'https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/img7.jpg',
  'https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/img9.jpeg',
  'https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/img4.jpg',
  'https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/img8.jpeg',
];

const categoryImages = {
  men: 'https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/home_man_model.jpg',
  women: 'https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/home_woman_model.jpg',
  kids: 'https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/home_child_model.jpg',
};

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section (remains the same) */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1637228393246-c38a4b3d2011?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1637228393246-c38a4b3d2011?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl ml-4">
            <h1 className="text-5xl font-bold mb-4">MIB Tex: Weaving a Future of Shared Success</h1>
            <p className="text-xl mb-8">Partner with a ready-made garment manufacturer built on fairness, opportunity, and the belief that everyone deserves a share of the success they create.</p>
            <Link
              to="/catalogue"
              className="group inline-flex items-center bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-[#FDD46B] transition-colors"
            >
              Explore Our Collections
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Collections Section - Simplified (remains the same) */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Wide Range Product</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the range of high-quality ready-made garments we produce.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/catalogue?category=men" className="group block bg-gray-100 rounded-xl shadow hover:bg-[#FDD46B] transition-shadow duration-300 relative overflow-hidden">
            <img src={categoryImages.men} alt="Men's Apparel" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-4">
              <h3 className="text-xl font-semibold mb-1">Men's Apparel</h3>
              <p className="text-gray-600">Quality garments for the modern man.</p>
              <span className="inline-flex items-center text-indigo-600 mt-2 font-medium">View Details <ArrowRight className="ml-1 h-4 w-4" /></span>
            </div>
          </Link>

          <Link to="/catalogue?category=women" className="group block bg-gray-100 rounded-xl shadow hover:bg-[#FDD46B] transition-shadow duration-300 relative overflow-hidden">
            <img src={categoryImages.women} alt="Women's Apparel" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-4">
              <h3 className="text-xl font-semibold mb-1">Women's Apparel</h3>
              <p className="text-gray-600">Elegant and contemporary designs.</p>
              <span className="inline-flex items-center text-indigo-600 mt-2 font-medium">View Details <ArrowRight className="ml-1 h-4 w-4" /></span>
            </div>
          </Link>

          <Link to="/catalogue?category=kids" className="group block bg-gray-100 rounded-xl shadow hover:bg-[#FDD46B] transition-shadow duration-300 relative overflow-hidden">
            <img src={categoryImages.kids} alt="Kids' Apparel" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-4">
              <h3 className="text-xl font-semibold mb-1">Kids' Apparel</h3>
              <p className="text-gray-600">Comfortable and stylish clothing for children.</p>
              <span className="inline-flex items-center text-indigo-600 mt-2 font-medium">View Details <ArrowRight className="ml-1 h-4 w-4" /></span>
            </div>
          </Link>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/catalogue"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            See Full Catalogue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Why Partner With Us Section (remains the same) */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Partner With MIB Tex?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond quality manufacturing, we offer a partnership built on shared values and mutual growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 hover:bg-[#FD976D] transition-transform duration-300">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Empowered Workforce</h3>
              <p className="text-gray-600">
                Our unique model fosters dedication and high-quality work because our team shares in the company's success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 hover:bg-[#FD976D] transition-transform duration-300">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ethical Production</h3>
              <p className="text-gray-600">
                Align your brand with a manufacturer committed to fair labor practices and sustainable growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 hover:bg-[#FD976D] transition-transform duration-300">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliable Partnership</h3>
              <p className="text-gray-600">
                We believe in building long-term relationships with retailers based on trust, transparency, and shared goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section - Updated Layout */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">"Empowering a Future of Fairness and Opportunity"</h2>
          <p className="text-indigo-600 font-semibold text-lg">The Journey of MIB Tex</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image Slider */}
          <div className="w-full h-80 md:h-96">
            <ImageSlider images={storyImages} />
          </div>

          {/* Right Column: Text */}
          <div className="text-gray-700 space-y-6 leading-relaxed text-justify">
            <p>
              At MIB Tex, we envisioned a transformative approach to the textile industry—one that values every individual in the production chain. Our journey began as workers, striving to make a difference in an industry where labor is often undervalued.
            </p>
            <p>
              Driven by the belief that <em className="font-semibold text-indigo-700">everyone deserves a share of the success they create</em>, we established MIB Tex as a company built on fairness, opportunity, and shared prosperity.
            </p>
            <p className="text-lg font-medium text-gray-800">
              Today, MIB Tex stands as a testament to the power of collaboration and ethical practices, offering retailers a chance to partner with a manufacturer that prioritizes quality, integrity, and mutual growth.
            </p>
            <p>
              Join us in redefining the textile industry. Partnering with MIB Tex means more than sourcing garments—it’s about supporting a vision of ethical production and sustainable success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
