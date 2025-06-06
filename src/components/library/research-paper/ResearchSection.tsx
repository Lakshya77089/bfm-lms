'use client';
import React from 'react';

const researchItems = [
  {
    type: 'Book',
    title: 'Introduction to Web3',
    author: 'Alex Network',
    publisher: 'Blockchain Publishing',
    date: 'Jan 2024',
    rating: 4.5,
    image: '/books/web3-intro.jpg',
  },
  {
    type: 'Research Paper',
    title: 'DeFi Protocols Analysis',
    author: 'Emma Chin',
    publisher: 'Crypto Research',
    date: 'Feb 2024',
    rating: 4.2,
    image: '/books/defi-protocols.jpg',
  },
  {
    type: 'Book',
    title: 'NFT Marketplaces Guide',
    author: 'James Treon',
    publisher: 'Web3 Assets',
    date: 'Dec 2023',
    rating: 4.3,
    image: '/books/nft-guide.jpg',
  },
  {
    type: 'Research Paper',
    title: 'Smart Contract Security',
    author: 'Lisa Protocol',
    publisher: 'Security Research Lab',
    date: 'Oct 2023',
    rating: 4.7,
    image: '/books/smart-security.jpg',
  },
  {
    type: 'Book',
    title: 'DAO Governance',
    author: 'Mark Chain',
    publisher: 'Web3 Governance Institute',
    date: 'Sep 2023',
    rating: 4.6,
    image: '/books/dao-governance.jpg',
  },
  {
    type: 'Research Paper',
    title: 'Web3 Identity Systems',
    author: 'Rachel Network',
    publisher: 'Web3 Research Center',
    date: 'Aug 2023',
    rating: 4.4,
    image: '/books/web3-identity.jpg',
  },
];

const ResearchSection = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Research Papers & Books</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {researchItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between">
                  <div className="text-xs font-medium text-blue-600 mb-1">
                    {item.type}
                  </div>
                  <span className="text-yellow-500 font-semibold text-sm">
                    ★ {item.rating}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-1">By {item.author}</p>
                <p className="text-sm text-gray-600">{item.publisher}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
