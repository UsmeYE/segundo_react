import { useState } from "react"

const UserProfile = () => {
    const [profile, setProfile] = useState({ name: '', age: '' })
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setProfile({ ...profile, [name]: value })
    }

    return (
        <section>
            <h2>Perfil de Usuario</h2>
            <label>Nombre:	<input type="text" name="name" value={profile.name} onChange={handleInputChange} /></label>
            <label>Edad:	<input type="text" name="age" value={profile.age} onChange={handleInputChange} /></label>
            <p>Nombre: {profile.name}</p>
            <p>Edad: {profile.age}</p>
            <hr />
        </section>
    )
}

export default UserProfile
