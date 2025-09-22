import React, { FC } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { useField } from 'formik'

export const CustomTextField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          height: '5.6rem',
          borderRadius: '1rem',
          boxSizing: 'border-box',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '1.6rem',
          fontWeight: 'var(--fw-regular)',

          '& input': {
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1.6rem',
            fontWeight: 'var(--fw-regular)',
          },

          '& fieldset': {
            borderColor: 'var(--text--subtext-color)',
          },
          '&:hover fieldset': {
            borderColor: 'black',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'blue',
          },
        },

        '& .MuiInputLabel-root': {
          fontFamily: 'Ubuntu, sans-serif',
          fontSize: '1.4rem',
          fontWeight: 'var(--fw-regular)',
          backgroundColor: 'white',
          padding: '0 0.5rem',
          left: '1rem',
          color: 'var(--text--subtext-color)',
        },

        '& .MuiInputLabel-root.Mui-focused': {
          color: 'blue',
        },
      }}
    />
  )
}
