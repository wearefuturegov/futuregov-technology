import React, {useState, useRef} from 'react'

export default ({link}) => {
    const [formVisible, setFormVisibility] = useState(false)
    const toggleFormVisibility = (e) => {
        e.preventDefault()
        setFormVisibility(!formVisible)
    }

    return (
        <>
            {(formVisible)? 
                <div className="links__new-link-fields">
                    <div className="form-field form-field--small">
                        <label className="form-label--small" htmlFor="new-link-url">URL</label>
                        <input className="form-input--small" id="new-link-url" name="external_link[url]" type="url" required placeholder="http://..."/>
                    </div>
                    <div className="form-field form-field--small">
                        <label className="form-label--small" htmlFor="new-link-description">Description</label>
                        <input className="form-input--small" id="new-link-description" name="external_link[description]" type="text" required placeholder="Describe the link..."/>
                    </div>
                    <button type="submit" className="button">Save link</button>

                    <button onClick={toggleFormVisibility} className="links__new-link-close"><span className="visually-hidden">Close</span></button>
                </div>
            :
                <button className="links__new-link" onClick={toggleFormVisibility}>Add a useful link...</button>
            }
        </>
    )
}
