import { supabase } from "../client"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function EditCreator() {
  const { id } = useParams() 
  const [creator, setCreator] = useState({
    name: "",
    description: "",
    url: "",
    imageURL: ""
  })

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single()

      if (error) {
        console.error(error)
      } else {
        setCreator(data)
      }
    }

    fetchCreator()
  }, [id])

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value })
  }

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this creator?")
    if (!confirmDelete) return
  
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("id", id)
  
    if (error) {
      console.error(error)
    } else {
      window.location = "/"
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { data, error } = await supabase
      .from("creators")
      .update({
        name: creator.name,
        description: creator.description,
        url: creator.url,
        imageURL: creator.imageURL,
      })
      .eq("id", id)
      .select()

    if (error) {
      console.error(error)
    } else {
      window.location = "/"
    }
  }

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", minWidth: "60vw", padding: "2rem" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          maxWidth: "800px",
          margin: "0 auto",
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Edit Creator</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={creator.name}
          onChange={handleChange}
          style={{ padding: "0.75rem", width: "100%" }}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={creator.description}
          onChange={handleChange}
          style={{ padding: "0.75rem", width: "100%", minHeight: "120px" }}
          required
        />

        <input
          type="url"
          name="url"
          placeholder="Youtube Link"
          value={creator.url}
          onChange={handleChange}
          style={{ padding: "0.75rem", width: "100%" }}
        />

        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          value={creator.imageURL}
          onChange={handleChange}
          style={{ padding: "0.75rem", width: "100%" }}
        />

        <button
          type="submit"
          style={{
            padding: "1rem",
            cursor: "pointer",
            backgroundColor: "#444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            width: "103.5%",
            fontSize: "16px",
          }}
        >
          Update
        </button>

        <button
        type="button"
        onClick={handleDelete}
        style={{
            padding: "1rem",
            cursor: "pointer",
            backgroundColor: "#aa2  222",
            color: "white",
            border: "none",
            borderRadius: "6px",
            width: "103.5%",
            fontSize: "16px",
            marginTop: "0.5rem"
        }}
        >
        Delete
        </button>

      </form>
    </div>
  )
}

export default EditCreator
