<script>
  export let vendors = [];
</script>

<section id="vendors" class="py-16 bg-neutral-900 overflow-hidden">
  <div class="container mx-auto px-6 mb-8 text-center">
    <h2 class="text-3xl font-bold text-white mb-2">Our Premium Partners</h2>
    <p class="text-gray-400">We work with the best brands in the industry</p>
  </div>

  <div class="relative flex overflow-x-hidden group">
    <div class="animate-marquee whitespace-nowrap flex items-center py-4">
      {#each vendors as vendor}
        <div
          class="mx-12 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
        >
          <img
            src={vendor.src}
            alt="Vendor Logo"
            class="max-w-full max-h-full object-contain"
          />
        </div>
      {/each}
      <!-- Duplicate for seamless loop -->
      {#each vendors as vendor}
        <div
          class="mx-12 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
        >
          <img
            src={vendor.src}
            alt="Vendor Logo"
            class="max-w-full max-h-full object-contain"
          />
        </div>
      {/each}
    </div>

    <div
      class="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4"
    >
      {#each vendors as vendor}
        <div
          class="mx-12 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
        >
          <img
            src={vendor.src}
            alt="Vendor Logo"
            class="max-w-full max-h-full object-contain"
          />
        </div>
      {/each}
      <!-- Duplicate for seamless loop -->
      {#each vendors as vendor}
        <div
          class="mx-12 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
        >
          <img
            src={vendor.src}
            alt="Vendor Logo"
            class="max-w-full max-h-full object-contain"
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }
  .animate-marquee2 {
    animation: marquee2 25s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes marquee2 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
</style>
