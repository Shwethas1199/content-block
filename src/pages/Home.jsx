import { Link } from 'react-router-dom'
import { getFeaturedPosts, posts } from '../data/posts'
import PostCard from '../components/PostCard'

export default function Home() {
  const featured = getFeaturedPosts().slice(0, 3)
  const latest = posts.slice(0, 6)

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950/40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="tag mb-4 inline-block">Welcome to ContentBlock</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Ideas that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              move the web forward
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Deep dives, tutorials, and perspectives on React, JavaScript, CSS, and modern web development tools.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/blog" className="btn-primary text-base px-6 py-3">
              Browse articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/about" className="btn-secondary text-base px-6 py-3">
              About us
            </Link>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl" />
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Featured Articles</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Editor's picks worth your time</p>
          </div>
          <Link to="/blog" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(post => (
            <PostCard key={post.id} post={post} featured />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
            <p className="text-indigo-100 text-sm max-w-md">
              Get the latest articles on React, JavaScript, and web dev tools delivered straight to your inbox. No spam, ever.
            </p>
          </div>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-w-64 text-sm"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-white text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
