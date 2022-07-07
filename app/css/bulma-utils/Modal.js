import React from 'react'

const Modal=({opacity, children}) =>{

  return (
		<div
			className="modal"
			onClick={() => $$.qcL('.modal', 'is-active', 'remove')}
		>
			{/* <div className="modal is-active"> */}
			<div className="modal-background" style={{ opacity: opacity }}></div>
			{/* <div className="modal-background" style={{backgroundColor: 'rgba(10, 10, 10, 0.2)'}}></div> */}
			<div
				className="modal-content"
				// style={{ zIndex: 10 }}
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<div className="box is-size-5 has-text-centered py-6">{children}</div>
			</div>
			<button
				className="modal-close is-large"
				onClick={() => $$.qcL('.modal', 'is-active', 'remove')}
				aria-label="close"
			></button>
		</div>
	)
}

export default Modal