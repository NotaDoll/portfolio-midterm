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

      <!-- Projects Section -->
<section id="projects" class="py-24 px-6 bg-blush/20">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-14">
      <p class="text-purple font-sans text-xs tracking-widest uppercase mb-2">my work</p>
      <h2 class="font-serif text-4xl text-dark">Projects & Prototypes</h2>
      <div class="w-16 h-px bg-lavender mx-auto mt-4"></div>
      <p class="font-sans text-brown mt-4 text-base max-w-lg mx-auto">A selection of UI/UX designs I've created — from travel planning to food delivery.</p>
    </div>

    <div class="space-y-8">
      
      <!-- Project 1: TourMate -->
      <article class="card-hover bg-white/90 backdrop-blur-sm border border-neutral/40 rounded-3xl overflow-hidden shadow-sm">
        <!-- Prototype Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-cream/50">
          <img 
            src="/images/project1/home.png" 
            alt="TourMate Home" 
            class="w-full h-auto rounded-lg border border-neutral/30 shadow-sm bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            @click="openLightbox('/images/project1/home.png', 'TourMate - Home Screen')"
          />
          <img 
            src="/images/project1/Plantrip.date.png" 
            alt="TourMate Pick Date" 
            class="w-full h-auto rounded-lg border border-neutral/30 shadow-sm bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            @click="openLightbox('/images/project1/Plantrip.date.png', 'TourMate - Pick Date Screen')"
          />
          <img 
            src="/images/project1/Plantrip.accommodation.png" 
            alt="TourMate Accommodation" 
            class="w-full h-auto rounded-lg border border-neutral/30 shadow-sm bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            @click="openLightbox('/images/project1/Plantrip.accommodation.png', 'TourMate - Select Accommodation Screen')"
          />
          <img 
            src="/images/project1/accomm1.png" 
            alt="TourMate Hostel Detail" 
            class="w-full h-auto rounded-lg border border-neutral/30 shadow-sm bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            @click="openLightbox('/images/project1/accomm1.png', 'TourMate - Accommodation Detail Screen')"
          />
        </div>
        
        <div class="p-6 sm:p-8">
          <div class="flex flex-wrap items-start justify-between gap-4 mb-3">
            <h3 class="font-serif text-2xl text-dark">tourmate</h3>
            <span class="bg-lavender/30 text-dark text-xs px-3 py-1 rounded-full border border-lavender/40 font-sans">Figma Prototype</span>
          </div>
          <p class="font-sans text-brown leading-relaxed mb-5 max-w-2xl">
            A travel planning mobile app that helps users discover destinations, browse accommodations, 
            and plan their trip dates — all in one beautifully designed place.
          </p>
          <a href="https://www.figma.com/design/yEc5b6bCAwcqUFQ5NLzBfw/tourmate-app?node-id=0-1&t=Eu6p8hahA0ol2594-1" 
             target="_blank" 
             class="inline-flex items-center gap-2 bg-dark text-cream font-sans text-sm px-6 py-2.5 rounded-full hover:bg-lavender transition-colors duration-300">
            <span>View on Figma</span>
            <span>↗</span>
          </a>
        </div>
      </article>

      <!-- Project 2: Food Delivery App -->
      <article class="card-hover bg-white/90 backdrop-blur-sm border border-neutral/40 rounded-3xl overflow-hidden shadow-sm">
        <!-- Prototype Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-cream/50">
          <img 
            src="/images/project2/home.png" 
            alt="Food Delivery Home" 
            class="w-full h-auto rounded-lg border border-neutral/30 shadow-sm bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            @click="openLightbox('/images/project2/home.png', 'Food Delivery App - Home Screen')"
          />
          <img 
            src="/images/project2/view-burger.png" 
            alt="Food Delivery View Item" 
            class="w-full h-auto rounded-lg border border-neutral/30 shadow-sm bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            @click="openLightbox('/images/project2/view-burger.png', 'Food Delivery App - Item Detail Screen')"
          />
          <img 
            src="/images/project2/cart-checkout.png" 
            alt="Food Delivery Cart" 
            class="w-full h-auto rounded-lg border border-neutral/30 shadow-sm bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            @click="openLightbox('/images/project2/cart-checkout.png', 'Food Delivery App - Cart Checkout Screen')"
          />
          <img 
            src="/images/project2/order-tracking.png" 
            alt="Food Delivery Tracking" 
            class="w-full h-auto rounded-lg border border-neutral/30 shadow-sm bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            @click="openLightbox('/images/project2/order-tracking.png', 'Food Delivery App - Order Tracking Screen')"
          />
        </div>
        
        <div class="p-6 sm:p-8">
          <div class="flex flex-wrap items-start justify-between gap-4 mb-3">
            <h3 class="font-serif text-2xl text-dark">Food Delivery App</h3>
            <span class="bg-lavender/30 text-dark text-xs px-3 py-1 rounded-full border border-lavender/40 font-sans">Canva Prototype</span>
          </div>
          <p class="font-sans text-brown leading-relaxed mb-5 max-w-2xl">
            A warm, appetizing mobile UI for food delivery — browse restaurants, view menu items, 
            add to cart, and track orders in real time. Designed with a cozy, inviting color palette.
          </p>

          <a href="https://www.canva.com/design/DAG1LpqL1Og/vusPZfdDrWZas_6GNxu00Q/view" 
             target="_blank" 
             class="inline-flex items-center gap-2 bg-dark text-cream font-sans text-sm px-6 py-2.5 rounded-full hover:bg-lavender transition-colors duration-300">
            <span>View on Canva</span>
            <span>↗</span>
          </a>
        </div>
      </article>

    </div>
    
    <p class="text-center font-sans text-xs text-brown/60 mt-8 italic">
      Designed with Figma & Canva — more projects coming soon!
    </p>
  </div>
