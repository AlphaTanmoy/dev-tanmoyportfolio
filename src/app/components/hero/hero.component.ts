import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background image with overlay -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/hero.png');">
        <!-- Dark overlay for text readability -->
        <div class="absolute inset-0 bg-black/60"></div>
        <!-- Gradient overlay for modern look -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
        <div class="absolute w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -bottom-20 -right-20 animate-float" style="animation-delay: 1s;"></div>
        <div class="absolute w-64 h-64 bg-pink-400/8 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      </div>
      
      <div class="relative z-10 w-full mx-auto px-0 sm:px-6 lg:px-8 text-center">
        <style>
          @media (max-width: 640px) {
            .hero-content {
              padding-left: 16px !important;
              padding-right: 16px !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
              max-width: 100% !important;
              width: 100% !important;
            }
            .relative.z-10 {
              padding-left: 0 !important;
              padding-right: 0 !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
        </style>
        <div class="hero-content animate-fade-in-down">
          <h1 class="text-5xl md:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            Welcome to My
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p class="text-xl md:text-2xl xl:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Building amazing experiences with modern web technologies
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" class="btn-primary">
              Get In Touch
            </a>
            <a href="#about" class="btn-secondary bg-white text-gray-900 border-white hover:bg-gray-100 hover:border-gray-200">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class HeroComponent {}
