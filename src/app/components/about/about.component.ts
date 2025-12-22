import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" style="padding: 60px 0; background-color: white;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h2 style="font-size: 32px; font-weight: bold; background: linear-gradient(to right, #3b82f6, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">About Me</h2>
        </div>
        <div class="grid-container" style="display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; max-width: 1152px; margin: 0 auto;">
          <!-- Mobile: Image first, then content -->
          <!-- Desktop: Use CSS order to swap -->
          <div class="image-section" style="order: 2;">
            <div style="position: relative;">
              <div class="image-container" style="width: 100%; max-width: 256px; height: auto; aspect-ratio: 2/3; margin: 0 auto; background-color: #f3f4f6; border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); display: flex; align-items: center; justify-content: center; border: 2px dashed #d1d5db;">
                <span style="color: #9ca3af; text-align: center; font-size: 14px;">Image space for 9:16 ratio</span>
              </div>
              <div class="decorative-element" style="position: absolute; bottom: -16px; right: -16px; width: 64px; height: 64px; background: linear-gradient(to bottom right, #f472b6, #fb923c); border-radius: 12px; opacity: 0.6;"></div>
            </div>
          </div>
          
          <!-- Content Section -->
          <div class="content-section" style="order: 1;">
            <h3 style="font-size: 20px; font-weight: bold; color: #111827; margin-bottom: 16px;">Full Stack Developer</h3>
            <p style="font-size: 16px; color: #4b5563; line-height: 1.75; margin-bottom: 24px;">
              Hello! I'm a passionate Full Stack Developer with over 5 years of experience in building 
              modern web applications. I specialize in creating elegant solutions to complex problems 
              and love working with cutting-edge technologies.
            </p>
            <p style="font-size: 16px; color: #4b5563; line-height: 1.75; margin-bottom: 24px;">
              My journey in tech started with a curiosity about how things work on the internet, 
              and it has evolved into a career focused on building user-centric applications. 
              I've had the opportunity to work on diverse projects ranging from small startups 
              to large enterprise applications, always striving to write clean, maintainable code.
            </p>
            <p style="font-size: 16px; color: #4b5563; line-height: 1.75; margin-bottom: 24px;">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through technical writing and mentoring. 
              I believe in continuous learning and staying up-to-date with the latest industry trends.
            </p>
          </div>
        </div>
        
        <!-- Desktop styles -->
        <style>
          @media (min-width: 768px) {
            #about {
              padding: 80px 0;
            }
            #about h2 {
              font-size: 48px;
            }
            #about .grid-container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 48px;
            }
            #about .image-section {
              order: 1;
            }
            #about .content-section {
              order: 2;
            }
            #about .image-container {
              width: 256px;
              height: 384px;
              aspect-ratio: auto;
            }
            #about .decorative-element {
              width: 128px;
              height: 128px;
            }
            #about h3 {
              font-size: 24px;
            }
            #about p {
              font-size: 18px;
            }
          }
        </style>
      </div>
    </section>
  `,
  styles: [``]
})
export class AboutComponent {}
