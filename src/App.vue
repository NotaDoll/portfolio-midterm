<template>
  <div>
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-neutral/40">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span class="font-serif text-dark text-lg tracking-wide">barbie royo</span>
        <ul class="hidden sm:flex gap-8 text-sm font-sans text-brown tracking-wide transition-all">
          <li><a href="#about" class="transition-colors duration-200 hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender rounded-lg px-2 py-1">About</a></li>
          <li><a href="#hobbies" class="transition-colors duration-200 hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender rounded-lg px-2 py-1">Hobbies</a></li>
          <li><a href="#projects" class="transition-colors duration-200 hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender rounded-lg px-2 py-1">Projects</a></li>
          <li><a href="#certificates" class="transition-colors duration-200 hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender rounded-lg px-2 py-1">Certificates</a></li>
          <li><a href="#contact" class="transition-colors duration-200 hover:text-lavender focus:outline-none focus:ring-2 focus:ring-lavender rounded-lg px-2 py-1">Contact</a></li>
        </ul>
      </div>
    </nav>

  <main>
   <!-- Hero Section -->
      <section id="about" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div class="absolute w-[340px] h-[340px] rounded-full bg-lavender/20 -top-20 -right-20 pointer-events-none"></div>
        <div class="absolute w-[260px] h-[260px] rounded-full bg-blush/40 -bottom-16 -left-16 pointer-events-none"></div>
        
        <div class="relative z-10 px-6 max-w-5xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            <div class="fade-in md:w-2/5 flex justify-center">
              <div class="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-lavender shadow-lg bg-blush">
                <img 
                  src="/images/portfolio-profile.png" 
                  alt="Barbie Royo" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- About me-->
            <div class="fade-in text-center md:text-left md:w-3/5">
              <div class="inline-block animate-bounce mb-4">
                <span class="bg-lavender/30 text-dark text-xs font-sans tracking-widest uppercase px-4 py-1.5 rounded-full border border-lavender">
                  ✦ BS Information System — 3rd Year
                </span>
              </div>

              <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl text-dark leading-tight mb-4">
                Hello, I'm Barbie<br />
                <em class="not-italic text-lavender">an Aspiring UI/UX Designer!</em>
              </h1>

              <p class="font-sans text-brown text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
                I'm a 3rd-year Information Systems student who loves making things look good and easy to use. 
                When I'm not working on a new design, you'll find me journaling, tending to my plants, 
                or getting lost in a good book with a matcha latte. Welcome to my tiny corner of the internet — make yourself at home!
              </p>

              <div class="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="#projects" class="bg-dark text-cream font-sans text-sm px-7 py-3 rounded-full shadow-md hover:bg-lavender transition-colors duration-300">
                  See My Projects
                </a>
                <a href="#contact" class="bg-blush border border-neutral text-dark font-sans text-sm px-7 py-3 rounded-full hover:bg-neutral/40 transition-colors duration-300">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hobbies Section-->
      <section id="hobbies" class="py-24 px-6 bg-white/30">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-14">
            <p class="text-purple font-sans text-xs tracking-widest uppercase mb-2">what i love</p>
            <h2 class="font-serif text-4xl text-dark">Hobbies & Interests</h2>
            <div class="w-16 h-px bg-lavender mx-auto mt-4"></div>
            <p class="font-sans text-brown mt-4 text-base max-w-lg mx-auto">A few things that bring me joy and keep me inspired.</p>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <!-- Hobby 1: Designing -->
            <div class="card-hover bg-white/80 backdrop-blur-sm border border-neutral/40 rounded-2xl p-6 text-center group">
              <h3 class="font-serif text-lg text-dark mb-2">Designing</h3>
              <p class="font-sans text-sm text-brown leading-relaxed">
                Creating UI layouts, experimenting with colors, and visual storytelling.
              </p>
            </div>

            <!-- Hobby 2: Journaling -->
            <div class="card-hover bg-white/80 backdrop-blur-sm border border-neutral/40 rounded-2xl p-6 text-center group">
              <h3 class="font-serif text-lg text-dark mb-2">Journaling</h3>
              <p class="font-sans text-sm text-brown leading-relaxed">
                Bullet journaling to reflect, plan, and stay grounded.
              </p>
            </div>

            <!-- Hobby 3: Reading -->
            <div class="card-hover bg-white/80 backdrop-blur-sm border border-neutral/40 rounded-2xl p-6 text-center group">
              <h3 class="font-serif text-lg text-dark mb-2">Reading</h3>
              <p class="font-sans text-sm text-brown leading-relaxed">
                Getting lost in novels, essays, and slow, cozy reads.
              </p>
            </div>

            <!-- Hobby 4: Series & Movies -->
            <div class="card-hover bg-white/80 backdrop-blur-sm border border-neutral/40 rounded-2xl p-6 text-center group">
              <h3 class="font-serif text-lg text-dark mb-2">Series & Movies</h3>
              <p class="font-sans text-sm text-brown leading-relaxed">
                Comfort shows, meaningful films, and late-night rewatches.
              </p>
            </div>

          </div>
        </div>
      </section>


  </main>

    <footer class="bg-dark text-cream py-14 px-6">
      <div class="max-w-3xl mx-auto text-center">
        <div class="w-10 h-px bg-lavender mx-auto mb-6 opacity-60"></div>
        <p class="font-serif text-3xl mb-3">barbie royo</p>
        <p class="font-sans text-sm text-cream/60 italic tracking-wide max-w-xs mx-auto leading-relaxed">
          "She is both soft and strong — like lavender after rain."
        </p>
        <div class="mt-8 flex justify-center gap-6 text-xs font-sans text-cream/40 tracking-widest uppercase">
          <a href="#about" class="hover:text-cream/80 transition-colors">About</a>
          <span>·</span>
          <a href="#likes" class="hover:text-cream/80 transition-colors">Likes</a>
          <span>·</span>
          <a href="#plans" class="hover:text-cream/80 transition-colors">Plans</a>
        </div>
        <p class=" mt-8 text-cream/25 text-xs font-sans">© 2026 Barbie Royo</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No logic needed for this static page
</script>

<style>
html { scroll-behavior: smooth; }
body { font-family: 'DM Sans', sans-serif; background-color: #F5F2EE; }

.fade-in { opacity: 0; transform: translateY(24px); animation: fadeUp 0.8s ease forwards; }
.fade-in:nth-child(2) { animation-delay: 0.15s; }
.fade-in:nth-child(3) { animation-delay: 0.3s; }
@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 11px;
  top: 28px;
  bottom: -16px;
  width: 2px;
  background: linear-gradient(to bottom, #AB9CB1, transparent);
}

nav a:hover { color: #8A6674; }

.card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(138,102,116,0.12); }
</style>