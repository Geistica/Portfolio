/* 
Samuel's Portfolio Website - Next.js + Tailwind CSS
Structure: Homepage, Portfolio (with project pages), Blog (with post pages), About, Contact (Formspree)
*/

// Next.js pages structure (in /pages):

// pages/index.tsx - Homepage
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold">Hi, I'm Samuel</h1>
      <p className="mt-2 text-lg">IT Specialist | Graphics & VFX</p>
      <nav className="mt-6 space-x-4">
        <a href="/portfolio" className="underline">Portfolio</a>
        <a href="/blog" className="underline">Blog</a>
        <a href="/about" className="underline">About</a>
        <a href="/contact" className="underline">Contact</a>
      </nav>
    </main>
  );
}

// pages/portfolio/index.tsx - Portfolio Overview
import Link from 'next/link';
export default function Portfolio() {
  const projects = [
    { slug: 'project-one', title: 'Project One', description: 'Short desc' },
    { slug: 'project-two', title: 'Project Two', description: 'Another desc' },
  ];
  return (
    <main className="bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <ul className="space-y-4">
        {projects.map((proj) => (
          <li key={proj.slug}>
            <Link href={`/portfolio/${proj.slug}`}> 
              <a className="text-xl underline">{proj.title}</a>
            </Link>
            <p>{proj.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

// pages/portfolio/[slug].tsx - Project Detail Page
import { useRouter } from 'next/router';
export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <main className="bg-black text-white p-6">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
      <p>Details coming soon.</p>
    </main>
  );
}

// pages/blog/index.tsx - Blog Overview
export default function Blog() {
  const posts = [
    { slug: 'how-to-edit', title: 'How to Edit Graphics' },
    { slug: 'vfx-basics', title: 'VFX Basics' },
  ];
  return (
    <main className="bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`} className="text-xl underline">{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

// pages/blog/[slug].tsx - Blog Post Page
import { useRouter } from 'next/router';
export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <main className="bg-black text-white p-6">
      <h1 className="text-3xl font-bold">Post: {slug}</h1>
      <p>Content coming soon.</p>
    </main>
  );
}

// pages/about.tsx
export default function About() {
  return (
    <main className="bg-black text-white p-6">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-2">I'm Samuel, an IT pro who loves creating graphics and VFX.</p>
    </main>
  );
}

// pages/contact.tsx
export default function Contact() {
  return (
    <main className="bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form action="https://formspree.io/f/your-id" method="POST" className="space-y-4 max-w-md">
        <input name="name" placeholder="Name" required className="w-full p-2 bg-gray-900 text-white" />
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 bg-gray-900 text-white" />
        <textarea name="message" placeholder="Your message" required className="w-full p-2 bg-gray-900 text-white" />
        <button type="submit" className="bg-white text-black px-4 py-2">Send</button>
      </form>
    </main>
  );
}
