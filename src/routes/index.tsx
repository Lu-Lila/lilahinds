import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featuredProjects = allProjects.slice(0, 3)

  const pastelColors = [
    'bg-pastel-pink-light',
    'bg-pastel-mint-light',
    'bg-pastel-lavender-light',
    'bg-pastel-peach-light',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-28">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">
              Need an awesome
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-warm-900 leading-[1.1]">
              Designer <span className="text-primary">&amp;</span>
              <br />
              <span className="italic font-normal text-pastel-lavender">Illustrator?</span>
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed max-w-xl">
              I design thoughtful digital experiences that put people first.
              With a focus on UI/UX and brand identity, I create designs that
              are clear, accessible, and rooted in empathy.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                View Case Studies
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-pastel-pink text-warm-700 rounded-full font-medium hover:bg-pastel-pink-light transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center relative">
            {/* Decorative shapes behind headshot */}
            <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-pastel-mint/40 blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-36 h-36 rounded-full bg-pastel-pink/40 blur-sm" />
            <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden shadow-xl shadow-pastel-pink/30 ring-4 ring-white/60">
              <img
                src="/1000043748-ezremove.png"
                alt="Lila Hinds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative gradient divider */}
      <div className="h-24 relative overflow-hidden">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,50 C1260,70 1380,30 1440,40 L1440,100 L0,100 Z"
            className="fill-pastel-pink-light/50"
          />
          <path
            d="M0,60 C240,20 480,80 720,40 C960,0 1200,70 1440,50 L1440,100 L0,100 Z"
            className="fill-pastel-mint-light/30"
          />
        </svg>
      </div>

      {/* Bio Section */}
      <section className="relative bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-900">About Me</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-mint mx-auto" />
            <p className="text-warm-700 leading-relaxed text-lg">
              I'm a UX/UI designer with experience in branding, web design, and
              digital communications. Most recently, I worked as a UX/UI Design
              Intern at Seminole State College of Florida, where I redesigned
              email communications for improved clarity and accessibility, and
              coordinated with stakeholders through iterative feedback loops.
            </p>
            <p className="text-warm-700 leading-relaxed text-lg">
              I believe great design starts with listening — understanding the
              people who will use it and the problems it needs to solve. Whether
              it's crafting a brand identity from scratch or improving an
              existing user experience, I bring a thoughtful, detail-oriented
              approach to every project.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {['Figma', 'UI Design', 'UX Research', 'Branding', 'Accessibility', 'Adobe Creative Suite'].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-4 py-1.5 rounded-full">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-warm-900">Featured Work</h2>
          </div>
          <Link
            to="/case-studies"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project._meta.path}
              className="group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/60 hover:shadow-xl hover:shadow-pastel-pink/10 transition-all duration-300"
            >
              {/* Colorful top accent bar */}
              <div className={`h-2 ${pastelColors[index % pastelColors.length]}`} />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-warm-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-warm-700 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Icons Row */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink-light/40 via-pastel-lavender-light/30 to-pastel-mint-light/40" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'UI/UX Design', desc: 'Intuitive, user-centered interfaces' },
              { label: 'Brand Identity', desc: 'Cohesive visual brand systems' },
              { label: 'Accessibility', desc: 'Inclusive design for everyone' },
              { label: 'Prototyping', desc: 'Interactive, testable concepts' },
            ].map((item) => (
              <div key={item.label} className="text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-sm mx-auto flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pastel-pink to-pastel-lavender" />
                </div>
                <h3 className="font-semibold text-warm-900 text-sm">{item.label}</h3>
                <p className="text-warm-700 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