</section> 

<!-- Certificates Section -->
<section id="certificates" class="py-24 px-6 bg-white/40">
  <div class="max-w-5xl mx-auto">
    <div class="text-center mb-14">
      <p class="text-purple font-sans text-xs tracking-widest uppercase mb-2">achievements</p>
      <h2 class="font-serif text-4xl text-dark">SoloLearn Certificates</h2>
      <div class="w-16 h-px bg-lavender mx-auto mt-4"></div>
      <p class="font-sans text-brown mt-4 text-base max-w-md mx-auto">Validating my foundation in web technologies.</p>
    </div>

    <div class="grid sm:grid-cols-3 gap-6">
      
      <!-- Certificate 1: HTML -->
      <article class="card-hover bg-white/90 backdrop-blur-sm border border-neutral/40 rounded-2xl overflow-hidden shadow-sm group">
        <div 
          class="aspect-[4/3] bg-gradient-to-br from-lavender/20 to-blush/30 p-4 flex items-center justify-center cursor-pointer relative"
          @click="openLightbox('/images/certificates/Introduction-to-HTML-certificate.jpg', 'SoloLearn Certificate - Introduction to HTML')"
        >
          <img 
            src="/images/certificates/Introduction-to-HTML-certificate.jpg" 
            alt="HTML Certificate" 
            class="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300 rounded-lg flex items-center justify-center">
            <span class="opacity-0 group-hover:opacity-100 text-cream text-xs font-sans bg-dark/60 px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity">
              View Certificate
            </span>
          </div>
        </div>
        <div class="p-5 text-center">
          <h3 class="font-serif text-lg text-dark mb-1">Introduction to HTML</h3>
          <p class="font-sans text-xs text-brown mb-2">SoloLearn</p>
          <p class="font-sans text-sm text-brown leading-relaxed">
            Semantic structure, tags, and building the web's foundation.
          </p>
        </div>
      </article>

      <!-- Certificate 2: CSS -->
      <article class="card-hover bg-white/90 backdrop-blur-sm border border-neutral/40 rounded-2xl overflow-hidden shadow-sm group">
        <div 
          class="aspect-[4/3] bg-gradient-to-br from-lavender/20 to-blush/30 p-4 flex items-center justify-center cursor-pointer relative"
          @click="openLightbox('/images/certificates/Introduction-to-CSS-certificate.jpg', 'SoloLearn Certificate - Introduction to CSS')"
        >
          <img 
            src="/images/certificates/Introduction-to-CSS-certificate.jpg" 
            alt="CSS Certificate" 
            class="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300 rounded-lg flex items-center justify-center">
            <span class="opacity-0 group-hover:opacity-100 text-cream text-xs font-sans bg-dark/60 px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity">
              View Certificate
            </span>
          </div>
        </div>
        <div class="p-5 text-center">
          <h3 class="font-serif text-lg text-dark mb-1">Introduction to CSS</h3>
          <p class="font-sans text-xs text-brown mb-2">SoloLearn</p>
          <p class="font-sans text-sm text-brown leading-relaxed">
            Styling, layouts, and bringing designs to life.
          </p>
        </div>
      </article>

      <!-- Certificate 3: JavaScript -->
      <article class="card-hover bg-white/90 backdrop-blur-sm border border-neutral/40 rounded-2xl overflow-hidden shadow-sm group">
        <div 
          class="aspect-[4/3] bg-gradient-to-br from-lavender/20 to-blush/30 p-4 flex items-center justify-center cursor-pointer relative"
          @click="openLightbox('/images/certificates/Introduction-to-JavaScript-certificate.jpg', 'SoloLearn Certificate - Introduction to JavaScript')"
        >
          <img 
            src="/images/certificates/Introduction-to-JavaScript-certificate.jpg" 
            alt="JavaScript Certificate" 
            class="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300 rounded-lg flex items-center justify-center">
            <span class="opacity-0 group-hover:opacity-100 text-cream text-xs font-sans bg-dark/60 px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity">
              View Certificate
            </span>
          </div>
        </div>
        <div class="p-5 text-center">
          <h3 class="font-serif text-lg text-dark mb-1">Introduction to JavaScript</h3>
          <p class="font-sans text-xs text-brown mb-2">SoloLearn</p>
          <p class="font-sans text-sm text-brown leading-relaxed">
            Interactive elements and dynamic web behavior.
          </p>
        </div>
      </article>

    </div>
  </div>
