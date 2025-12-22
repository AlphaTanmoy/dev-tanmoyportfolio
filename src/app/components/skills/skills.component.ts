import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" style="padding: 80px 0; background-color: #f9fafb;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 16px;">
        <div style="text-align: center; margin-bottom: 48px;">
          <h2 style="font-size: 48px; font-weight: bold; background: linear-gradient(to right, #3b82f6, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Tech Stack</h2>
          <p style="font-size: 20px; color: #6b7280; margin-top: 16px;">Technologies I work with</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 32px; max-width: 1000px; margin: 0 auto;">
          <!-- Frontend Technologies -->
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 24px; font-weight: bold; color: #3b82f6;" 
                 onmouseover="this.style.transform='translateY(-8px)'" 
                 onmouseout="this.style.transform='translateY(0)'">
              Angular
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">Angular</h4>
            <p style="font-size: 14px; color: #6b7280;">Frontend Framework</p>
          </div>
          
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 24px; font-weight: bold; color: #61dafb;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              React
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">React</h4>
            <p style="font-size: 14px; color: #6b7280;">Frontend Library</p>
          </div>
          
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 20px; font-weight: bold; color: #3178c6;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              TS
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">TypeScript</h4>
            <p style="font-size: 14px; color: #6b7280;">Programming Language</p>
          </div>
          
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 24px; font-weight: bold; color: #f7df1e;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              JS
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">JavaScript</h4>
            <p style="font-size: 14px; color: #6b7280;">Programming Language</p>
          </div>
          
          <!-- Backend Technologies -->
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 24px; font-weight: bold; color: #339933;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              Node
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">Node.js</h4>
            <p style="font-size: 14px; color: #6b7280;">Runtime Environment</p>
          </div>
          
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 24px; font-weight: bold; color: #3776ab;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              Py
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">Python</h4>
            <p style="font-size: 14px; color: #6b7280;">Programming Language</p>
          </div>
          
          <!-- Database Technologies -->
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 20px; font-weight: bold; color: #336791;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              PG
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">PostgreSQL</h4>
            <p style="font-size: 14px; color: #6b7280;">Database</p>
          </div>
          
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 20px; font-weight: bold; color: #47a248;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              Mongo
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">MongoDB</h4>
            <p style="font-size: 14px; color: #6b7280;">Database</p>
          </div>
          
          <!-- Tools & Cloud -->
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 24px; font-weight: bold; color: #f05032;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              Git
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">Git</h4>
            <p style="font-size: 14px; color: #6b7280;">Version Control</p>
          </div>
          
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 20px; font-weight: bold; color: #ff9900;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              AWS
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">AWS</h4>
            <p style="font-size: 14px; color: #6b7280;">Cloud Platform</p>
          </div>
          
          <div style="text-align: center; group">
            <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: white; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; cursor: pointer; font-size: 20px; font-weight: bold; color: #2496ed;"
                 onmouseover="this.style.transform='translateY(-8px)'"
                 onmouseout="this.style.transform='translateY(0)'">
              Docker
            </div>
            <h4 style="font-weight: 600; color: #111827; margin-bottom: 4px;">Docker</h4>
            <p style="font-size: 14px; color: #6b7280;">Containerization</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class SkillsComponent {}
