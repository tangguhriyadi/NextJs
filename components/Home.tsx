import React from 'react'
import { useGetTodosQuery } from '../services/todoApi'

const Home:React.FC = () => {
    const {data:data} = useGetTodosQuery()
  return (
    <div>Home</div>
  )
}

export default Home