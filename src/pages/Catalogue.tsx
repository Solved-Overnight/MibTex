import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { products } from '../data/products';

const Catalogue = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || 
                         (activeFilter === 'new-arrivals' && product.isNewArrival) ||
                         (activeFilter === 'popular' && product.isPopular) ||
                         activeFilter === product.category;
    
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesFilter && matchesSearch && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Product Catalogue</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">{filteredProducts.length} Products</span>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('new-arrivals')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'new-arrivals'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setActiveFilter('popular')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'popular'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Popular
            </button>
            <button
              onClick={() => setActiveFilter('men')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'men'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Men
            </button>
            <button
              onClick={() => setActiveFilter('women')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'women'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Women
            </button>
            <button
              onClick={() => setActiveFilter('kids')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'kids'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Kids
            </button>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col hover:bg-[#FDD46B] transition-colors duration-300">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {product.isNewArrival && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  New Arrival
                </span>
              )}
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 font-bold">${product.price.toFixed(2)}</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
