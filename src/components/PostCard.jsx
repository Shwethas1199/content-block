import { Link } from 'react-router-dom'

export default function PostCard({ post, featured = false }) {
  return (
    <article className="card group">
      {/* Cover */}
      <div className={`h-44 bg-gradient-to-br ${post.coverColor} flex items-end p-5`}>
        <span className="tag bg-white/20 text-white border-0">{post.category}</span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3">
        <Link to={`/blog/${post.slug}`}>
          <h2 className={`font-bold leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
              {post.author.avatar}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
            <span>{post.readTime}</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
