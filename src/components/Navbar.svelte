<script>
  import { onMount } from "svelte";

  export let logo;

  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<nav
  class={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-gradient-to-b from-black/50 to-transparent py-4"}`}
>
  <div class="container mx-auto px-6 flex justify-between items-center">
    <a href="/" class="flex items-center gap-2">
      <img
        src={logo.src}
        alt="Wassis' Outdoor Kitchens"
        class="h-12 w-auto drop-shadow-md"
      />
    </a>

    <div class="hidden md:flex items-center gap-8">
      <a
        href="#gallery"
        class={`font-medium transition-colors drop-shadow-md ${isScrolled ? "text-gray-800 hover:text-[var(--primary)]" : "text-white hover:text-[var(--primary)]"}`}
        >Gallery</a
      >
      <a
        href="#vendors"
        class={`font-medium transition-colors drop-shadow-md ${isScrolled ? "text-gray-800 hover:text-[var(--primary)]" : "text-white hover:text-[var(--primary)]"}`}
        >Vendors</a
      >
      <a
        href="#contact"
        class="bg-[var(--primary)] text-white px-6 py-2 rounded-full font-semibold hover:bg-[var(--secondary)] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Get a Quote
      </a>
    </div>
  </div>
</nav>
