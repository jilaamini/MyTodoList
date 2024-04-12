import React, { KeyboardEvent } from 'react'
import { Component, Input } from './style'

type Props = {
  onAdd: (caption: string) => void
}

export const TodoListNewItem: React.FC<Props> = ({ onAdd }) => {
  function handleKeyDown(ev: KeyboardEvent<HTMLInputElement>) {
    switch (ev.key) {
      case 'Enter':
        if (ev.currentTarget.value) {
          onAdd(ev.currentTarget.value)
          ev.currentTarget.value = ''
        }
        break

      case 'Escape':
        ev.currentTarget.value = ''
        break
    }
  }

  return (
    <Component>
      <Input
        type="text"
        placeholder="New item (Press Enter to add, Escape to cancel)"
        onKeyDown={handleKeyDown}
      />
    </Component>
  )
}
