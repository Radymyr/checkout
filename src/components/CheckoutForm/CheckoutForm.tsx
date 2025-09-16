import React from 'react'
import styles from './CheckoutForm.module.css'
import { Formik, Form } from 'formik'
import { PersonalDetails } from '../main/PersonalDetails/PersonalDetails'
import { ShippingDetails } from '../main/ShippingDetails/ShippingDetails'
import { validationSchema } from '../../validationSchema/validationSchema'
import {
  ORDER_ITEMS,
  ORDER_TOTAL,
  PAYMENT_METHODS,
  PERSONAL_FIELDS,
  SHIPPING_FIELDS,
  SHIPPING_METHODS,
} from '../../constants/hero'
import { PaymentMethods } from '../main/PaymentMethods/PaymentMethods'
import { OrderSummary } from '../main/OrderSummary/OrderSummary'
const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zip: '',
  country: '',
  shippingMethod: '',
  paymentMethod: '',
}

export const CheckoutForm = () => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, values, errors, touched, handleBlur }) => (
        <Form className={styles.form}>
          <div>
            <PersonalDetails
              fields={PERSONAL_FIELDS}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <ShippingDetails
              fields={SHIPPING_FIELDS}
              methods={SHIPPING_METHODS}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <PaymentMethods methods={PAYMENT_METHODS} />
          </div>
          <OrderSummary items={ORDER_ITEMS} total={ORDER_TOTAL} />
        </Form>
      )}
    </Formik>
  )
}
