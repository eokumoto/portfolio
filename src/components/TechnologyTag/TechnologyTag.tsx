interface TechnologyTagProps {
  children: string
}

export function TechnologyTag({ children }: TechnologyTagProps) {
  return <span className="technology-tag">{children}</span>
}
