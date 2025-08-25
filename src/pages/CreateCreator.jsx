import { supabase } from "../client"
import { useState } from 'react'

function CreateCreator() {
  const [creator, setCreator] = useState({
    name: "",
    description: "",
    url: "",
    imageURL: ""
  })

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { data, error } = await supabase
      .from('creators')
      .insert([creator])
      .select()

    if (error) {
      console.log(error)
    } else {
      console.log("Inserted:", data)
    }

    window.location = "/"
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
        <h2 style={{ textAlign: "center" }}>Create a New Creator</h2>

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
          style={{ padding: "0.75rem", width: "100.3%", minHeight: "120px" }}
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
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateCreator
