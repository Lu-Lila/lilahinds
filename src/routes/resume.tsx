import { marked } from 'marked'

import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-warm-900">
            Resume
          </h1>
          <p className="text-lg text-warm-700">
            Experience, Education & Skills
          </p>
          <Separator className="mt-8" />
        </div>

        {/* Summary */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-warm-900">
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <p className="flex-1 leading-relaxed text-warm-700">
                Aspiring UX/UI designer with a passion for creating
                accessible, user-centered digital experiences. Skilled in
                Figma, brand identity, and iterative design processes.
                Experienced in redesigning digital communications, building
                component-based UI systems, and collaborating with
                cross-functional stakeholders. Looking to contribute design
                thinking and visual storytelling to impactful projects.
              </p>
              <img
                src="/headshot-on-white.jpg"
                alt="Lila Hinds"
                className="w-36 h-44 rounded-2xl object-cover shadow-sm"
              />
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-warm-900">
            Experience
          </h2>
          <div className="space-y-6">
            {allJobs.map((job) => (
              <Card key={job.jobTitle} className="border-border/50">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-xl text-warm-900">
                        {job.jobTitle}
                      </CardTitle>
                      <p className="font-medium text-warm-700">
                        {job.company} — {job.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm w-fit">
                      {new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      {' — '}
                      {job.endDate
                        ? new Date(job.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                        : 'Present'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 leading-relaxed text-warm-700">
                    {job.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {job.content && (
                    <div
                      className="prose prose-sm max-w-none text-warm-700"
                      dangerouslySetInnerHTML={{
                        __html: marked(job.content),
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-warm-900">
            Skills
          </h2>
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-warm-900 mb-3">Design Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-warm-900 mb-3">Design Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Brand Identity', 'Typography'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-warm-900 mb-3">UX Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {['User Research', 'Persona Mapping', 'Usability Testing', 'Information Architecture', 'Accessibility'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-warm-900 mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Stakeholder Communication', 'Iterative Feedback', 'Collaboration', 'Attention to Detail', 'Storytelling'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-warm-900">
            Education
          </h2>
          <div className="space-y-6">
            {allEducations.map((education) => (
              <Card key={education.school} className="border-border/50">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl text-warm-900">
                        {education.school}
                      </CardTitle>
                      <p className="text-warm-700 mt-1">{education.summary}</p>
                    </div>
                    <Badge variant="secondary" className="text-sm w-fit">
                      {new Date(education.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      {' — '}
                      {education.endDate
                        ? new Date(education.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                        : 'Present'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {education.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {education.content && (
                    <div
                      className="prose prose-sm max-w-none text-warm-700"
                      dangerouslySetInnerHTML={{
                        __html: marked(education.content),
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
