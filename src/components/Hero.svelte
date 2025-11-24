<script>
  export let heroImage;
</script>

<section
  class="relative h-screen flex items-center justify-center overflow-hidden"
>
  <!-- Background Image with Overlay -->
  <div class="absolute inset-0 z-0">
    <img
      src={heroImage.src}
      alt="Outdoor Kitchen"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
    ></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
    <h1
      class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
    >
      Elevate Your <span class="text-[var(--primary)]">Outdoor</span> Lifestyle
    </h1>
    <p
      class="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md"
    >
      Premium custom outdoor kitchens designed for entertaining and built to
      last.
    </p>
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="#contact"
        class="bg-[var(--primary)] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[var(--secondary)] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
      >
        Start Your Project
      </a>
      <a
        href="#gallery"
        class="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
      >
        View Our Work
      </a>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <a
    href="#vendors"
    class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-[var(--primary)] transition-colors"
  >
    <svg
      class="w-8 h-8 text-white/80"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  </a>
</section>
