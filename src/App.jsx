import { useState } from 'react'
import './App.css'
import ContohButton from './components/ContohButton'
import Card from './components/Card'
import Modal from './components/Modal'

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [errorEmail, setErrorEmail] = useState(false)
	const [form, setForm] = useState({
		email: '',
		pesan: '',
	})

	const [count, setCount] = useState(0)
	const [email, setEmail] = useState('')
	const [pesan, setPesan] = useState('')

	const add = () => {
		//0=>0+1
		setCount((prev) => (prev += 1))
		//1=>1+1
		setCount((prev) => (prev += 1))

		//0+1
		setCount(count + 1)
		//0+1
		setCount(count + 1)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitted(true)
		// alert("ini submit")
	}

	const handleChange = (e) => {
		const { name, value } = e.target

		setForm((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleEmail = (e) => {
		setEmail(e.target.value)
		setErrorEmail(e.target.value === '')
	}
	const handlePesan = (e) => {
		setPesan(e.target.value)
	}

	return (
		<>
			<div className='contact-form' style={{ width: count }}>
				{isSubmitted ? (
					<>
						<div className='contact-submit-message'>Pesan Terkirim</div>
						<p>Email : {email}</p>
						<p>Pesan : {pesan}</p>
					</>
				) : (
					<form onSubmit={handleSubmit}>
						<p>Alamat Email (wajib diisi)</p>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
						/>
						<p>Pesan (wajib diisi)</p>
						<textarea
							onChange={handleChange}
							value={form.pesan}
							name='pesan'
						></textarea>
						{/* <input type='email' onChange={handleEmail} value={email} />
						{errorEmail ? (
							<p className='contact-message-error'>
								Masukkan alamat email Anda
							</p>
						) : null}

						<p>Pesan (wajib diisi)</p>
						<textarea onChange={handlePesan} value={pesan}></textarea> */}
						<input type='submit' value='Kirim' />
					</form>
				)}
				{/* <button onClick={add}>{count}</button> */}
			</div>
		</>
	)
}

export default App
