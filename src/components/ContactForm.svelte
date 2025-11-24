<script>
  let formData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  let isSubmitting = false;
  let isSuccess = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    isSubmitting = true;

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    isSubmitting = false;
    isSuccess = true;
    formData = { name: "", email: "", phone: "", message: "" };

    setTimeout(() => {
      isSuccess = false;
    }, 5000);
  };
</script>

<section
  id="contact"
  class="py-20 bg-gray-900 text-white relative overflow-hidden"
>
  <!-- Decorative background elements -->
  <div
    class="absolute top-0 left-0 w-64 h-64 bg-[var(--primary)]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
  ></div>
  <div
    class="absolute bottom-0 right-0 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
  ></div>

  <div class="container mx-auto px-6 relative z-10">
    <div
      class="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700"
    >
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Start Your Transformation
        </h2>
        <p class="text-gray-400 text-lg">
          Ready to build the outdoor kitchen of your dreams? Fill out the form
          below and we'll get in touch.
        </p>
      </div>

      {#if isSuccess}
        <div
          class="bg-green-500/20 border border-green-500 text-green-300 p-6 rounded-lg text-center mb-8 animate-fade-in"
        >
          <p class="font-semibold text-xl">Thank you!</p>
          <p>We've received your message and will contact you shortly.</p>
        </div>
      {:else}
        <form on:submit={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-400 mb-2">Name</label
              >
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-400 mb-2"
                >Email</label
              >
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-gray-400 mb-2"
              >Phone (Optional)</label
            >
            <input
              type="tel"
              id="phone"
              bind:value={formData.phone}
              class="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-400 mb-2"
              >Message</label
            >
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="4"
              class="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full bg-[var(--primary)] hover:bg-[var(--secondary)] text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-[var(--primary)]/30 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {#if isSubmitting}
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            {:else}
              Send Message
            {/if}
          </button>
        </form>
      {/if}
    </div>
  </div>
</section>
