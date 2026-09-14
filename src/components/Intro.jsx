function Intro() {
  return (
    <section
      id="about"
      className="bg-cream px-6 py-20 sm:px-12 md:px-[8vw] md:py-28 lg:py-32"
    >
      {/* Eyebrow label */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-stone">
        Welcome to Sal Villa
      </p>

      {/* Heading + copy */}
      <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-[9vw]">
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.02em]">
          A little more
          <br />
          <em className="text-sage not-italic">room to breathe.</em>
        </h2>

        <div className="max-w-[510px] text-base leading-[1.75] text-stone">
          <p className="mb-[18px]">
            Sal Villa Homestay is made for people who want a comfortable,
            personal stay away from the rush. Come with family, friends or
            simply yourself.
          </p>
          <p>Settle in, explore the surroundings and let the day move at its own pace.</p>
        </div>
      </div>
    </section>
  )
}

export default Intro