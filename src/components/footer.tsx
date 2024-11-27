import Link from 'next/link'

const links = [
  {
    label: 'Email',
    href: 'mailto:jrandallwinton@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/thejessewinton',
  },
  {
    label: 'X',
    href: 'https://www.x.com/thejessewinton',
  },
]

export const Footer = () => {
  return (
    <footer className="mt-auto mb-0 flex h-14 w-full animate-blur items-center">
      <div className="mx-auto flex w-full max-w-2xl flex-row items-center justify-between gap-4 px-8 text-neutral-400">
        <nav className="group flex items-center justify-between gap-6 text-sm">
          {links.map((link) => (
            <Link
              href={link.href}
              className="md:hover:opacity-100! md:hover:blur-none! transition-all md:group-hover:opacity-40 md:group-hover:blur-xs"
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <span className="text-sm">&copy;{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
