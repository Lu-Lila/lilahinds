import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/social-media')({
  component: SocialMedia,
})

const pieces = [
  {
    title: 'Chanel Winter Campaign',
    description:
      'A series of Instagram social posts designed for a luxury brand campaign, featuring product photography with seasonal winter theming and strong calls-to-action.',
    tags: ['Social Media', 'Instagram', 'Luxury Branding'],
    type: 'image' as const,
    src: '/images/social-media/chanel-social-posts.png',
    span: 'md:col-span-2',
  },
  {
    title: 'Serve513 Brand Identity',
    description:
      'Logo and brand design for Serve513, a faith-based nonprofit organization. The design integrates scripture references with a warm, community-focused visual identity.',
    tags: ['Branding', 'Logo Design', 'Nonprofit'],
    type: 'image' as const,
    src: '/images/social-media/serve513-branding.png',
    span: '',
  },
  {
    title: 'Community Event Flyer',
    description:
      'A bold, colorful flyer design with QR code integration for a community event. Features vibrant abstract shapes and strong visual hierarchy.',
    tags: ['Print Design', 'Flyer', 'Community'],
    type: 'image' as const,
    src: '/images/social-media/community-flyer-mockup.png',
    span: '',
  },
  {
    title: "Men's Shoe Donation Drive",
    description:
      'An infographic and tracking poster designed for Salt Tampa\'s men\'s shoe donation campaign. Uses clear visual hierarchy and color-coded size categories to encourage participation.',
    tags: ['Infographic', 'Nonprofit', 'Illustration'],
    type: 'image' as const,
    src: '/images/social-media/shoe-donation-infographic.png',
    span: 'md:col-span-2',
  },
  {
    title: 'Zoo Social Reel',
    description:
      'A short-form video produced for social media, showcasing engaging zoo content designed to boost engagement and reach.',
    tags: ['Video', 'Social Media', 'Short-Form'],
    type: 'video' as const,
    src: '/images/social-media/zoo-video.mp4',
    span: '',
  },
  {
    title: 'Spring Campaign Reel',
    description:
      'A seasonal spring-themed social media video with vibrant visuals, crafted for brand storytelling and audience engagement.',
    tags: ['Video', 'Social Media', 'Seasonal'],
    type: 'video' as const,
    src: '/images/social-media/spring-video.mp4',
    span: '',
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

function SocialMedia() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Page header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-primary/70 uppercase tracking-widest mb-3">
            Creative Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4">
            Social Media Marketing
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-pastel-pink via-pastel-lavender to-pastel-mint mb-6" />
          <p className="text-warm-700 leading-relaxed text-lg">
            A collection of social media campaigns, brand assets, and marketing
            materials — from Instagram post series and video reels to print
            collateral and nonprofit branding.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pieces.map((piece, index) => {
            const colorIndex = index % accentColors.length
            return (
              <article
                key={piece.title}
                className={`group rounded-2xl overflow-hidden border border-white/60 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-pastel-pink/10 transition-all duration-300 ${piece.span}`}
              >
                <div
                  className={`h-1 bg-gradient-to-r ${accentColors[colorIndex]}`}
                />

                {piece.type === 'image' ? (
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    onClick={() => setLightbox(index)}
                  >
                    <img
                      src={piece.src}
                      alt={piece.title}
                      className="w-full h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : (
                  <div className="relative overflow-hidden">
                    <video
                      src={piece.src}
                      className="w-full h-72 object-cover object-center"
                      controls
                      preload="metadata"
                      playsInline
                    />
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
                      {piece.tags.map((tag) => (
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
                    {piece.title}
                  </h2>
                  <p className="text-warm-700 text-sm leading-relaxed">
                    {piece.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && pieces[lightbox].type === 'image' && (
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
              src={pieces[lightbox].src}
              alt={pieces[lightbox].title}
              className="w-full h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white/80 text-center mt-4 text-sm font-medium">
              {pieces[lightbox].title}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
