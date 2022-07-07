import React from 'react'

const TtSpan = ({ data, warning, top, children }) => {
	return (
		// has-tooltip-top has-tooltip-warning is-primary: ディフォルト
		<span
			style={{ height: '2rem', cursor: 'default' }}
			className={`button has-tooltip-top has-tooltip-warning is-primary is-size-5 mt-0 py-0 has-tooltip-${top} has-tooltip-${warning}`}
			data-tooltip={data}
		>
			{children}
		</span>
	)
}

export default TtSpan
