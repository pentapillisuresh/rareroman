import { useState } from "react";

const collections = [
  {
    id: 1,
    title: "ROMAN COINS",
    image:
      "./images/service1.png",
  },
  {
    id: 2,
    title: "RARE DIAMONDS",
    image:
      "./images/service2.png",
  },
  {
    id: 3,
    title: "ANCIENT CRAFTS",
    image:
      "./images/service4.png",
  },
  {
    id: 4,
    title: "RARE METALS",
    image:
      "./images/service3.png",
  },
];

export default function ExploreCollections() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[6px] text-[#D9AF58] text-sm font-mono font-semibold">
            OUR COLLECTION
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white font-serif">
            Rare Roman Antiquities
          </h2>

          <p className="text-white/60 mt-5 max-w-3xl mx-auto font-sans">
            Discover authentic Roman antiquities, rare coins, precious
            diamonds, ancient artifacts and collectible metals curated from
            historical collections around the world.
          </p>
        </div>

        {/* Gallery */}

        <div className="flex gap-4 h-[480px]">

          {collections.map((item) => {

            const isActive = active === item.id;

            return (

              <div
                key={item.id}
                onMouseEnter={() => setActive(item.id)}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  cursor-pointer
                  transition-all
                  duration-700
                  ease-in-out
                  ${
                    isActive
                      ? "flex-[7]"
                      : "flex-1"
                  }
                `}
              >
                {/* Image */}

                <img
                  src={item.image}
                  alt={item.title}
                  className={`
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    ${
                      isActive
                        ? "scale-100"
                        : "scale-110"
                    }
                  `}
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-black/45" />

                {/* Active Content */}

                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "perspective(1000px) rotateY(0deg)"
                      : "perspective(1000px) rotateY(90deg)",
                    transition:
                      "transform .8s cubic-bezier(.22,1,.36,1), opacity .6s ease",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="text-center">
                    <h2 className="text-white text-5xl md:text-6xl font-bold tracking-[8px] uppercase drop-shadow-2xl font-serif">
                      {item.title}
                    </h2>

                    <div className="w-24 h-[2px] bg-[#D9AF58] mx-auto mt-6" />

                    <p className="text-white/80 uppercase tracking-[5px] mt-5 text-sm font-mono">
                      Rare Roman Collection
                    </p>
                  </div>
                </div>

                {/* Vertical Text */}

                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transform: isActive
                      ? "perspective(1000px) rotateY(-90deg)"
                      : "perspective(1000px) rotateY(0deg)",
                    transition:
                      "transform .8s cubic-bezier(.22,1,.36,1), opacity .5s ease",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <span
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                    className="uppercase text-[#D9AF58] tracking-[12px] text-xl font-semibold font-serif"
                  >
                    {item.title}
                  </span>
                </div>

                {/* Border */}

                <div
                  className={`
                    absolute
                    inset-0
                    rounded-3xl
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "border-2 border-[#D9AF58]"
                        : "border border-white/10"
                    }
                  `}
                />
              </div>

            );

          })}

        </div>

        {/* Brand Signature */}
        <div className="text-center mt-12">
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-mono">
            Rudra x Romulus — Rare Antiques International
          </p>
        </div>
      </div>
    </section>
  );
}