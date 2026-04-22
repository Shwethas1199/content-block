export const categories = [
  'All',
  'React',
  'JavaScript',
  'CSS',
  'Performance',
  'TypeScript',
  'Tools',
]

export const posts = [
  {
    id: 1,
    slug: 'getting-started-with-react-18',
    title: 'Getting Started with React 18: What You Need to Know',
    excerpt:
      'React 18 introduces concurrent rendering, automatic batching, and new hooks. Here\'s a practical guide to upgrading and using the new features.',
    content: `
React 18 is a major release that brings powerful new features to the framework. Let's explore the most important changes.

## Automatic Batching

In React 18, state updates inside timeouts, promises, and native event handlers are now automatically batched. This means fewer re-renders and better performance.

\`\`\`jsx
setTimeout(() => {
  setCount(c => c + 1); // These are now batched
  setFlag(f => !f);     // Only one re-render!
}, 1000);
\`\`\`

## Concurrent Rendering

The most significant change is the new concurrent renderer. It allows React to prepare multiple versions of the UI simultaneously without blocking the main thread.

## New Hooks

React 18 introduces \`useTransition\`, \`useDeferredValue\`, and \`useId\`. These hooks let you manage priority transitions and generate unique IDs for accessibility.

## Upgrading

Update your root render call from \`ReactDOM.render\` to \`ReactDOM.createRoot\`:

\`\`\`jsx
// Before
ReactDOM.render(<App />, document.getElementById('root'));

// After
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

React 18 is backward compatible, so most apps won't need significant changes to upgrade.
    `,
    category: 'React',
    author: { name: 'Alex Johnson', avatar: 'AJ' },
    date: '2026-04-10',
    readTime: '5 min read',
    coverColor: 'from-violet-500 to-indigo-600',
    featured: true,
  },
  {
    id: 2,
    slug: 'mastering-tailwind-css-layouts',
    title: 'Mastering Tailwind CSS Layouts with Flexbox and Grid',
    excerpt:
      'Tailwind makes building responsive layouts fast. Learn the utility classes for Flexbox and Grid that you\'ll use every day.',
    content: `
Tailwind CSS provides utility classes that map directly to CSS properties, making layout work intuitive and fast.

## Flexbox Essentials

Start any flex container with \`flex\` and control direction, alignment, and spacing:

\`\`\`html
<div class="flex items-center justify-between gap-4">
  <span>Left</span>
  <span>Right</span>
</div>
\`\`\`

## Grid Layouts

Define columns with \`grid-cols-{n}\` and let content flow naturally:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
\`\`\`

## Responsive Breakpoints

Prefix any utility with a breakpoint to apply it conditionally: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\`, \`2xl:\`.

## Container Queries

With Tailwind v3.3+, you can use \`@container\` for component-level responsiveness instead of viewport-based breakpoints.

This approach lets you build truly reusable components that adapt to their container size rather than the window size.
    `,
    category: 'CSS',
    author: { name: 'Maria Chen', avatar: 'MC' },
    date: '2026-04-08',
    readTime: '6 min read',
    coverColor: 'from-sky-500 to-cyan-600',
    featured: true,
  },
  {
    id: 3,
    slug: 'javascript-array-methods',
    title: '10 JavaScript Array Methods You Should Use Daily',
    excerpt:
      'Modern JavaScript array methods like map, filter, reduce, and flatMap can make your code cleaner and more expressive.',
    content: `
JavaScript's built-in array methods are powerful tools for data transformation. Here are the ones you should reach for first.

## map()

Transform every element in an array:

\`\`\`js
const prices = [10, 20, 30];
const withTax = prices.map(p => p * 1.1);
// [11, 22, 33]
\`\`\`

## filter()

Keep only elements that satisfy a condition:

\`\`\`js
const active = users.filter(u => u.isActive);
\`\`\`

## reduce()

Accumulate values into a single result:

\`\`\`js
const total = cart.reduce((sum, item) => sum + item.price, 0);
\`\`\`

## flatMap()

Map and flatten in one operation, great for expanding nested data:

\`\`\`js
const words = sentences.flatMap(s => s.split(' '));
\`\`\`

## find() and findIndex()

Locate the first element or its position matching a predicate:

\`\`\`js
const admin = users.find(u => u.role === 'admin');
\`\`\`

Mastering these methods leads to more declarative, readable code that's easier to test and maintain.
    `,
    category: 'JavaScript',
    author: { name: 'Sam Rivera', avatar: 'SR' },
    date: '2026-04-05',
    readTime: '7 min read',
    coverColor: 'from-amber-500 to-orange-600',
    featured: false,
  },
  {
    id: 4,
    slug: 'react-performance-tips',
    title: 'React Performance: Memoization and Avoiding Unnecessary Renders',
    excerpt:
      'Learn when and how to use React.memo, useMemo, and useCallback to prevent expensive re-renders in your apps.',
    content: `
Performance optimization in React is about rendering the right components at the right time.

## React.memo

Wrap a component with \`React.memo\` to skip re-renders if props haven't changed:

\`\`\`jsx
const ExpensiveList = React.memo(({ items }) => (
  <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
));
\`\`\`

## useMemo

Cache expensive computed values between renders:

\`\`\`jsx
const sortedItems = useMemo(
  () => [...items].sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);
\`\`\`

## useCallback

Stabilize function references passed as props:

\`\`\`jsx
const handleClick = useCallback((id) => {
  deleteItem(id);
}, [deleteItem]);
\`\`\`

## Profiling First

Always use the React DevTools Profiler before optimizing. Premature optimization adds complexity without measurable benefit. Only memoize when you've identified a performance bottleneck.
    `,
    category: 'Performance',
    author: { name: 'Alex Johnson', avatar: 'AJ' },
    date: '2026-04-01',
    readTime: '8 min read',
    coverColor: 'from-rose-500 to-pink-600',
    featured: false,
  },
  {
    id: 5,
    slug: 'typescript-generics-explained',
    title: 'TypeScript Generics: Write Once, Use Everywhere',
    excerpt:
      'Generics are TypeScript\'s superpower. Learn how to write reusable, type-safe functions and data structures.',
    content: `
Generics allow you to create components that work with any type while still maintaining full type safety.

## Basic Generic Function

\`\`\`ts
function identity<T>(value: T): T {
  return value;
}

const num = identity(42);    // number
const str = identity('hi');  // string
\`\`\`

## Generic Constraints

Use \`extends\` to restrict what types a generic can be:

\`\`\`ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\`

## Generic Interfaces

\`\`\`ts
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserResponse = ApiResponse<User>;
type PostsResponse = ApiResponse<Post[]>;
\`\`\`

## Conditional Types

\`\`\`ts
type IsArray<T> = T extends any[] ? true : false;
\`\`\`

Generics are the foundation of most utility types in TypeScript's standard library like \`Partial<T>\`, \`Required<T>\`, and \`Pick<T, K>\`.
    `,
    category: 'TypeScript',
    author: { name: 'Maria Chen', avatar: 'MC' },
    date: '2026-03-28',
    readTime: '9 min read',
    coverColor: 'from-blue-500 to-indigo-600',
    featured: true,
  },
  {
    id: 6,
    slug: 'vite-vs-webpack-2026',
    title: 'Vite vs Webpack in 2026: Which Should You Choose?',
    excerpt:
      'Vite has become the default build tool for new projects. Here\'s how it compares to Webpack and when you might still prefer Webpack.',
    content: `
The JavaScript tooling ecosystem has evolved significantly. Vite has emerged as the standard for new projects, but Webpack remains relevant for large enterprises.

## Why Vite Won

Vite uses native ES modules in development, meaning no bundling during dev. This results in cold starts under 500ms regardless of project size.

Hot Module Replacement (HMR) is near-instant because Vite only invalidates modules that changed, rather than rebuilding.

## When Webpack Still Makes Sense

- **Legacy codebases**: Webpack has mature plugin ecosystems for complex setups
- **Micro-frontends with Module Federation**: Webpack's Module Federation plugin is battle-tested
- **Advanced code splitting**: Webpack's chunk splitting logic is more configurable
- **Enterprise with custom loaders**: Teams with extensive Webpack configurations may not benefit from migrating

## Migrating to Vite

Most Create React App and Webpack projects can migrate in under an hour. Replace \`webpack.config.js\` with \`vite.config.js\` and update \`index.html\` to be in the root directory.

For most new projects in 2026, Vite is the clear choice.
    `,
    category: 'Tools',
    author: { name: 'Sam Rivera', avatar: 'SR' },
    date: '2026-03-22',
    readTime: '5 min read',
    coverColor: 'from-emerald-500 to-teal-600',
    featured: false,
  },
]

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug) || null
}

export function getPostsByCategory(category) {
  if (!category || category === 'All') return posts
  return posts.filter(p => p.category === category)
}

export function getFeaturedPosts() {
  return posts.filter(p => p.featured)
}

export function getRelatedPosts(currentId, category) {
  return posts.filter(p => p.id !== currentId && p.category === category).slice(0, 2)
}
