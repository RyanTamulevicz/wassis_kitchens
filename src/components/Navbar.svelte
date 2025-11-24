<script>
  import { onMount } from 'svelte';
  
  export let logo;

  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
  <div class="container mx-auto px-6 flex justify-between items-center">
    <a href="/" class="flex items-center gap-2">
      <img src={logo.src} alt="Wassis' Outdoor Kitchens" class="h-12 w-auto" />
    </a>
    
    <div class="hidden md:flex items-center gap-8">
      <a href="#gallery" class="text-gray-800 hover:text-orange-600 font-medium transition-colors">Gallery</a>
      <a href="#vendors" class="text-gray-800 hover:text-orange-600 font-medium transition-colors">Vendors</a>
      <a href="#contact" class="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        Get a Quote
      </a>
    </div>
  </div>
</nav>
