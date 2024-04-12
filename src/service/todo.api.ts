import { Config } from '@/config'
import axios from 'axios'
import { TodoListDataItem } from './todo'

export async function getAllTodo(): Promise<TodoListDataItem[]> {
  const result = await axios.get<TodoListDataItem[]>(Config.api.baseUrl + '/todo')
  return result.data
}

export async function updateTodo(item: TodoListDataItem): Promise<void> {
  await axios.put(Config.api.baseUrl + `/todo/${item.id}`, item)
}

export async function removeTodo(item: TodoListDataItem): Promise<void> {
  await axios.delete(Config.api.baseUrl + `/todo/${item.id}`)
}

export async function createTodo(item: TodoListDataItem): Promise<TodoListDataItem> {
  const result = await axios.post(Config.api.baseUrl + '/todo', item)
  return result.data
}
