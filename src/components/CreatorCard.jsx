import { useNavigate } from "react-router-dom"
import "../App.css"

function CreatorCard({ id, name, description, imageURL }) {
  const navigate = useNavigate()

  return (
    <div
      className="creator-card"
      style={{ backgroundImage: `url(${imageURL})` }}
      onClick={() => navigate(`/creator/${id}`)}
    >
      <div
        className="edit-button"
        onClick={(e) => {
          e.stopPropagation()
          navigate(`/edit/${id}`)
        }}
      >
        Edit
      </div>

      {}
      <div className="creator-overlay">
        <h3 className="creator-title">{name}</h3>
        <p className="creator-description">{description}</p>
      </div>
    </div>
  )
}

export default CreatorCard
