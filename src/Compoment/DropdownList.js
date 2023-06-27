import style from './dropdown.module.css'
import CallIcon from '@mui/icons-material/Call'
import GroupIcon from '@mui/icons-material/Group'
import { Icon } from '@iconify/react';
import PlaceIcon from '@mui/icons-material/Place'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService'
import { useRouter } from 'next/router'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import Link from 'next/link'

const DropdownList = () => {
  const router = useRouter()
  console.log('ok', router.pathname)

  return (
    <div className={style.DropdownList_wrapper}>
      <div className={style.dropdown_menu}>
        <Link href='/patient' className={style.text_dec}>
          <li className={` ${style.menu_lists} ${router.pathname == '/patient' ? style.active : ''} `}>
            <Icon icon="mdi:patient" width={22} height={22} />
            <p className={style.menu_option}>Patient</p>
          </li>
        </Link>
        <Link href='/doctors' className={style.text_dec}>
          <li className={` ${style.menu_lists} ${router.pathname == '/doctors' ? style.active : ''} `}>
            <Icon icon="healthicons:doctor-male" width={22} height={22} />
            <p className={style.menu_option}>Doctors</p>
          </li>
        </Link>
        <Link href='/hospital' className={style.text_dec}>
          <li className={` ${style.menu_lists} ${router.pathname == '/hospital' ? style.active : ''} `}>
            <Icon icon="cil:hospital" width={22} height={22} />
            <p className={style.menu_option}>Hospital</p>
          </li>
        </Link>
        <Link href='/Hotel/Hotel1' className={style.text_dec}>
          <li className={` ${style.menu_lists} ${router.pathname == '/Hotel/Hotel1' ? style.active : ''} `}>
            <PlaceIcon className={style.menu_icons} />
            <p className={style.menu_option}>Home</p>
          </li>
        </Link>
        <Link href='/Hotel2/Hotel2' className={style.text_dec}>
          <li className={` ${style.menu_lists} ${router.pathname == '/Hotel2/Hotel2' ? style.active : ''} `}>
            <CalendarTodayOutlinedIcon className={`${style.menu_icons} ${style.icon_2}`} />
            <p className={style.menu_option}>Search</p>
            <img src={`../../../assets/img/2icon.png`} alt='file' className={`${style.menu_icons} ${style.icon2}`} />
          </li>
        </Link>

        <Link href='/Hotel3/Hotel3' className={style.text_dec}>
          <li className={` ${style.menu_lists} ${router.pathname == '/Hotel3/Hotel3' ? style.active : ''} `}>
            <PlaceIcon className={style.menu_icons} />
            <p className={style.menu_option}>Details</p>
          </li>
        </Link>
        <Link href='/Hotel4/Hotel4' className={style.text_dec}>
          <li className={` ${style.menu_lists} ${router.pathname == '/Hotel4/Hotel4' ? style.active : ''} `}>
            <AccountBalanceWalletIcon className={style.menu_icons} />
            <p className={style.menu_option}>Invoice</p>
          </li>
        </Link>

        {/* <li className={style.menu_lists}>
          <PlaceIcon className={style.menu_icons} />

          <p className={style.menu_option}>Online Consultation</p>
        </li>
        <li className={style.menu_lists}>
          <img
            src={`../../../assets/img/icon.svg`}
            alt='small'
            className={` ${style.menu_icons} ${style.icon_small}`}
          />
          <p className={style.menu_option}>Offers</p>
        </li>
        <li className={style.menu_lists}>
          <GroupIcon className={style.menu_option} />
          <p className={`${style.menu_option} ${style.refer}`}> Refer a friend</p>
        </li>
        <li className={style.menu_lists}>
          <CallIcon className={style.menu_icons} />
          <p className={style.menu_option}>Support</p>
        </li> */}
      </div>
    </div>
  )
}

export default DropdownList
