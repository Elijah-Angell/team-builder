import React, { useState } from 'react'

const initialFormValues = {
    name: "",
    email: "",
    role: "",
}

function Form({ addMember }) {
    const [formValues, setFormValues] = useState(initialFormValues)
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        addMember(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input id="name" type='text' name='name' onChange={handleChange} value={formValues.name} />
            <label htmlFor='email'>Email</label>
            <input id="email" type='email' name='email' onChange={handleChange} value={formValues.email} />
            <label htmlFor="role">Ocupation</label>
            <select id="role" name="role" onChange={handleChange} value={formValues.role}>
                <option value=''>- Select an Occupation -</option>
                <option value='FE'>Frontend</option>
                <option value="BE">Backend</option>
                <option value="D">Ux designer</option>
            </select>
            <button>Submit</button>

        </form>
    )

}

export default Form