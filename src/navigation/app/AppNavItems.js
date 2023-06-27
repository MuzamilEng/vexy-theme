const navigation = () => {
  return [
    {
      title: 'Patient',
      path: '/patient',
      icon: 'mdi:patient'
    },
    {
      title: 'Doctors',
      path: '/doctors',
      icon: 'healthicons:doctor-male'
    },
    {
      title: 'Hospital',
      path: '/hospital',
      icon: 'cil:hospital'
    },
    {
      title: 'Home',
      path: '/Hotel/Hotel1',
      icon: 'tabler:map-pin-filled'
    },
    {
      title: 'Details',
      path: '/Hotel3/Hotel3',
      icon: 'tabler:calendar-event'
    },
    {
      path: '/Hotel2/Hotel2',
      action: 'read',
      subject: 'acl-page',
      title: 'Search',
      icon: 'tabler:map-pin-filled'
    },
    {
      path: '/Hotel4/Hotel4',
      action: 'read',
      subject: 'acl-page',
      title: 'Invoice',
      icon: 'tabler:wallet'
    },
  ]
}

export default navigation
