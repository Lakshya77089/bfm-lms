// app/components/SectionFive.tsx

const SectionFive = () => {
  return (
    <section className="flex bg-white flex-col items-center gap-10 py-20 px-4">
      {/* Card 1 */}
      <div
        className="w-full max-w-6xl rounded-xl bg-cover bg-center text-white py-20 px-10 text-center"
        style={{ backgroundImage: "url('/background-1.png')" }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          One-Year Access to Global <br className="hidden sm:inline" /> BFM Side Events
        </h2>
        <p className="max-w-md mx-auto text-sm sm:text-base mb-6">
          Join a vibrant community at in-person meetups, panels, and BFM-curated side events around the world.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-md font-medium">
          Join Our Community
        </button>
      </div>

      {/* Card 2 */}
      <div
        className="w-full max-w-6xl rounded-xl bg-cover bg-center text-white py-20 px-10 text-center"
        style={{ backgroundImage: "url('/background-2.png')" }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Pitch Your Startup to <br className="hidden sm:inline" /> VCs & Web3 Experts
        </h2>
        <p className="max-w-md mx-auto text-sm sm:text-base mb-6">
          Get a real shot at funding or feedback by presenting your idea to top-tier venture capitalists and mentors.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-md font-medium">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default SectionFive;
