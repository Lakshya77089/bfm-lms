'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Gaston Klanian',
    title: 'General Manager, EARNM',
    content:
      "I have to say after being in Web3 marketing since 2016, I’ve seen how tricky on-chain data can be to work with, you guys really pulled your weight with this one. I used to have to dive into SQL for this stuff, but now it’s all streamlined 🙌🧿",
    avatar: '/avatars/gaston.png',
    time: '19:15',
  },
  {
    name: 'Alex Bell',
    title: 'Head of Partnerships',
    content:
      "Before Cookie3 we had to spend a ton of time putting together KOL lists for clients – limited by individual knowledge, clunky twitter search, and lots of manual review. With Cookie3, we can get much higher quality campaigns built and report our success to clients in a much clearer way.",
    avatar: '/avatars/alex.png',
    time: '11:04',
  },
  {
    name: 'Danny',
    title: 'AI Agent Layer CMO',
    content:
      'Loved the products! You guys made it easy to track onchain and offchain activities while keeping bots out of the picture. Also you really rocked it with the co-marketing, you helped us connect with top tier projects.',
    avatar: '/avatars/danny.png',
    time: '21:27',
  },
  // Add more testimonials...
];

const SectionSix: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-10">
        Hear It from Our Learners
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee-left gap-8 px-4">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="bg-[#111] border border-neutral-800 rounded-xl shadow-md p-6 w-[320px] shrink-0"
            >
              <p className="text-sm mb-4 leading-relaxed">{t.content}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="text-xs leading-tight">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-[10px] text-purple-400">{t.title}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
        <br/>
        <div className="flex w-max animate-marquee-right gap-8 px-4">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="bg-[#111] border border-neutral-800 rounded-xl shadow-md p-6 w-[320px] shrink-0"
            >
              <p className="text-sm mb-4 leading-relaxed">{t.content}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="text-xs leading-tight">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-[10px] text-purple-400">{t.title}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
