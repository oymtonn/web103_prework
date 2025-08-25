import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'
import './ViewCreator.css'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', Number(id))
        .single()

      if (error) {
        console.log(error)
      } else {
        setCreator(data)
      }
    }

    fetchCreator()
  }, [id])

  if (!creator) {
    return <p>Loading...</p>
  }

  return (
    <>
        <div className="view-creator-container">
        <div
            className="view-creator-image"
            style={{ backgroundImage: `url(${creator.imageURL})` }}
        ></div>

        <div className="view-creator-details">
            <h1 className="view-creator-name">{creator.name}</h1>
            <h2 className="view-creator-description">{creator.description}</h2>
            <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-creator-url"
            >
            {creator.url}
            </a>
        </div>
        </div>

        <Link to={`/creator/edit/${creator.id}`} className="edit-button">
            Edit Creator
            </Link>

    </>

  )
}

export default ViewCreator
