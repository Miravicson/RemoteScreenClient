import React from 'react'

const SummaryCard = (props) => {

  const { info, description, progress } = props;
  return (
    <div className="summary">
      <div className="summary-card">
        <span className="summary-card-icon"></span>
        <p className="summary-card-info">{info}</p>
        <p className="summary-card-desc">{description}</p>
        <progress max="100" value={progress}>{progress}%</progress>
      </div>
      
      
    </div>
  )
}

export default SummaryCard
