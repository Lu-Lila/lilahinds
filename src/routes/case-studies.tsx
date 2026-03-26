import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { marked } from 'marked'
import { useState } from 'react'

export const Route = createFileRoute('/case-studies')({
  component: CaseStudies,
})

const accentColors = [
  'from-pastel-pink to-pastel-lavender',
  'from-pastel-mint to-pastel-teal',
  'from-pastel-lavender to-pastel-pink',
  'from-pastel-peach to-pastel-pink',
]

const accentDots = [
  'bg-pastel-pink',
  'bg-pastel-mint',
  'bg-pastel-lavender',
  'bg-pastel-peach',
]

function CaseStudies() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Page header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest mb-3">
            Selected Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4">
            Case Studies
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-mint mb-6" />
          <p className="text-warm-700 leading-relaxed text-lg">
            A closer look at projects spanning UI/UX design, brand identity, and
            digital product design — from research and strategy through final
            execution.
          </p>
        </div>

        {/* Case study list */}
        <div className="space-y-16">
          {allProjects.map((project, index) => {
            const isExpanded = expandedProject === project._meta.path
            const colorIndex = index % accentColors.length
            return (
              <article key={project._meta.path}>
                {/* Case study card */}
                <div className="rounded-2xl overflow-hidden border border-white/60 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-pastel-pink/10 transition-all duration-300">
                  {/* Gradient accent bar */}
                  <div
                    className={`h-1 bg-gradient-to-r ${accentColors[colorIndex]}`}
                  />

                  <div className="p-6 sm:p-8">
                    {/* Top row: number + tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white ${accentDots[colorIndex]}`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full text-xs px-2.5 py-0.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-warm-900 mb-3">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-warm-700 leading-relaxed max-w-3xl mb-5">
                      {project.description}
                    </p>

                    {/* Expand toggle */}
                    <button
                      onClick={() =>
                        setExpandedProject(
                          isExpanded ? null : project._meta.path,
                        )
                      }
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full border border-primary/30 group-hover:border-primary/50 transition-all duration-200 text-[10px] ${isExpanded ? 'rotate-90' : ''}`}
                      >
                        ▶
                      </span>
                      {isExpanded ? 'Hide case study' : 'Read case study'}
                    </button>
                  </div>

                  {/* Expanded case study content */}
                  {isExpanded && project.content && (
                    <div className="border-t border-pastel-pink/20">
                      <div className="p-6 sm:p-8 lg:p-10">
                        <div
                          className="case-study-content max-w-none text-warm-700"
                          dangerouslySetInnerHTML={{
                            __html: marked(project.content),
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
