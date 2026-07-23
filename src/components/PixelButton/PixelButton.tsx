import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { Link } from 'react-router-dom'

interface PixelButtonCommonProps {
  children: ReactNode
  className?: string
  selected?: boolean
  variant?: 'primary' | 'secondary'
}

type NativeButtonProps = PixelButtonCommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: never
    to?: never
  }

type RouterLinkProps = PixelButtonCommonProps & {
  href?: never
  to: string
}

type AnchorProps = PixelButtonCommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string
    to?: never
  }

export type PixelButtonProps =
  | NativeButtonProps
  | RouterLinkProps
  | AnchorProps

export function PixelButton(props: PixelButtonProps) {
  const {
    children,
    className = '',
    selected = false,
    variant = 'secondary',
  } = props
  const classes = [
    'pixel-button',
    `pixel-button--${variant}`,
    selected ? 'is-selected' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('to' in props && props.to) {
    return (
      <Link
        aria-current={selected ? 'page' : undefined}
        className={classes}
        to={props.to}
      >
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const {
      href,
      target,
      rel = target === '_blank' ? 'noreferrer' : undefined,
    } = props

    return (
      <a
        aria-current={selected ? 'page' : undefined}
        className={classes}
        href={href}
        rel={rel}
        target={target}
      >
        {children}
      </a>
    )
  }

  const {
    'aria-describedby': ariaDescribedBy,
    disabled,
    name,
    onClick,
    type = 'button',
    value,
  } = props as NativeButtonProps

  return (
    <button
      aria-describedby={ariaDescribedBy}
      aria-pressed={selected || undefined}
      className={classes}
      disabled={disabled}
      name={name}
      onClick={onClick}
      type={type}
      value={value}
    >
      {children}
    </button>
  )
}
