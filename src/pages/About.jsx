import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Alex Johnson',
    initials: 'AJ',
    role: 'React & Performance',
    bio: 'Senior frontend engineer with 8+ years building React applications. Passionate about web performance and developer experience.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    name: 'Maria Chen',
    initials: 'MC',
    role: 'CSS & TypeScript',
    bio: 'Design-oriented engineer who loves the intersection of beautiful interfaces and type-safe code.',
    color: 'from-sky-500 to-cyan-600',
  },
  {
    name: 'Sam Rivera',
    initials: 'SR',
    role: 'JavaScript & Tooling',
    bio: 'JavaScript enthusiast and open-source contributor. Focused on modern build tools and developer productivity.',
    color: 'from-amber-500 to-orange-600',
  },
]

const stats = [
  { label: 'Articles published', value: '50+' },
  { label: 'Monthly readers', value: '12k' },
  { label: 'Topics covered', value: '6' },
  { label: 'Years running', value: '2' },
]

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="tag mb-4 inline-block">About ContentBlock</span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          We write about the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            craft of building
          </span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          ContentBlock is a technical blog run by a small team of developers who care deeply about sharing knowledge, best practices, and practical guides for modern web development.
        </p>
        <Link to="/blog" className="btn-primary text-base px-6 py-3">
          Read our latest articles
        </Link>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map(stat => (
          <div key={stat.label} className="card p-6 text-center">
            <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 border border-indigo-100 dark:border-indigo-900/40 p-8 md:p-12 mb-20">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          The web moves fast. New frameworks, tools, and patterns emerge every month. ContentBlock exists to cut through the noise and provide clear, practical, and honest content that helps developers make better decisions and write better code.
          We prioritize depth over breadth — every article is written to be genuinely useful, not just discoverable.
        </p>
      </section>

      {/* Team */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Meet the team</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">The people behind the articles</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map(member => (
            <div key={member.name} className="card p-6 text-center">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                {member.initials}
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">{member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
