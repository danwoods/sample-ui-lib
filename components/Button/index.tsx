import React from 'react'
import Button from '@mui/material/Button'

export default ({ labelText }: {labelText: string}) => (
  <Button variant="contained" size="large">
    {labelText}
  </Button>
)
