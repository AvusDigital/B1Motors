const mediaImages = [
  "https://i.postimg.cc/cHNX3CBt/FH6-(100).png",
  "https://i.postimg.cc/k4dfSGvt/FH6-(102).png",
  "https://i.postimg.cc/zXdtQJqX/FH6-(13).png",
  "https://i.postimg.cc/3JLSqK32/FH6-(27).png",
  "https://i.postimg.cc/dtWHfqJT/FH6-(28).png",
  "https://i.postimg.cc/tCrScX9x/FH6-(30).png",
  "https://i.postimg.cc/jSLg0GjW/FH6-(49).png",
  "https://i.postimg.cc/HsWv3JDt/FH6-(6).png",
  "https://i.postimg.cc/mgtXf0r5/FH6-(77).png",
  "https://i.postimg.cc/FH8P9Dfx/FH6-(79).png",
  "https://i.postimg.cc/Vkp7YDSK/FH6-(83).png",
  "https://i.postimg.cc/vZkPQ31N/FH6-(85).png",
  "https://i.postimg.cc/7ZdBxmGD/FH6-(93).png",
  "https://i.postimg.cc/K8w9ZJkz/FH6-(94).png",
  "https://i.postimg.cc/R0tgqKKz/FH6-(96).png",
  "https://i.postimg.cc/HLM6jXXn/FH6-(97).png",
];

export default function MidiaPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-40 text-white md:px-10">
      <div className="mb-12">
        <p className="text-xs tracking-[0.34em] text-white/45">MÍDIA</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Galeria com direção mais editorial
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
          Um espaço visual pensado para valorizar presença, estética e a identidade
          da B1 Motors com uma linguagem mais refinada.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {mediaImages.map((image, index) => (
          <div
            key={index}
            className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-red-500/40 hover:shadow-[0_0_24px_rgba(220,38,38,0.10)] ${
              index === 0 ? "xl:col-span-2" : ""
            }`}
          >
            <img
              src={image}
              alt={`Mídia ${index + 1}`}
              className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}