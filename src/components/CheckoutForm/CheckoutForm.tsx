import React, { useCallback, useEffect, useState } from 'react'
import styles from './CheckoutForm.module.css'
import { Formik, Form } from 'formik'
import { PersonalDetails } from '../main/PersonalDetails/PersonalDetails'
import { ShippingDetails } from '../main/ShippingDetails/ShippingDetails'
import { validationSchema } from '../../validationSchema/validationSchema'
import { ORDER_TOTAL, PERSONAL_FIELDS } from '../../constants/hero'
import { PaymentMethods } from '../main/PaymentMethods/PaymentMethods'
import { OrderSummary } from '../main/OrderSummary/OrderSummary'
import { getItems, addItems } from '../../storage/storage'
import { DEFAULT_CARDS } from '../../data/defaultStorage'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zip: '',
  country: '',
  shippingMethod: 'odeon',
  paymentMethod: 'paypal',
  promo: '',
}

const BASE_URL = 'https://checkout-backend-ten.vercel.app'

export const CheckoutForm = () => {
  const [items, setItems] = useState(getItems())
  const [totalPrice, setTotalPrice] = useState(0)

  const handleRemove = useCallback((id: string) => {
    setItems((prevState) => {
      return prevState.filter((item) => {
        return item.id !== id
      })
    })
  }, [])

  useEffect(() => {
    addItems(items)
    const sum = items.reduce(
      (acc, curr) => acc + Number(curr.price.slice(1)),
      0,
    )
    setTotalPrice(sum)
  }, [items])

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const dataToSend = {
          ...values,
          order: items,
        }

        fetch(`${BASE_URL}/api/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        })
          .then(() => {
            addItems(DEFAULT_CARDS)
            resetForm()
          })
          .catch((err) => console.error('something went wrong:', err))
      }}
    >
      {({ handleChange, values, errors, touched, handleBlur }) => {
        return (
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
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
              <PaymentMethods
                handleChange={handleChange}
                values={values}
                errors={errors}
              />
            </div>
            <OrderSummary
              onRemove={handleRemove}
              items={items}
              total={ORDER_TOTAL}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              values={values}
              totalPrice={totalPrice}
            />
          </Form>
        )
      }}
    </Formik>
  )
}
