import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" style="padding: 80px 0; background-color: #f9fafb;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 48px; font-weight: bold; color: #1f2937; margin-bottom: 16px;">Work Experience</h2>
          <p style="font-size: 18px; color: #6b7280; max-width: 600px; margin: 0 auto;">Professional journey and key achievements</p>
        </div>
        
        <div style="max-width: 1024px; margin: 0 auto;">
          <div style="position: relative;">
            <!-- Timeline line -->
            <div style="position: absolute; left: 32px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #3b82f6, #9333ea);"></div>
            
            <!-- Timeline items -->
            <div style="display: flex; flex-direction: column; gap: 48px;">
              <!-- Experience 1 -->
              <div style="position: relative; display: flex; align-items: flex-start;">
                <div style="position: absolute; left: 32px; width: 16px; height: 16px; background-color: #3b82f6; border-radius: 50%; transform: translateX(-50%); border: 4px solid white; box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.2);"></div>
                <div style="margin-left: 80px; background-color: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;" 
                     [style.boxShadow]="'0 10px 25px rgba(0, 0, 0, 0.1)'"
                     [style.transform]="'translateY(0)'">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 12px;">
                    <h3 style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0;">Senior Frontend Developer</h3>
                    <span style="font-size: 14px; color: #6b7280; background-color: #f3f4f6; padding: 4px 12px; border-radius: 20px;">2022 - Present</span>
                  </div>
                  <p style="color: #4b5563; font-weight: 600; margin: 0 0 16px 0; font-size: 16px;">Tech Company Inc.</p>
                  <p style="color: #6b7280; margin: 0 0 16px 0; line-height: 1.6;">Leading frontend development for enterprise-scale applications with focus on performance optimization and team mentorship.</p>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #3b82f6; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Led development of enterprise-scale applications serving 100K+ users</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #3b82f6; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Improved application performance by 40% through code optimization and caching strategies</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #3b82f6; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Mentored 5 junior developers and conducted regular code reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Experience 2 -->
              <div style="position: relative; display: flex; align-items: flex-start;">
                <div style="position: absolute; left: 32px; width: 16px; height: 16px; background-color: #9333ea; border-radius: 50%; transform: translateX(-50%); border: 4px solid white; box-shadow: 0 0 0 1px rgba(147, 51, 234, 0.2);"></div>
                <div style="margin-left: 80px; background-color: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;" 
                     [style.boxShadow]="'0 10px 25px rgba(0, 0, 0, 0.1)'"
                     [style.transform]="'translateY(0)'">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 12px;">
                    <h3 style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0;">Full Stack Developer</h3>
                    <span style="font-size: 14px; color: #6b7280; background-color: #f3f4f6; padding: 4px 12px; border-radius: 20px;">2020 - 2022</span>
                  </div>
                  <p style="color: #4b5563; font-weight: 600; margin: 0 0 16px 0; font-size: 16px;">StartupXYZ</p>
                  <p style="color: #6b7280; margin: 0 0 16px 0; line-height: 1.6;">Built end-to-end web applications and established development infrastructure for fast-growing startup.</p>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #9333ea; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Built RESTful APIs and responsive web applications from scratch</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #9333ea; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Implemented CI/CD pipelines and automated testing reducing deployment time by 60%</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #9333ea; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Collaborated with cross-functional teams to deliver products on tight deadlines</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Experience 3 -->
              <div style="position: relative; display: flex; align-items: flex-start;">
                <div style="position: absolute; left: 32px; width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; transform: translateX(-50%); border: 4px solid white; box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.2);"></div>
                <div style="margin-left: 80px; background-color: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;" 
                     [style.boxShadow]="'0 10px 25px rgba(0, 0, 0, 0.1)'"
                     [style.transform]="'translateY(0)'">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 12px;">
                    <h3 style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0;">Junior Developer</h3>
                    <span style="font-size: 14px; color: #6b7280; background-color: #f3f4f6; padding: 4px 12px; border-radius: 20px;">2018 - 2020</span>
                  </div>
                  <p style="color: #4b5563; font-weight: 600; margin: 0 0 16px 0; font-size: 16px;">Digital Agency</p>
                  <p style="color: #6b7280; margin: 0 0 16px 0; line-height: 1.6;">Started career developing client websites and learning modern web development practices.</p>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #10b981; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Developed 20+ client websites using modern frontend frameworks</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #10b981; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Participated in agile development process and daily standups</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #10b981; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Learned and applied best practices for responsive design and accessibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class ExperienceComponent {}
