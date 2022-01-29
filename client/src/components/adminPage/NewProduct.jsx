import Select from 'react-select'
import { Button } from 'semantic-ui-react'
import { useState } from 'react'


const NewProduct = () => {
  //gets action type from url to display in title - toma el tipo de accion de la url para mostrar en el titulo


  const categoryOptions = [
    { value: "painting", label: "Painting" },
    { value: "sculpture", label: "Sculpture" },
    { value: "ceramic", label: "Ceramic" },
    { value: "textile", label: "Textile" }
  ]

  //form state - state del form
  const [formInfo, setFormInfo] = useState({
    title: "",
    creation_date: "",
    current_location: "",
    collection: "",
    price: "",
    categories: [],
    stock: true,
    image: null,
    description: ""
  })

  //
  const handleSubmit = e => {
    e.preventDefault()
    console.log("form submitted")
  }

  //handles every change but submit's - maneja todo change excepto el del select
  const handleChange = e => {
    let name = e.target.name
    setFormInfo({
      ...formInfo,
      [name]: e.target.value
    })
  }

  //handles changes on submit, adds to state - maneja los cambios en el submit, añade al state
  const handleSelectChange = e => {
    let valueArr = e.map(el => el.value)
    setFormInfo({
      ...formInfo,
      categories: valueArr
    })
  }

  const handleImageChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      setFormInfo({
        ...formInfo,
        image: e.target.files[0]
      })
    }

  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "50px auto" }}>
      <h2>New product</h2>

      <label htmlFor="title">Title</label>
      <input type="text" name='title' onChange={handleChange} />

      <label htmlFor="creation_date">Creation Date</label>
      <input type="text" name='creation_date' onChange={handleChange} />

      <label htmlFor="current_location">Current Location</label>
      <input type="text" name='current_location' onChange={handleChange} />

      <label htmlFor="collection">Collection</label>
      <input type="text" name='collection' onChange={handleChange} />

      <label htmlFor="price">Price</label>
      <input type="text" name='price' onChange={handleChange} />

      <label htmlFor="categories">Categories</label>
      <Select
        onChange={handleSelectChange}
        isMulti
        name="categories"
        options={categoryOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />

      <div style={{ width: "150px", height: "200px", border: "1px solid black", margin:"20px auto", overflow:"hidden" }}>
        {formInfo.image !== null ? (
          <img src={URL.createObjectURL(formInfo.image)} alt="" style={{ width: "100%", objectFit: "contain", objectPosition: "center center" }} />
        ) : null}
      </div>
      <label htmlFor="image">Image</label>
      <input accept='image/*' type="file" name="image" onChange={handleImageChange} />


      <label htmlFor="description">Description</label> 
      <br />
      <textarea name="description" id="" cols="30" rows="5" onChange={handleChange} ></textarea>
      <br />
      <Button primary>Submit</Button>
    </form>
  );
}

export default NewProduct;