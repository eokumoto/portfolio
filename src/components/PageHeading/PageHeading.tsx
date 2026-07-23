interface PageHeadingProps {
  align?: 'center' | 'left'
  description?: string
  eyebrow?: string
  title: string
}

export function PageHeading({
  align = 'center',
  description,
  eyebrow,
  title,
}: PageHeadingProps) {
  return (
    <header
      className={`page-heading${align === 'left' ? ' page-heading--left' : ''}`}
    >
      {eyebrow && <p className="page-heading__eyebrow">{eyebrow}</p>}
      <h1 className="page-heading__title">{title}</h1>
      {description && (
        <p className="page-heading__description">{description}</p>
      )}
    </header>
  )
}
