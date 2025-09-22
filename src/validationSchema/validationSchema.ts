import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\+?\d{7,14}$/, 'Invalid phone number'),
  address: Yup.string().required('Street Address is required'),
  city: Yup.string().required('City is required'),
  zip: Yup.string().required('Zip Code is required'),
  country: Yup.string().required('Country is required'),
  shippingMethod: Yup.string().required('Select a shipping method'),
  paymentMethod: Yup.string().required('Select a payment method'),
  promo: Yup.string().min(10),
})
