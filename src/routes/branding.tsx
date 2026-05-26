import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/branding')({
  component: Branding,
})

type BrandProject = {
  title: string
  description: string
  tags: string[]
  images: { src: string; alt: string }[]
  span?: string
}

const brandProjects: BrandProject[] = [
  {
    title: 'Say Hello Neighbor',
    description:
      'Brand identity for Say Hello Neighbor, a community-focused initiative. The project included a hand-lettered wordmark with a playful waving motif, a stacked logo variation, and a social media icon featuring a heart-in-speech-bubble mark.',
    tags: ['Logo Design', 'Brand Identity', 'Nonprofit'],
    images: [
      {
        src: '/images/branding/say-hello-neighbor-logo.png',
        alt: 'Say Hello Neighbor logo with waving hand',
      },
      {
        src: '/images/branding/say-hello-neighbor-wordmark.png',
        alt: 'Say Hello Neighbor wordmark',
      },
      {
        src: '/images/branding/say-hello-neighbor-icon.png',
        alt: 'Say Hello Neighbor social media icon',
      },
    ],
    span: 'md:col-span-2',
  },
  {
    title: 'Dana',
    description:
      'Character-driven logo design for Dana, featuring a stylized illustration of a person with round glasses and a pencil in their hair. The embossed mockup showcases the logo\'s clean linework and personality.',
    tags: ['Logo Design', 'Character Illustration', 'Personal Brand'],
    images: [
      {
        src: '/images/branding/dana-logo-mockup.png',
        alt: 'Dana logo mockup on textured paper',
      },
    ],
  },
  {
    title: 'Harvest Haven Co',
    description:
      'Vintage-inspired badge logo for Harvest Haven Co, a farm-themed brand. The design features a barn, rolling fields, and an established date — rendered as a dimensional metal mockup.',
    tags: ['Logo Design', 'Badge', 'Agriculture'],
    images: [
      {
        src: '/images/branding/harvest-haven-logo-mockup.png',
        alt: 'Harvest Haven Co logo mockup on wood',
      },
    ],
  },
  {
    title: 'Hoppy Boba',
    description:
      'Fun, colorful logo for Hoppy Boba, a boba tea brand. The design combines a frog character with a boba cup, using pastel green and pink tones. The embossed mockup highlights the playful, approachable feel.',
    tags: ['Logo Design', 'Food & Beverage', 'Character Design'],
    images: [
      {
        src: '/images/branding/hoppy-boba-logo-mockup.png',
        alt: 'Hoppy Boba logo mockup on textured paper',
      },
    ],
    span: 'md:col-span-2',
  },
  {
    title: 'Salt Tampa Outreach',
    description:
      'Clean, modern logo for Salt Tampa Outreach, a community organization. The circular mark incorporates a cityscape silhouette representing Tampa, paired with a simple sans-serif wordmark.',
    tags: ['Logo Design', 'Nonprofit', 'Community'],
    images: [
      {
        src: '/images/branding/salt-tampa-outreach.png',
        alt: 'Salt Tampa Outreach logo',
      },
    ],
  },
  {
    title: 'Blue Stingray Character',
    description:
      'A vibrant character illustration of a blue stingray with a cute, kawaii-inspired aesthetic. Features gradient blues with sparkling accents and blushing cheeks.',
    tags: ['Illustration', 'Character Design', 'Mascot'],
    images: [
      {
        src: '/images/branding/blue-stingray.png',
        alt: 'Blue stingray character illustration',
      },
    ],
  },
]

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

function Branding() {
  const [lightbox, setLightbox] = useState<{
    projectIndex: number
    imageIndex: number
  } | null>(null)

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Page header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest mb-3">
            Creative Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4">
            Branding &amp; Logo Design
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-mint mb-6" />
          <p className="text-warm-700 leading-relaxed text-lg">
            A collection of brand identities, logo designs, and character
            illustrations — from concept development and visual exploration
            through polished, presentation-ready mockups.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {brandProjects.map((project, index) => {
            const colorIndex = index % accentColors.length
            const hasMultipleImages = project.images.length > 1

            return (
              <article
                key={project.title}
                className={`group rounded-2xl overflow-hidden border border-white/60 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-pastel-pink/10 transition-all duration-300 ${project.span || ''}`}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${accentColors[colorIndex]}`}
                />

                {hasMultipleImages ? (
                  <div className="grid grid-cols-3 gap-px bg-pastel-pink/10">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative overflow-hidden cursor-pointer bg-white"
                        onClick={() =>
                          setLightbox({
                            projectIndex: index,
                            imageIndex: imgIndex,
                          })
                        }
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-48 object-contain p-3 group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() =>
                      setLightbox({ projectIndex: index, imageIndex: 0 })
                    }
                  >
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold text-white ${accentDots[colorIndex]}`}
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

                  <h2 className="text-xl font-bold text-warm-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-warm-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              Close
            </button>
            <img
              src={
                brandProjects[lightbox.projectIndex].images[
                  lightbox.imageIndex
                ].src
              }
              alt={
                brandProjects[lightbox.projectIndex].images[
                  lightbox.imageIndex
                ].alt
              }
              className="w-full h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white/80 text-center mt-4 text-sm font-medium">
              {brandProjects[lightbox.projectIndex].title}
              {brandProjects[lightbox.projectIndex].images.length > 1 && (
                <span className="text-white/50 ml-2">
                  ({lightbox.imageIndex + 1} /{' '}
                  {brandProjects[lightbox.projectIndex].images.length})
                </span>
              )}
            </p>

            {/* Navigation arrows for multi-image projects */}
            {brandProjects[lightbox.projectIndex].images.length > 1 && (
              <>
                {lightbox.imageIndex > 0 && (
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightbox({
                        ...lightbox,
                        imageIndex: lightbox.imageIndex - 1,
                      })
                    }}
                  >
                    &larr;
                  </button>
                )}
                {lightbox.imageIndex <
                  brandProjects[lightbox.projectIndex].images.length - 1 && (
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightbox({
                        ...lightbox,
                        imageIndex: lightbox.imageIndex + 1,
                      })
                    }}
                  >
                    &rarr;
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
