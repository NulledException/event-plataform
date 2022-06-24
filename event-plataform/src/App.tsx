import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lessons {
  id: string;
  title: string;
}

function App() {

  const { data } = useQuery<{lessons: Lessons[]}>(GET_LESSONS_QUERY)

  return (
    <div>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </div>
  )
}

export default App
