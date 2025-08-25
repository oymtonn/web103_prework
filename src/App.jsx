import { useState, useEffect } from 'react'
import CreatorCard from './components/CreatorCard'
import { supabase } from './client'
import './App.css'

function App() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async () => {
      const { error, data } = await supabase
        .from('creators')
        .select('id, name, description, imageURL, url, created_at')
        .order('created_at', { ascending: false })

      if (error) {
        console.log(error)
      } else {
        setCreators(data)
      }
    }

    fetchCreators()
  }, [])

  return (
    <div className="creator-list">
      {creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          id={creator.id}
          name={creator.name}
          description={creator.description}
          imageURL={creator.imageURL}
        />
      ))}
    </div>
  )
}

export default App
