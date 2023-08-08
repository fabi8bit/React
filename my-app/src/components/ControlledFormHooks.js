import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, category, comments)
    }

    return (
        <div>
          <h2>Please fill out the form below</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='id-name'>Your Name:</label>
              <input
                  value={name}
                  type='text'
                  id="id-name"
                  name="name"
                  onChange={
                    (e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='id-category'>Query category:</label>
              <select
                value={category}
                id="id-category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}>
                <option value="website">Website issue</option>
                <option value="order">Order issue</option>
                <option value="general">General inquiry</option>
              </select>
            </div>
            <div>
            <label htmlFor='id-comments'>Comments:</label>
            <textarea onChange={
                (e) => setComments(e.target.value)}
                id="id-comments"
                name="comments"
                value={comments}/>
            </div>
              <input type='submit' value="submit"/>
          </form>
        </div>
      )
}

export default ControlledFormHooks