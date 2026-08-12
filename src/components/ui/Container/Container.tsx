import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>

export function Container<T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? 'div'
  const classes = ['container', className].filter(Boolean).join(' ')

  return <Component className={classes} {...props} />
}
