import { TodoListDataItem } from '@/service/todo'
import React, { KeyboardEvent, useState } from 'react'
import { IconButton } from '../../icon-button/IconButton'
import { Caption, Component, Expander } from './style'

type Props = {
  item: TodoListDataItem
  onToggle: () => void
  onDelete: () => void
  onEdit: (newCaption: string) => void
}

export const TodoListItem: React.FC<Props> = ({ item, onToggle, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false)

  function handleKeyDown(ev: KeyboardEvent<HTMLInputElement>) {
    switch (ev.key) {
      case 'Enter':
        if (ev.currentTarget.value) {
          onEdit(ev.currentTarget.value)
          setEditMode(false)
        }
        break

      case 'Escape':
        setEditMode(false)
        break
    }
  }

  return (
    <Component className="hover-visible-container">
      <IconButton name={item.checked ? 'task_alt' : 'circle'} onClick={onToggle} />

      {editMode ? (
        <input
          autoFocus
          defaultValue={item.caption}
          onKeyDown={handleKeyDown}
          onBlur={() => setEditMode(false)}
        />
      ) : (
        <Caption checked={item.checked} onClick={() => setEditMode(true)}>
          {item.caption}
        </Caption>
      )}

      <Expander />

      <IconButton className="hover-visible" name="edit" onClick={() => setEditMode(true)} />
      <IconButton className="hover-visible" name="delete" onClick={onDelete} />
    </Component>
  )
}
