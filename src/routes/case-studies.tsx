import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { marked } from 'marked'
import { useState } from 'react'

export const Route = createFileRoute('/case-studies')({
  component: CaseStudies,
})

function CaseStudies() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-3">
            Selected Work
          </p>
          <h1 className="text-4xl font-bold text-warm-900 mb-4">
            Case Studies
          </h1>
          <p className="text-warm-700 leading-relaxed text-lg">
            A closer look at projects spanning UI/UX design, brand identity, and
            digital product design — from research and strategy through final
            execution.
          </p>
        </div>

        <div className="space-y-10">
          {allProjects.map((project, index) => {
            const isExpanded = expandedProject === project._meta.path
            return (
              <Card
                key={project._meta.path}
                className="overflow-hidden border-border/50 hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-primary/60 uppercase tracking-widest">
                      Case Study {String(index + 1).padStart(2, '0')}
                    </span>
                    <CardTitle className="text-2xl text-warm-900">
                      {project.title}
                    </CardTitle>
                    <p className="text-warm-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <button
                    onClick={() =>
                      setExpandedProject(isExpanded ? null : project._meta.path)
                    }
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-4 flex items-center gap-2"
                  >
                    <span
                      className="inline-block transition-transform duration-200 text-xs"
                      style={{
                        transform: isExpanded
                          ? 'rotate(90deg)'
                          : 'rotate(0deg)',
                      }}
                    >
                      ▶
                    </span>
                    {isExpanded ? 'Hide details' : 'Read full case study'}
                  </button>
                  {isExpanded && project.content && (
                    <div
                      className="prose prose-sm sm:prose-base max-w-none mt-6 pt-6 border-t border-border/40 text-warm-700 prose-headings:text-warm-900 prose-headings:font-semibold prose-strong:text-warm-800 prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-ul:my-3 prose-li:my-1 prose-p:my-3 prose-img:rounded-lg prose-img:shadow-md prose-img:my-8"
                      dangerouslySetInnerHTML={{
                        __html: marked(project.content),
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
