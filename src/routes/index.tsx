import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featuredProjects = allProjects.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero / About Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <p className="text-primary font-medium text-sm tracking-wide uppercase">
              UI/UX & Branding Designer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-warm-900 leading-tight">
              Hi, I'm Lila Hinds
            </h1>
            <p className="text-lg text-warm-700 leading-relaxed max-w-xl">
              I design thoughtful digital experiences that put people first.
              With a focus on UI/UX and brand identity, I create designs that
              are clear, accessible, and rooted in empathy.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                View Case Studies
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-warm-700 rounded-xl font-medium hover:bg-accent transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden bg-rose-50 shadow-sm">
              <img
                src="/headshot-on-white.jpg"
                alt="Lila Hinds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-white border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-warm-900">About Me</h2>
            <p className="text-warm-700 leading-relaxed">
              I'm a UX/UI designer with experience in branding, web design, and
              digital communications. Most recently, I worked as a UX/UI Design
              Intern at Seminole State College of Florida, where I redesigned
              email communications for improved clarity and accessibility, and
              coordinated with stakeholders through iterative feedback loops.
            </p>
            <p className="text-warm-700 leading-relaxed">
              I believe great design starts with listening — understanding the
              people who will use it and the problems it needs to solve. Whether
              it's crafting a brand identity from scratch or improving an
              existing user experience, I bring a thoughtful, detail-oriented
              approach to every project.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {['Figma', 'UI Design', 'UX Research', 'Branding', 'Accessibility', 'Adobe Creative Suite'].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-warm-900">Featured Work</h2>
          <Link
            to="/case-studies"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project._meta.path}
              className="group rounded-xl border border-border/50 bg-white p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-warm-900 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-warm-700 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
