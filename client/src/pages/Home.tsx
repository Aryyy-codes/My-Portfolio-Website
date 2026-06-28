import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Download, Code, Zap, Cpu, Terminal, ChevronRight, Sparkles } from 'lucide-react';

/**
 * Alternative Trendy Tech Portfolio
 * Design Philosophy: Cyberpunk Neon Engineer
 * - Neon green (#00ff41) and cyan (#00d9ff) accents
 * - Dark tech background with code aesthetic
 * - Interactive animations and hover effects
 * - Modern, energetic, cutting-edge vibe
 * - Monospace typography for tech feel
 */

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function HomeAlt() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'border-b border-accent/30 backdrop-blur-md bg-background/80' : ''
        }`}
      >
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="text-2xl font-bold font-mono tracking-wider">
            <span className="text-accent animate-glow-text">&lt;</span>
            <span>AM</span>
            <span className="text-accent animate-glow-text">/&gt;</span>
          </div>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 font-mono text-sm uppercase tracking-wider relative group ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-foreground/70 hover:text-accent'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
          <a
            href="/ResumeAryanMishra.pdf"
            download
            className="btn-neon-outline text-xs"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background video-like effect */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030294422/PUbjGHmCeU2sHJw6vMbBqH/hero-tech-trendy-BK573Eu4B6W65UBi4sVftp.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-background/60 -z-10" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated code brackets */}
            <div className="mb-8 animate-slide-in-left">
              <span className="text-accent text-4xl md:text-6xl font-mono">&lt;</span>
              <span className="text-accent text-4xl md:text-6xl font-mono">&gt;</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-mono tracking-tighter animate-slide-in-right">
              Aryan
              <br />
              <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent animate-glow-text">
                Mishra
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-accent mb-4 font-mono uppercase tracking-widest animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              ECE Engineer | Software Developer
            </p>

            <p className="text-lg text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto font-mono animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              Building intelligent solutions at the intersection of software and hardware. Passionate about problem-solving, continuous learning, and creating technology that makes a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-float">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-neon group"
              >
                <span className="flex items-center justify-center gap-2">
                  Get In Touch
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a
                href="https://github.com/aryanmishra-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-outline flex items-center justify-center gap-2"
              >
                <Code size={20} />
                View Code
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              <a
                href="https://linkedin.com/in/accountofaryanmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 tech-card neon-glow hover:neon-glow-strong transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-accent" />
              </a>
              <a
                href="https://github.com/aryanmishra-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 tech-card neon-glow hover:neon-glow-strong transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-accent" />
              </a>
              <a
                href="mailto:aryanmishra.iet@gmail.com"
                className="p-3 tech-card neon-glow hover:neon-glow-strong transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-accent font-mono text-sm">↓ Scroll</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 font-mono tracking-tighter">
            <span className="text-accent">&gt;</span> About
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="tech-card neon-glow p-8 md:p-12 animate-slide-in-left">
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed font-mono">
                I'm Aryan Mishra, a B.Tech student in Electronics and Communication Engineering at IET Lucknow (Class of 2029). My journey is defined by a passion for building a strong technical foundation across software development, hardware systems, and electronics engineering.
              </p>
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed font-mono">
                While my heart leans toward software engineering, I deeply value the hardware and electronics side of technology. I believe the most impactful solutions come from understanding both domains.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed font-mono">
                I'm always open to collaborations and opportunities to grow in the tech ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 text-center group">
                <Code className="w-12 h-12 text-accent mx-auto mb-4 group-hover:animate-spin" />
                <h3 className="font-bold text-lg mb-2 font-mono">Software</h3>
                <p className="text-sm text-foreground/70 font-mono">Building scalable solutions</p>
              </div>
              <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 text-center group">
                <Cpu className="w-12 h-12 text-accent mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="font-bold text-lg mb-2 font-mono">Hardware</h3>
                <p className="text-sm text-foreground/70 font-mono">Electronics & circuits</p>
              </div>
              <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 text-center group">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="font-bold text-lg mb-2 font-mono">Innovation</h3>
                <p className="text-sm text-foreground/70 font-mono">Problem-solving mindset</p>
              </div>
              <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 text-center group">
                <Sparkles className="w-12 h-12 text-accent mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="font-bold text-lg mb-2 font-mono">Growth</h3>
                <p className="text-sm text-foreground/70 font-mono">Continuous learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030294422/PUbjGHmCeU2sHJw6vMbBqH/skills-tech-bg-24THQqXMcXd9RWADsH5NNg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-background/70 -z-10" />

        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 font-mono tracking-tighter">
            <span className="text-accent">&gt;</span> Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-8 animate-slide-in-left">
              <Terminal className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-6 text-accent font-mono">Programming</h3>
              <div className="space-y-3 font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span>C</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span>HTML</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span>CSS</span>
                </div>
              </div>
            </div>

            <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-8 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
              <Sparkles className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-6 text-accent font-mono">Design</h3>
              <div className="space-y-3 font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span>Graphic Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span>UI/UX Thinking</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span>Visual Communication</span>
                </div>
              </div>
            </div>

            <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-6 text-accent font-mono">Languages</h3>
              <div className="space-y-3 font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span>Hindi (Native)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">▸</span>
                  <span>English (Professional)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 font-mono tracking-tighter">
            <span className="text-accent">&gt;</span> Experience
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-8 animate-slide-in-right">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono">Model Aviation Club</h3>
                  <p className="text-accent font-mono font-semibold">Member</p>
                </div>
                <span className="text-sm text-foreground/60 font-mono">Feb 2026 - Present</span>
              </div>
              <p className="text-foreground/80 font-mono">IET Lucknow | Lucknow</p>
            </div>

            <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-8 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono">Parmarth IET Lucknow</h3>
                  <p className="text-accent font-mono font-semibold">Volunteer</p>
                </div>
                <span className="text-sm text-foreground/60 font-mono">Feb 2026 - Present</span>
              </div>
              <p className="text-foreground/80 font-mono">IET Lucknow | Lucknow</p>
            </div>

            <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono">BloodConnect Foundation</h3>
                  <p className="text-accent font-mono font-semibold">Volunteer</p>
                </div>
                <span className="text-sm text-foreground/60 font-mono">Jan 2026 - Present</span>
              </div>
              <p className="text-foreground/80 font-mono">Lucknow</p>
              <p className="text-foreground/70 mt-2 font-mono">Contributing to a social cause that connects blood donors with recipients in need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 font-mono tracking-tighter">
            <span className="text-accent">&gt;</span> Education
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-8 animate-slide-in-right">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono">Bachelor of Technology</h3>
                  <p className="text-accent font-mono font-semibold">Electronics & Communication Engineering</p>
                </div>
                <span className="text-sm text-foreground/60 font-mono">2025 - 2029</span>
              </div>
              <p className="text-lg text-foreground/80 font-mono">Institute of Engineering and Technology (IET), Lucknow</p>
            </div>

            <div className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-8 animate-slide-in-left">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono">Intermediate</h3>
                  <p className="text-accent font-mono font-semibold">Senior Secondary Education</p>
                </div>
                <span className="text-sm text-foreground/60 font-mono">2023 - 2024</span>
              </div>
              <p className="text-lg text-foreground/80 font-mono">Tirupati Montessori School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030294422/PUbjGHmCeU2sHJw6vMbBqH/projects-tech-bg-6zetxVinaFEkMA.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-background/80 -z-10" />

        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 font-mono tracking-tighter text-center">
            <span className="text-accent">&gt;</span> Connect
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="tech-card neon-glow p-12">
              <p className="text-lg text-foreground/80 mb-8 text-center font-mono">
                Let's build something amazing together. Reach out anytime!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a
                  href="mailto:aryanmishra.iet@gmail.com"
                  className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-6 flex items-center gap-4 group"
                >
                  <Mail className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-foreground/60 font-mono">Email</p>
                    <p className="font-semibold font-mono">aryanmishra.iet@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/accountofaryanmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-6 flex items-center gap-4 group"
                >
                  <Linkedin className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-foreground/60 font-mono">LinkedIn</p>
                    <p className="font-semibold font-mono">accountofaryanmishra</p>
                  </div>
                </a>

                <a
                  href="https://github.com/aryanmishra-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-6 flex items-center gap-4 group"
                >
                  <Github className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-foreground/60 font-mono">GitHub</p>
                    <p className="font-semibold font-mono">aryanmishra-coder</p>
                  </div>
                </a>

                <a
                  href="/ResumeAryanMishra.pdf"
                  download
                  className="tech-card neon-glow hover:neon-glow-strong transition-all duration-300 p-6 flex items-center gap-4 group"
                >
                  <Download className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-foreground/60 font-mono">Resume</p>
                    <p className="font-semibold font-mono">Download PDF</p>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:aryanmishra.iet@gmail.com"
                  className="btn-neon"
                >
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/accountofaryanmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-outline"
                >
                  Message on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 py-8 mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
            <p className="text-foreground/60">
              © 2026 Aryan Mishra. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/aryanmishra-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/accountofaryanmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:aryanmishra.iet@gmail.com"
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