</section>

      <!-- Contact Form Section -->
      <section id="contact" class="py-24 px-6 bg-gradient-to-b from-white/30 to-blush/30">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-12">
            <p class="text-purple font-sans text-xs tracking-widest uppercase mb-2">get in touch</p>
            <h2 class="font-serif text-4xl text-dark">Contact Me</h2>
            <div class="w-16 h-px bg-lavender mx-auto mt-4"></div>
            <p class="font-sans text-brown mt-4 text-base">I'd love to hear about your project or just say hello.</p>
          </div>

          <form action="https://formspree.io/f/{your-form-id}" method="POST" class="bg-white/80 backdrop-blur-sm border border-neutral/50 rounded-3xl p-8 shadow-lg">
            <div class="mb-5">
              <label for="name" class="block font-sans text-sm font-medium text-dark mb-2">Full Name <span class="text-lavender">*</span></label>
              <input type="text" id="name" name="name" required
                     class="w-full px-4 py-3 border border-neutral/60 rounded-xl bg-cream/50 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition font-sans">
            </div>
            
            <div class="mb-5">
              <label for="email" class="block font-sans text-sm font-medium text-dark mb-2">Email Address <span class="text-lavender">*</span></label>
              <input type="email" id="email" name="email" required
                     class="w-full px-4 py-3 border border-neutral/60 rounded-xl bg-cream/50 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition font-sans">
            </div>

            <div class="mb-6">
              <label for="message" class="block font-sans text-sm font-medium text-dark mb-2">Message <span class="text-lavender">*</span></label>
              <textarea id="message" name="message" rows="4" required
                        class="w-full px-4 py-3 border border-neutral/60 rounded-xl bg-cream/50 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition font-sans"></textarea>
            </div>

            <div class="text-center">
              <button type="submit" 
                      class="bg-dark text-cream font-sans text-sm px-8 py-3 rounded-full shadow-md hover:bg-lavender transition-colors duration-300 w-full sm:w-auto">
                Send Message
              </button>
            </div>
            <p class="text-xs text-center text-brown/60 mt-4 font-sans">All fields marked with <span class="text-lavender">*</span> are required.</p>
          </form>
        </div>
      </section>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div 
        v-if="showLightbox" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/90 backdrop-blur-sm"
        @click="closeLightbox"
      >
        <!-- Close button -->
        <button 
          @click="closeLightbox"
          class="absolute top-6 right-6 text-cream hover:text-white transition-colors z-10"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Image container -->
        <div 
          class="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
          @click.stop
        >
          <img 
            :src="lightboxImage" 
            :alt="lightboxAlt"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </Teleport>
  </main>

   <!-- Footer -->
    <footer class="bg-dark text-cream py-14 px-6">
      <div class="max-w-3xl mx-auto text-center">
        <div class="w-10 h-px bg-lavender mx-auto mb-6 opacity-60"></div>
        <p class="font-serif text-3xl mb-3">barbie royo</p>
        <p class="font-sans text-sm text-cream/60 italic tracking-wide max-w-xs mx-auto leading-relaxed">
          "Designing with intention, creating with heart."
        </p>
        <div class="mt-8 flex justify-center gap-6 text-xs font-sans text-cream/40 tracking-widest uppercase flex-wrap">
          <a href="#about" class="hover:text-cream/80 transition-colors">About</a>
          <span>·</span>
          <a href="#hobbies" class="hover:text-cream/80 transition-colors">Hobbies</a>
          <span>·</span>
          <a href="#projects" class="hover:text-cream/80 transition-colors">Projects</a>
          <span>·</span>
          <a href="#certificates" class="hover:text-cream/80 transition-colors">Certificates</a>
          <span>·</span>
          <a href="#contact" class="hover:text-cream/80 transition-colors">Contact</a>
        </div>
        <p class="mt-8 text-cream/25 text-xs font-sans">© 2026 Barbie Angel Joy Royo</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Lightbox state
const showLightbox = ref(false)
const lightboxImage = ref('')
const lightboxAlt = ref('')

// Function to open lightbox
const openLightbox = (imageSrc, imageAlt) => {
  lightboxImage.value = imageSrc
  lightboxAlt.value = imageAlt
  showLightbox.value = true
  // Prevent body scrolling when lightbox is open
  document.body.style.overflow = 'hidden'
}

// Function to close lightbox
const closeLightbox = () => {
  showLightbox.value = false
  lightboxImage.value = ''
  lightboxAlt.value = ''
  // Restore body scrolling
  document.body.style.overflow = ''
}
</script>

<style>
html { scroll-behavior: smooth; }
body { font-family: 'Montserrat', sans-serif; background-color: #F5F2EE; }

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