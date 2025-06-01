'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Gaston Klanian',
    title: 'General Manager, EARNM',
    content:
      "I have to say after being in Web3 marketing since 2016, I’ve seen how tricky on-chain data can be to work with, you guys really pulled your weight with this one. I used to have to dive into SQL for this stuff, but now it’s all streamlined 🙌🧿",
    avatar: '/avatars/Gaston Klanian.png',
    time: '19:15',
  },
  {
    name: 'Alex Bell',
    title: 'Head of Partnerships',
    content:
      "Before Cookie3 we had to spend a ton of time putting together KOL lists for clients – limited by individual knowledge, clunky twitter search, and lots of manual review. With Cookie3, we can get much higher quality campaigns built and report our success to clients in a much clearer way.",
    avatar: '/avatars/Alex Bell.png',
    time: '11:04',
  },
  {
    name: 'Danny',
    title: 'AI Agent Layer CMO',
    content:
      'Loved the products! You guys made it easy to track onchain and offchain activities while keeping bots out of the picture. Also you really rocked it with the co-marketing, you helped us connect with top tier projects.',
    avatar: '/avatars/Danny.png',
    time: '21:27',
  },
  // Add more testimonials...
];

const SectionSix: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <h2 className="text-center text-3xl font-sharp mb-10">
        Hear It from Our Learners
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee-left gap-20 px-4">
  {[...testimonials, ...testimonials].map((t, idx) => (
    <div
      key={idx}
      className="relative bg-[#111] border border-neutral-800 rounded-xl shadow-md p-6 w-[320px] shrink-0"
    >
      <div className="text-xs leading-tight">
        <p className="font-sharp text-purple-400">{t.name}</p>
        <p className="text-[10px] text-purple-400">{t.title}</p>
      </div>
      <p className="text-sm mb-4 leading-relaxed">{t.content}</p>


      {/* Time - move to top-right or keep here */}
      <div className="flex justify-end mt-4">
        <span className="text-xs text-gray-500">{t.time}</span>
      </div>

      {/* ✅ Floating Avatar - Bottom Left Outside */}
      <div className="absolute -bottom-0 -left-13">
        <Image
          src={t.avatar}
          alt={t.name}
          width={40}
          height={40}
          className="rounded-full border-2 border-[#111] shadow-md"
        />
      </div>
    </div>
  ))}
</div>

        <br/>
        <div className="flex w-max animate-marquee-right gap-20 px-4">
  {[...testimonials, ...testimonials].map((t, idx) => (
    <div
      key={idx}
      className="relative bg-[#111] border border-neutral-800 rounded-xl shadow-md p-6 w-[320px] shrink-0"
    >
      {/* Name & Title */}
      <div className="text-xs leading-tight">
        <p className="font-sharp text-purple-400">{t.name}</p>
        <p className="text-[10px] text-purple-400">{t.title}</p>
      </div>

      {/* Content */}
      <p className="text-sm mb-4 leading-relaxed">{t.content}</p>

      {/* Time */}
      <div className="flex justify-end mt-4">
        <span className="text-xs text-gray-500">{t.time}</span>
      </div>

      {/* ✅ Avatar - bottom-left outside */}
      <div className="absolute -bottom-0 -left-13">
        <Image
          src={t.avatar}
          alt={t.name}
          width={40}
          height={40}
          className="rounded-full border-2 border-[#111] shadow-md"
        />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default SectionSix;
