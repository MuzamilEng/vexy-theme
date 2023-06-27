import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import UploadRecordBar from 'src/layouts/components/patient/UploadRecordBar'
import Contents from 'src/layouts/components/patient/Contents'
import CustomLayout from 'src/layouts/CustomLayout'

function index() {
  return (
    <Box
      sx={{
        background: '#E5E5E5',
        minHeight: '100vh'
      }}
    >
      {/* main content */}
      <Grid container backgroundColor='#E5E5E5'>
        {/* Upload record bar */}
        <UploadRecordBar />
        {/* Contents */}
        <Grid item xs={12}>
          <Contents />
        </Grid>
      </Grid>
    </Box>
  )
}

index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default index
