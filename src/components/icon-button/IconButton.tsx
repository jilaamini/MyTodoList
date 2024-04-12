import { ButtonHTMLAttributes } from 'react'
import { Icon } from '../icon/Icon'
import { Component } from './style'

type Props = {
  name: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton: React.FC<Props> = ({ name, ...props }) => {
  return (
    <Component {...props}>
      <Icon name={name} />
    </Component>
  )
}
