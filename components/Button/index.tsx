import * as React from 'react';
import MuiButton from '@mui/material/Button'

export const Button = ({ labelText }: {labelText: string}) => (
  <MuiButton>
    {labelText}
  </MuiButton>
)

export default Button