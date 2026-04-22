import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2.5 font-bold text-lg w-fit">
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-indigo-600 text-white text-xs font-bold">
                CB
              </span>
              <span>ContentBlock</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              A modern blog for developers and creators. Stay up to date with the latest in web development.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/blog', label: 'Blog' },
                { to: '/about', label: 'About' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'CSS', 'TypeScript', 'Performance', 'Tools'].map(cat => (
                <Link key={cat} to={`/blog?category=${cat}`} className="tag text-xs">
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} ContentBlock. Built with React + Vite + Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
