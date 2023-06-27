import React from 'react'
import Headingbar from 'src/layouts/components/hospital/Headingbar'
import CustomLayout from 'src/layouts/CustomLayout'
import HospitalLayout from 'src/layouts/HospitalLayout'
import CalendarTabPanel from 'src/views/HospitalTabPanels/CalendarTabPanel/CalendarTabPanel'
import ComunicationTabPanel from 'src/views/HospitalTabPanels/ComunicationTabPanel/ComunicationTabPanel'
import ExpensesTabPanel from 'src/views/HospitalTabPanels/ExpensesTabPanel/ExpensesTabPanel'
import InventoryTabPanel from 'src/views/HospitalTabPanels/InventoryTabPanel/InventoryTabPanel'
import PatientsTabPanel from 'src/views/HospitalTabPanels/PatientsTabPanel/PatientsTabPanel'
import ReportsTabPanel from 'src/views/HospitalTabPanels/ReportsTabPanel/ReportsTabPanel'

function index() {
  return (
    <HospitalLayout>
      <CalendarTabPanel />
      <PatientsTabPanel />
      <ComunicationTabPanel />
      <ReportsTabPanel />
      <InventoryTabPanel />
      <ExpensesTabPanel />
    </HospitalLayout>
  )
}

index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default index
