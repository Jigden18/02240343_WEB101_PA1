"use client";
import Image from "next/image";

const trendingTracks = [
  { image: "/track1.jpg", title: "UP ALL NIGHT", artist: "Henry Hermes" },
  { image: "/track2.jpg", title: "A MILLION (prod 'jackpo...", artist: "CThrUliO" },
  { image: "/track3.jpg", title: "DC3 - I KNOW.", artist: "DC3" },
  { image: "/track4.jpeg", title: "STREET PLAYA", artist: "Misanova" },
  { image: "/track5.jpg", title: "Feel It (ft. Poppy Wright)", artist: "JMAK (RIL)" },
  { image: "/track6.jpg", title: "Abbi", artist: "Vincemp3" },
  { image: "/track7.jpg", title: "torta fever w/ deez", artist: "YKARE" },
  { image: "/track8.jpg", title: "Brunello - Midnight Lovers", artist: "Brunello" },
  { image: "/track9.jpeg", title: "SEXY BACK (AYCH FLIP)", artist: "AYCH" },
  { image: "/track10.jpeg", title: "OTAY", artist: "mig" },
  { image: "/track11.jpeg", title: "Snooze Ya Lose", artist: "rari" },
  { image: "/track12.jpeg", title: "How Many Times (Prod...)", artist: "803Major" },
];

export default function TrendingTracks() {
  return (
    <div className="w-full flex flex-col items-center mt-12">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Hear what’s trending for free in the SoundCloud community
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-7xl px-4">
        {trendingTracks.map((track, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="relative w-full h-44">
              <Image
                src={track.image}
                alt={track.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">{track.title}</p>
              <p className="text-xs text-gray-500">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <button
        aria-label="Explore trending playlists"
        className="mt-12 px-6 py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition"
      >
        Explore trending playlists
      </button>
    </div>
  );
}
