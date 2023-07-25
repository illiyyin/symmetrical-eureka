import React from 'react'

export default function Card(props) {
	const [show, setShow] = React.useState(false)

	return (
		<div className='lesson-card'>
			<div className='lesson-item' onClick={()=>setShow(true)}>
				<p>{props.name}</p>
				<img src={props.image} />
			</div>
			{/* Siapkan modalnya */}
			{show ? (
				<div className='modal'>
					<div className='modal-inner'>
						<div className='modal-header'></div>
						<div className='modal-introduction'>
							<h2>{props.name}</h2>

							<p>{props.introduction}</p>
						</div>
						<button className='modal-close-btn' onClick={()=>setShow(false)}>
							Tutup
						</button>
					</div>
				</div>
			) : null}
		</div>

		// <div
		// 	className='lesson-card'
		// 	// onClick={() =>
		// 	// 	props.selectCard({
		// 	// 		name: props.name,
		// 	// 		image: props.image,
		// 	// 		introduction: props.introduction,
		// 	// 	})
		// 	// }
		// 	onClick={props.selectCard}
		// >
		// 	<div className='lesson-item'>
		// 		<p>{props.name}</p>
		// 		<img src={props.image} />
		// 	</div>
		// </div>
	)
}
