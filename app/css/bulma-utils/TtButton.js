import React from 'react'

// tooltip
const TtButton = ({ data, label, warning, onClick }) => {
	return (
		// $$.qcL_T
		<button
			className={`button has-tooltip-top has-tooltip-warning is-success ${warning} ${data}`}
			data-tooltip={data}
			onClick={onClick}
		>
			{label}
		</button>
	)
}

export default TtButton
