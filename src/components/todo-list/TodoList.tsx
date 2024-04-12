import { TodoListDataItem } from '@/service/todo'
import { createTodo, getAllTodo, removeTodo, updateTodo } from '@/service/todo.api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Component } from './style'
import { TodoListItem } from './todo-list-item/TodoListItem'
import { TodoListNewItem } from './todo-list-new-item/TodoListNewItem'

export const TodoList: React.FC = () => {
  const [data, setData] = useState<TodoListDataItem[]>([])

  useEffect(() => {
    getAllTodo()
      .then((data) => setData(data))
      .catch(() => toast.error('Failed to fetch data!'))
  }, [])

  async function handleToggle(listItem: TodoListDataItem) {
    try {
      await updateTodo({ ...listItem, checked: !listItem.checked })
      const newData = data.map((item) => {
        if (item.id === listItem.id) {
          return { ...item, checked: !item.checked }
        }
        return item
      })

      setData(newData)
    } catch (error) {
      toast.error('Update failed!')
    }
  }

  async function handleAddItem(caption: string) {
    try {
      const newItem = await createTodo({ id: -1, caption, checked: false })
      setData([...data, newItem])
      toast.info('Create done successfully!')
    } catch (error) {
      toast.error('Create failed!')
    }
  }

  async function handleDelete(listItem: TodoListDataItem) {
    try {
      await removeTodo(listItem)
      const newData = data.filter((item) => item.id !== listItem.id)
      setData(newData)
      toast.info('Delete done successfully!')
    } catch (error) {
      toast.error('Delete failed!')
    }
  }

  async function handleEdit(listItem: TodoListDataItem, newCaption: string) {
    try {
      await updateTodo({ ...listItem, caption: newCaption })
      const newData = data.map((item) => {
        if (item.id === listItem.id) {
          return { ...item, caption: newCaption }
        }
        return item
      })

      setData(newData)
      toast.info('Update done successfully!')
    } catch (error) {
      toast.error('Update failed!')
    }
  }

  return (
    <Component>
      {data.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          onToggle={() => handleToggle(item)}
          onDelete={() => handleDelete(item)}
          onEdit={(newCaption) => handleEdit(item, newCaption)}
        />
      ))}

      <TodoListNewItem onAdd={handleAddItem} />
    </Component>
  )
}
