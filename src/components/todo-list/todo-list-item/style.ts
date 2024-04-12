import styled from 'styled-components'

export const Component = styled.li`
  margin-bottom: 1px;
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`

export const Caption = styled.span<{ checked: boolean }>`
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`

export const Expander = styled.div`
  flex-grow: 1;
`
