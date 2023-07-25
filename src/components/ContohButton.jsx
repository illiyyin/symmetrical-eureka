import React from 'react'
import s from './ContohButton.module.css'

export default function ContohButton() {
  const nameButton="count is red"
	return (
		<>
      <button className={s.contoh_class}>{nameButton}</button>
			<button className={s.contoh_class2}>count is blue</button>
		</>
	)
}
