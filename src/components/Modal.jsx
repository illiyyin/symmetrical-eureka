import React from 'react'

export default function Modal(props) {
	return (
		<div className='lesson-card'>
			{/* <div className='lesson-item'>
				<p>{props.name}</p>
				<img src={props.image} />
			</div> */}
			{/* Siapkan modalnya */}
			<div className='modal'>
				<div className='modal-inner'>
					<div className='modal-header'></div>
					<div className='modal-introduction'>
						{/* Tampilkan nama pelajaran */}
						<h2>{props.name}</h2>

						{/* Tampilkan pengantar pelajaran */}
						<p>{props.introduction}</p>
					</div>
					<button className='modal-close-btn' onClick={props.closeModal}>Tutup</button>
				</div>
			</div>
		</div>
	)
}
