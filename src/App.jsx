import { useState } from 'react'
import './App.css'
import ContohButton from './components/ContohButton'
import Card from './components/Card'
import Modal from './components/Modal'

const komponenKecil = () => {
	return <p>ini komponen kecil</p>
}

const initialState = [
	{
		name: 'HTML & CSS',
		image:
			'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
		introduction:
			'HTML dan CSS digunakan untuk menentukan bagaimana sebuah website ddisusun dan didesign. Ayo pelajari bahasa ini dan langsung membuat halaman situs web!',
	},
	{
		name: 'Sass',
		image:
			'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
		introduction:
			'Sass adalah sebuah bahasa untuk membuat code CSS lebih gampang dan efisient.',
	},
	{
		name: 'JavaScript',
		image:
			'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
		introduction:
			'JavaScript aadalah bahasa populer yang dapat digunakan untuk membuat website interaktif dan server backend.',
	},
]

function App() {
	const [count, setCount] = useState(0)
	const [selectedCard, setSelectedCard] = useState()
	const obj = {
		bahasa: {
			name: 'inggris',
		},
	}
	const arr = [
		'indonesia',
		'jepang',
		'inggris',
		'indonesia',
		'jepang',
		'inggris',
	]
	return (
		<>
			<h1>Vite + React</h1>
			<div>
				{initialState.map((item, index) => (
					<Card
						key={index}
						name={item.name}
						image={item.image}
						introduction={item.introduction}
						// selectCard={setSelectedCard}
						selectCard={()=>setSelectedCard(item)}
					/>
				))}

				<p>{JSON.stringify(selectedCard)}</p>
				{/* {selectedCard ? (
					<Modal
						name={selectedCard.name}
						image={selectedCard.image}
						introduction={selectedCard.introduction}
						closeModal={()=>setSelectedCard()}
					/>
				) : null} */}

				{/* <Card bahasa={{ name: 'indonesia' }} />
        
				<Card {...obj} />
        <Card bahasa='jepang' /> */}

				{/* {komponenKecil()} */}
				{/* <ContohButton /> */}
				{/* <ContohButton/>
      <ContohButton/>
      <ContohButton/>
      <ContohButton/> */}
				{/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
				{/* <button className='contoh_class'>count is</button> */}
			</div>
		</>
	)
}

export default App
