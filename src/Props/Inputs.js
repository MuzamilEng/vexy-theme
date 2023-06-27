import React from 'react'
import style from './input.module.css'

const Inputs = props => {
  return (
    <div className={style.Inputs_container}>
      <div className={style.inputs_container_body}>
        <div className={style.main2_input_fields}>
          <input className={` ${style.main2_input} ${style.my_property}`} placeholder={props.holder} />
          <img src={props.img} alt='location' className={style.main2_input_img} />
        </div>
      </div>
    </div>
  )
}

export default Inputs
