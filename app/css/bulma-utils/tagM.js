import React from 'react'

// Medeum
const TagM = ({ hint, msg, warning }) => {
	return (
		<div
			className="notification my-2 pt-2 pb-3 has-text-black-ter"
			style={{ height: '3rem', display: 'inline-block' }}
		>
			<div className="flexAlign">
				<span className={`tag is-medium mr-3 mb-1 is-warning ${warning}`}>
					{hint}
				</span>
				{msg}
			</div>
		</div>
	)
}

export default TagM
