import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/branding')({
  component: Branding,
})

const featuredProject = {
  name: 'Say Hello Neighbor',
  description:
    'A complete brand identity system for a community-focused organization. This project encompassed logo design, typography selection, color palette development, and comprehensive brand guidelines to ensure consistency across all touchpoints.',
  tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Typography'],
  logos: [
    {
      src: '/branding/hello-wave.png',
      alt: 'Say Hello Neighbor logo with wave illustration',
    },
    {
      src: '/branding/say-hello-neighbor-text.png',
      alt: 'Say Hello Neighbor text logo',
    },
  ],
  guidelines: [
    {
      src: '/branding/shn-brand-guidelines-cover.png',
      alt: 'Brand Guidelines cover',
      label: 'Brand Guidelines',
    },
    {
      src: '/branding/shn-logo-variants.png',
      alt: 'Primary logo variants on dark and light backgrounds',
      label: 'Logo Variants',
    },
    {
      src: '/branding/shn-shades-palette.png',
      alt: 'Brand color shades palette',
      label: 'Color Palette',
    },
    {
      src: '/branding/shn-typography-chapter.png',
      alt: 'Typography chapter opener',
      label: 'Typography',
    },
    {
      src: '/branding/shn-type-hierarchy.png',
      alt: 'Type hierarchy and headline styles',
      label: 'Type Hierarchy',
    },
    {
      src: '/branding/shn-typography.png',
      alt: 'Typeface specimen — Plus Jakarta Sans',
      label: 'Typeface',
    },
  ],
}

const logoProjects = [
  {
    name: 'Dana',
    description:
      'A playful character-driven logo featuring a stylized face with round glasses and a pencil — perfect for a creative or educational brand.',
    tags: ['Logo Design', 'Character Design'],
    image: '/branding/dana-logo-mockup.png',
  },
  {
    name: 'Harvest Haven Co',
    description:
      'A vintage emblem logo for an agricultural brand, featuring a barn and rolling fields encased in an oval badge with ribbon banners.',
    tags: ['Logo Design', 'Emblem', 'Vintage'],
    image: '/branding/harvest-haven-logo-mockup.png',
  },
  {
    name: 'Hoppy Boba',
    description:
      'A fun, colorful logo for a bubble tea brand featuring an illustrated boba cup character with a frog-inspired personality.',
    tags: ['Logo Design', 'Illustration', 'Food & Beverage'],
    image: '/branding/hoppy-boba-logo-mockup.png',
  },
  {
    name: 'Salt Tampa Outreach',
    description:
      'A clean, modern logomark for an urban outreach organization, pairing a circular cityscape illustration with bold sans-serif typography.',
    tags: ['Logo Design', 'Nonprofit'],
    image: '/branding/salt-tampa-outreach.png',
  },
]

function Branding() {
  const [guidelineOpen, setGuidelineOpen] = useState(true)

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Page header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest mb-3">
            Creative Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4">
            Branding
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-mint mb-6" />
          <p className="text-warm-700 leading-relaxed text-lg">
            Logo design, brand identity systems, and visual guidelines —
            crafting cohesive brand experiences from concept to completion.
          </p>
        </div>

        {/* Featured project: Say Hello Neighbor */}
        <section className="mb-20">
          <div className="rounded-2xl overflow-hidden border border-white/60 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="h-1 bg-gradient-to-r from-pastel-pink to-pastel-lavender" />

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary/60">
                  Featured Project
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.tags.map((tag) => (
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

              <h2 className="text-2xl sm:text-3xl font-bold text-warm-900 mb-3">
                {featuredProject.name}
              </h2>
              <p className="text-warm-700 leading-relaxed max-w-3xl mb-8">
                {featuredProject.description}
              </p>

              {/* Logo showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {featuredProject.logos.map((logo) => (
                  <div
                    key={logo.src}
                    className="bg-white rounded-xl border border-pastel-pink/20 p-8 flex items-center justify-center shadow-sm"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-32 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Brand guidelines accordion */}
              <button
                onClick={() => setGuidelineOpen(!guidelineOpen)}
                className="group flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-4"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${guidelineOpen ? 'rotate-0' : '-rotate-90'}`}
                />
                Brand Guidelines
              </button>

              {guidelineOpen && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredProject.guidelines.map((page) => (
                    <div key={page.src} className="group relative">
                      <div className="rounded-xl overflow-hidden border border-pastel-pink/15 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <img
                          src={page.src}
                          alt={page.alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="mt-2 text-xs font-medium text-warm-700/70 text-center">
                        {page.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Logo projects grid */}
        <section>
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-900 mb-3">
              Logo Design
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-pastel-mint to-pastel-teal mb-4" />
            <p className="text-warm-700 leading-relaxed max-w-2xl">
              A selection of logo concepts and mockups across industries —
              from playful character marks to refined emblems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {logoProjects.map((project, index) => {
              const accents = [
                'from-pastel-mint to-pastel-teal',
                'from-pastel-peach to-pastel-pink',
                'from-pastel-lavender to-pastel-pink',
                'from-pastel-pink to-pastel-lavender',
              ]
              return (
                <div
                  key={project.name}
                  className="rounded-2xl overflow-hidden border border-white/60 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-pastel-pink/10 transition-all duration-300"
                >
                  <div
                    className={`h-1 bg-gradient-to-r ${accents[index % accents.length]}`}
                  />
                  <div className="aspect-[4/3] overflow-hidden bg-warm-50">
                    <img
                      src={project.image}
                      alt={`${project.name} logo mockup`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
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
                    <h3 className="text-lg font-bold text-warm-900 mb-1.5">
                      {project.name}
                    </h3>
                    <p className="text-sm text-warm-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
