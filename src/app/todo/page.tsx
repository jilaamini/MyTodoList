'use client'
import { TodoList } from '@/components/todo-list/TodoList'
import styled from 'styled-components'

const Page = styled.div`
  background-color: var(--brand-100);
  height: 100%;
  padding-top: 4rem;
`

const Content = styled.div`
  width: min(100%, 400px);
  margin: 0 auto;
  padding: 0.5rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export default function TodoListPage() {
  return (
    <Page>
      <Content>
        <Title>Todo</Title>
        <TodoList />
      </Content>
    </Page>
  )
}
