import React from 'react'

const PreviewSectionTitle = ({ title, text }) => {
    return (
        <div className="previewSectionTitle">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}
export default PreviewSectionTitle