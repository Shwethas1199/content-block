import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostBySlug, getRelatedPosts } from '../data/posts'
import PostCard from '../components/PostCard'
import { useEffect } from 'react'

export default function PostDetail() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!post) return <Navigate to="/blog" replace />

  const related = getRelatedPosts(post.id, post.category)

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Article */}
        <article className="flex-1 min-w-0">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All articles
          </Link>

          {/* Cover */}
          <div className={`h-56 md:h-72 rounded-2xl bg-gradient-to-br ${post.coverColor} mb-8 flex items-end p-6`}>
            <span className="tag bg-white/20 text-white border-0 text-sm">{post.category}</span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                {post.author.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold">{post.author.name}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-400 dark:text-gray-500 ml-auto">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">{post.title}</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">{post.excerpt}</p>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {post.content.trim().split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{line.replace('## ', '')}</h2>
              }
              if (line.startsWith('```')) {
                return null
              }
              if (line.trim() === '') {
                return <br key={i} />
              }
              return (
                <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  {line}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-2">
            <span className="tag">{post.category}</span>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-24 flex flex-col gap-6">
            {/* Author card */}
            <div className="card p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                Written by
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">Author at ContentBlock</p>
                </div>
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                  Related articles
                </h3>
                <div className="flex flex-col gap-4">
                  {related.map(p => (
                    <Link
                      key={p.id}
                      to={`/blog/${p.slug}`}
                      className="card p-4 flex gap-3 group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${p.coverColor} shrink-0`} />
                      <div className="flex flex-col gap-1 min-w-0">
                        <p className="text-sm font-medium leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-2 transition-colors">
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{p.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  )
}
