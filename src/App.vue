<template>
  <div>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-neutral/40">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span class="font-serif text-dark text-lg tracking-wide">barbie royo</span>
        <ul class="hidden sm:flex gap-8 text-sm font-sans text-brown tracking-wide transition-all">
          <li><a href="#about" class="transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-lavender rounded-lg">About</a></li>
          <li><a href="#likes" class="transition-colors duration-200">Likes</a></li>
          <li><a href="#plans" class="transition-colors duration-200">Plans</a></li>
        </ul>
      </div>
    </nav>

    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div class="inline-block animate-bounce mb-6">
          <span class="bg-blush border border-neutral text-brown text-xs font-sans tracking-widest uppercase px-4 py-1.5 rounded-full">
            student · dreamer
          </span>
        </div>

        <h1 class="fade-in font-serif text-5xl sm:text-7xl text-dark leading-tight mb-4">
  <span class="inline-block animate-pulse">Hi, I'm <em class="not-italic text-lavender">Barbie</em></span>
</h1>

        <p class="font-sans text-brown text-lg sm:text-xl leading-relaxed max-w-lg mx-auto mb-10">
          An aspiring designer &amp; developer who finds beauty in quiet details, warm coffee, and thoughtful spaces.
        </p>

        <div class="fade-in flex flex-wrap gap-3 justify-center">
          <a href="#about"
             class="bg-dark text-cream font-sans text-sm px-7 py-3 rounded-full shadow-md hover:bg-lavender transition-colors duration-300">
            Get to know me
          </a>
          <a href="#plans"
             class="bg-blush border border-neutral text-dark font-sans text-sm px-7 py-3 rounded-full hover:bg-neutral/40 transition-colors duration-300">
            My plans
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="py-24 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-purple font-sans text-xs tracking-widest uppercase mb-2">who I am</p>
          <h2 class="font-serif text-4xl text-dark">About Me</h2>
        </div>

        <div class="card-hover bg-white/70 backdrop-blur-sm border border-neutral/50 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div class="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
            <div>
              <h3 class="font-serif text-2xl text-dark mb-3">A little about myself</h3>
              <p class="font-sans text-base leading-relaxed text-[#6b5b63] mb-4">
                I'm a university student studying information system. I believe that the small moments make up the most meaningful stories.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="bg-blush text-dark text-xs px-3 py-1 rounded-full border border-neutral/60">design</span>
                <span class="bg-blush text-dark text-xs px-3 py-1 rounded-full border border-neutral/60">organizing</span>
                <span class="bg-blush text-dark text-xs px-3 py-1 rounded-full border border-neutral/60">journaling</span>
                <span class="bg-blush text-dark text-xs px-3 py-1 rounded-full border border-neutral/60">slow mornings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="likes" class="py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-purple font-sans text-xs tracking-widest uppercase mb-2">the little things</p>
          <h2 class="font-serif text-4xl text-dark">Things I Love</h2>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div class="card-hover bg-white/75 backdrop-blur border border-neutral/40 rounded-3xl p-8 shadow-sm">
            <div class="mb-6">
              <h3 class="font-serif text-2xl text-dark">Comfort Food</h3>
            </div>
            <ul class="space-y-4">
              <li>
                <p class="font-sans font-medium text-dark text-sm">Salted Caramel Coffee</p>
                <p class="font-sans text-xs text-brown mt-0.5">Sweet, a little salty, and always a good idea.</p>
              </li>
              <li>
                <p class="font-sans font-medium text-dark text-sm">Lumpiang Shanghai</p>
                <p class="font-sans text-xs text-brown mt-0.5">Crispy, savory, and impossible to eat just one.</p>
              </li>
              <li>
                <p class="font-sans font-medium text-dark text-sm">Chocolate Cake</p>
                <p class="font-sans text-xs text-brown mt-0.5">My forever comfort dessert — rich and indulgent.</p>
              </li>
              <li>
                <p class="font-sans font-medium text-dark text-sm">Buldak</p>
                <p class="font-sans text-xs text-brown mt-0.5">Spicy, cheesy, and dangerously addictive.</p>
              </li>
            </ul>
          </div>

          <div class="card-hover bg-white/75 backdrop-blur border border-neutral/40 rounded-3xl p-8 shadow-sm">
            <div class="mb-6">
              <h3 class="font-serif text-2xl text-dark">Music Mood</h3>
            </div>
            <ul class="space-y-4">
              <li>
                <p class="font-sans font-medium text-dark text-sm">Soft Indie Folk</p>
                <p class="font-sans text-xs text-brown mt-0.5">Phoebe Bridgers, Novo Amor — for quiet evenings.</p>
              </li>
              <li>
                <p class="font-sans font-medium text-dark text-sm">Lo-fi &amp; Study Beats</p>
                <p class="font-sans text-xs text-brown mt-0.5">My constant study companion — gentle and focused.</p>
              </li>
              <li>
                <p class="font-sans font-medium text-dark text-sm">Dreamy R&amp;B</p>
                <p class="font-sans text-xs text-brown mt-0.5">SZA, Steve Lacy — smooth and soulful.</p>
              </li>
              <li>
                <p class="font-sans font-medium text-dark text-sm">Jazz Café Sounds</p>
                <p class="font-sans text-xs text-brown mt-0.5">When I want to feel like I'm in a Parisian bakery.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="plans" class="py-24 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-brown font-sans text-xs tracking-widest uppercase mb-2">looking forward</p>
          <h2 class="font-serif text-4xl text-dark">After Graduation</h2>
          <p class="font-sans text-brown mt-3 text-base max-w-md mx-auto">A quiet roadmap of what I'm working toward — one gentle step at a time.</p>
        </div>

        <div class="space-y-4">
          <div class="card-hover bg-white/70 border border-neutral/40 rounded-2xl p-6 shadow-sm">
            <p class="text-xs font-sans tracking-widest uppercase text-brown font-medium mb-2">Career</p>
            <h4 class="font-serif text-xl text-dark mb-1.5">Land a role in UX / Product Design</h4>
            <p class="font-sans text-sm text-brown leading-relaxed">I hope to join a studio or product team where thoughtful design meets real human needs. I want to work on interfaces that feel genuinely helpful and beautiful.</p>
          </div>

          <div class="card-hover bg-white/70 border border-neutral/40 rounded-2xl p-6 shadow-sm">
            <p class="text-xs font-sans tracking-widest uppercase text-brown font-medium mb-2">Skills</p>
            <h4 class="font-serif text-xl text-dark mb-1.5">Sharpen my craft continuously</h4>
            <p class="font-sans text-sm text-brown leading-relaxed">I want to deepen my knowledge in design systems, motion design, and front-end development.</p>
          </div>

          <div class="card-hover bg-white/70 border border-neutral/40 rounded-2xl p-6 shadow-sm">
            <p class="text-xs font-sans tracking-widest uppercase text-brown font-medium mb-2">Explore</p>
            <h4 class="font-serif text-xl text-dark mb-1.5">Travel &amp; find new perspective</h4>
            <p class="font-sans text-sm text-brown leading-relaxed">I dream of spending a season abroad, working remotely from a city I've never been to, journaling in small cafés, and letting new places change the way I see things.</p>
          </div>

          <div class="card-hover bg-white/70 border border-neutral/40 rounded-2xl p-6 shadow-sm">
            <p class="text-xs font-sans tracking-widest uppercase text-brown font-medium mb-2">Dream</p>
            <h4 class="font-serif text-xl text-dark mb-1.5">Start something of my own</h4>
            <p class="font-sans text-sm text-brown leading-relaxed">Someday, I'd love to build a small creative studio, a gentle space for branding, digital design, and storytelling that helps small businesses feel more themselves.</p>
          </div>
        </div>
      </div>
    </section>

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