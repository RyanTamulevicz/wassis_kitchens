<script>
  export let images = [];

  let selectedImage = null;

  function openModal(image) {
    selectedImage = image;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    selectedImage = null;
    document.body.style.overflow = "auto";
  }
</script>

<section id="gallery" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Masterpieces</h2>
      <div class="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
      <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        Explore our portfolio of custom outdoor kitchens, designed to transform
        backyards into culinary paradises.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each images as image, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[4/3]"
          on:click={() => openModal(image)}
        >
          <img
            src={image.src}
            alt={`Gallery Image ${i + 1}`}
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div
            class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          >
            <span
              class="text-white font-semibold text-lg border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              View Project
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  {#if selectedImage}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      on:click={closeModal}
      transition:fade
    >
      <button
        class="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors"
        on:click={closeModal}
      >
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <img
        src={selectedImage.src}
        alt="Gallery Fullscreen"
        class="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
        on:click|stopPropagation
      />
    </div>
  {/if}
</section>
