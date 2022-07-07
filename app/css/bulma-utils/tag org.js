import React from 'react'

const Tag = ({ hint, msg, warning }) => {
	return (
		<div
			className="notification my-2 pt-1 pb-2 has-text-black-ter"
			style={{ height: '2rem', display: 'inline-block' }}
		>
			<span className="flexAlign">
				<span className={`tag mr-3 mx-1 is-warning ${warning}`}>{hint}</span>
				{msg}
			</span>
		</div>
	)
}

export default Tag
