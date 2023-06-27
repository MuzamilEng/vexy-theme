import React from 'react'
import CustomLayout from 'src/layouts/CustomLayout'
import HospitalLayout from 'src/layouts/HospitalLayout'
import ProfileTabPanel from 'src/views/DoctorsTabPanels/ProfileTabPanel/ProfileTabPanel'
import CalendarTabPanel from 'src/views/HospitalTabPanels/CalendarTabPanel/CalendarTabPanel'

function index() {
  return (
    <HospitalLayout>
      <CalendarTabPanel />
      <ProfileTabPanel />
    </HospitalLayout>
  )
}

index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default index
