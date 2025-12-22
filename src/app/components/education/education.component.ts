import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" style="padding: 80px 0; background-color: white;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 48px; font-weight: bold; color: #1f2937; margin-bottom: 16px;">Education</h2>
          <p style="font-size: 18px; color: #6b7280; max-width: 600px; margin: 0 auto;">Academic background and professional certifications</p>
        </div>
        
        <div style="max-width: 1024px; margin: 0 auto;">
          <div style="position: relative;">
            <!-- Timeline line -->
            <div style="position: absolute; left: 32px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #10b981, #f59e0b);"></div>
            
            <!-- Timeline items -->
            <div style="display: flex; flex-direction: column; gap: 48px;">
              <!-- Education 1 -->
              <div style="position: relative; display: flex; align-items: flex-start;">
                <div style="position: absolute; left: 32px; width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; transform: translateX(-50%); border: 4px solid white; box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.2);"></div>
                <div style="margin-left: 80px; background-color: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;" 
                     [style.boxShadow]="'0 10px 25px rgba(0, 0, 0, 0.1)'"
                     [style.transform]="'translateY(0)'">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 12px;">
                    <h3 style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0;">Bachelor of Technology</h3>
                    <span style="font-size: 14px; color: #6b7280; background-color: #f3f4f6; padding: 4px 12px; border-radius: 20px;">2016 - 2020</span>
                  </div>
                  <p style="color: #4b5563; font-weight: 600; margin: 0 0 16px 0; font-size: 16px;">Computer Science & Engineering</p>
                  <p style="color: #6b7280; margin: 0 0 16px 0; line-height: 1.6;">University Name</p>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #10b981; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">GPA: 3.8/4.0 • Dean's List for 3 consecutive semesters</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #10b981; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #10b981; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Final Year Project: E-commerce Platform with React and Node.js</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Education 2 -->
              <div style="position: relative; display: flex; align-items: flex-start;">
                <div style="position: absolute; left: 32px; width: 16px; height: 16px; background-color: #f59e0b; border-radius: 50%; transform: translateX(-50%); border: 4px solid white; box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.2);"></div>
                <div style="margin-left: 80px; background-color: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;" 
                     [style.boxShadow]="'0 10px 25px rgba(0, 0, 0, 0.1)'"
                     [style.transform]="'translateY(0)'">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 12px;">
                    <h3 style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0;">Professional Certifications</h3>
                    <span style="font-size: 14px; color: #6b7280; background-color: #f3f4f6; padding: 4px 12px; border-radius: 20px;">2021 - 2023</span>
                  </div>
                  <p style="color: #4b5563; font-weight: 600; margin: 0 0 16px 0; font-size: 16px;">Cloud Architecture & DevOps</p>
                  <p style="color: #6b7280; margin: 0 0 16px 0; line-height: 1.6;">Industry-recognized certifications to enhance technical expertise</p>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #f59e0b; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">AWS Certified Solutions Architect Associate</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #f59e0b; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Google Cloud Professional Developer</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #f59e0b; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Certified Kubernetes Administrator (CKA)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Education 3 -->
              <div style="position: relative; display: flex; align-items: flex-start;">
                <div style="position: absolute; left: 32px; width: 16px; height: 16px; background-color: #ef4444; border-radius: 50%; transform: translateX(-50%); border: 4px solid white; box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.2);"></div>
                <div style="margin-left: 80px; background-color: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;" 
                     [style.boxShadow]="'0 10px 25px rgba(0, 0, 0, 0.1)'"
                     [style.transform]="'translateY(0)'">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 12px;">
                    <h3 style="font-size: 20px; font-weight: bold; color: #1f2937; margin: 0;">Online Learning & Workshops</h3>
                    <span style="font-size: 14px; color: #6b7280; background-color: #f3f4f6; padding: 4px 12px; border-radius: 20px;">2020 - Present</span>
                  </div>
                  <p style="color: #4b5563; font-weight: 600; margin: 0 0 16px 0; font-size: 16px;">Continuous Professional Development</p>
                  <p style="color: #6b7280; margin: 0 0 16px 0; line-height: 1.6;">Ongoing learning through online platforms and technical workshops</p>
                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #ef4444; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Advanced JavaScript & TypeScript (Udemy, Coursera)</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #ef4444; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">System Design Interview Preparation (Educative.io)</span>
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: #ef4444; font-weight: bold; margin-top: 2px;">•</span>
                      <span style="color: #6b7280; line-height: 1.5;">Machine Learning Fundamentals (Fast.ai, Andrew Ng)</span>
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
export class EducationComponent {}
