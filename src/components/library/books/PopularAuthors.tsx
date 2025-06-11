"use client";
const PopularAuthors = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 ml-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Popular Authors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Vitalik Buterin",
              expertise: "Blockchain Technology",
              pubs: 12,
              image: "/authors/vitalik.jpg", // ideally replace with actual image of Vitalik
            },
            {
              name: "Stani Kulechov",
              expertise: "DeFi & Smart Contracts",
              pubs: 8,
              image: "/authors/stani.jpg", // Aave founder
            },
            {
              name: "Yam Karkai",
              expertise: "NFTs & Women-Led Projects",
              pubs: 9,
              image: "/authors/yam.jpg", // Co-founder and artist of World of Women (WoW) NFT collection
            },
            {
              name: "Gavin Wood",
              expertise: "Web3 Infrastructure",
              pubs: 10,
              image: "/authors/gavin.jpg", // Co-founder of Ethereum and founder of Polkadot
            },
          ].map((author, i) => (
            <div
              key={i}
              className="bg-white min-h-[160px] border rounded-lg flex flex-col justify-between shadow-sm p-4"
            >
              <div className="flex justify-between gap-3 mb-2">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-15 h-15 ml-2 rounded-full object-cover"
                />
                <div className="min-w-0 ">
                  <h4 className="font-semibold text-base truncate">
                    {author.name}
                  </h4>
                  <p className="text-sm text-gray-600">{author.expertise}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 whitespace-nowrap">
                  {author.pubs} Publications
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline ml-3 text-sm font-medium whitespace-nowrap"
                >
                  View Profile →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularAuthors;
