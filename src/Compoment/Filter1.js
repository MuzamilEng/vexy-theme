import Fields from '../Props/Fields'
import style from './filter1.module.scss'
import SearchIcon from '@mui/icons-material/Search'

const Filter1 = () => {
  return (
    <div className={style.filter_sections}>
      <div className={style.filter_sections_container}>
        <div className={style.filter_cantent}>
          <h1 className={` ${style.heading} ${style.blue1}`}>Filter</h1>
        </div>
        <div className={style.filter_content_section}>
          <h3 className={` ${style.headings} ${style.blue}`}>No. of stops</h3>
          <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.arrow_menu} />
        </div>
        <Fields place='Non Stp' />
        <Fields place='1 Stop' />
        <Fields place='2+ Stop' />

        <div className={style.deapture_time}>
          <div className={style.cantent_body}>
            <h2 className={` ${style.headings} ${style.blue}`}>Departure Time</h2>
            <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.blue_arrow} />
          </div>
          <Fields place='Early Morning' value='12am-8am' />
          <Fields place='Morning' value='8am-12pm' />
          <Fields place='Mid-Day' value='12pm-4pm' />
          <Fields place='Evening' value='4pm-8pm' />
          <Fields place='Night' value='8pm-12am' />
        </div>

        <div className={style.filter_cantent1}>
          <div className={style.cantent_body}>
            <h2 className={` ${style.headings} ${style.blue1}`}>Price</h2>
            <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.blue_arrow} />
          </div>
          <div className={style.cantent_body2}>
            <h3 className={` ${style.headings} ${style.grey}`}>$125 - $980</h3>
            <input type='range' className={` ${style.ranges_input} ${style.my_property}`} />
          </div>
        </div>
      </div>
      {/* property */}
      <div className={style.fields}>
        <div className={style.cantent_body}>
          <h2 className={` ${style.headings} ${style.blue1}`}>AirLines</h2>
          <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.blue_arrow} />
        </div>
        <Fields place='Asiana Airlines' />
        <Fields place='American Airlines' />
        <Fields place='Air Canada' />
        <Fields place='Air India' />
        <Fields place='Jet Airways' />
        <Fields place='Spice Jet' />
        <Fields place='IndiGo' />
        <Fields place='Multiple Airlines' />
      </div>
    </div>
  )
}

export default Filter1
