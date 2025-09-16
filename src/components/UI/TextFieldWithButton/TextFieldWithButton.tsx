import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

type Props = TextFieldProps & {
  buttonText: string
  onButtonClick?: () => void
}

export const TextFieldWithButton: React.FC<Props> = ({
  buttonText,
  onButtonClick,
  ...props
}) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ padding: '0.8rem' }}>
            <Button
              onClick={onButtonClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingInline: '1.6rem',
                maxHeight: '4.4rem',
                backgroundColor: 'var(--primary-color, #4a90ff)',
                color: '#fff',
                fontFamily: 'var(--font-secondary, DM Sans, sans-serif)',
                fontSize: 'var(--fs-base, 16px)',
                fontWeight: 'var(--fw-medium, 500)',
                borderRadius: '1rem',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'none',
                '@media(max-width: 440px)': {
                  fontSize: '10px',
                  flexDirection: 'column',
                },
                '&:hover': {
                  backgroundColor: 'var(--primary-hover-color, #357ae8)',
                },
              }}
            >
              {buttonText}
            </Button>
          </InputAdornment>
        ),
      }}
      sx={{
        width: '100%',
        marginBottom: '2.4rem',

        '& .MuiOutlinedInput-root': {
          height: '5.6rem',
          borderRadius: '1rem',
          paddingRight: 0,
          boxSizing: 'border-box',
          '& input': {
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            paddingLeft: '1rem',
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
          fontSize: '14px',
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
