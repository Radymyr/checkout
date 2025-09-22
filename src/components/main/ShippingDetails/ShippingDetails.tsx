import React from 'react'
import styles from './ShippingDetails.module.css'
import Oval from '../../../assets/images/oval.png'
import { CustomTextField } from '../../UI/CustomTextField/CustomTextField'
import { SHIPPING_FIELDS, SHIPPING_METHODS } from '../../../constants/hero'

type Props = {
  values: Record<string, string>
  handleChange: (e: React.ChangeEvent<any>) => void
  errors: Record<string, string>
  touched: Record<string, boolean>
  handleBlur: () => void
}

export const ShippingDetails: React.FC<Props> = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  const [firstField, secondField, thirdField, foursField] = SHIPPING_FIELDS
  return (
    <div className={styles.shipping}>
      <h2 className={styles.title}>Shipping Details</h2>
      <div className={styles.fields}>
        <div className={styles.inputWrapper}>
          <CustomTextField
            id={firstField.id}
            name={firstField.id}
            label={firstField.label}
            type={firstField.type}
            value={values.address}
            onChange={handleChange}
            fullWidth
            onBlur={handleBlur}
          />
          {touched[firstField.id] && errors[firstField.id] && (
            <div className={styles.error}>{errors[firstField.id]}</div>
          )}
        </div>
        <div className={styles.grid}>
          <div className={styles.inputWrapper}>
            <CustomTextField
              id={secondField.id}
              name={secondField.id}
              label={secondField.label}
              type={secondField.type}
              value={values.city}
              onChange={handleChange}
              fullWidth
              onBlur={handleBlur}
            />
            {touched[secondField.id] && errors[secondField.id] && (
              <div className={styles.error}>{errors[secondField.id]}</div>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <CustomTextField
              id={thirdField.id}
              name={thirdField.id}
              label={thirdField.label}
              type={thirdField.type}
              value={values.zip}
              onChange={handleChange}
              fullWidth
              onBlur={handleBlur}
            />
            {touched[thirdField.id] && errors[thirdField.id] && (
              <div className={styles.error}>{errors[thirdField.id]}</div>
            )}
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <CustomTextField
            id={foursField.id}
            name={foursField.id}
            label={foursField.label}
            type={foursField.type}
            value={values.country}
            onChange={handleChange}
            fullWidth
            onBlur={handleBlur}
          />
          {touched[foursField.id] && errors[foursField.id] && (
            <div className={styles.error}>{errors[foursField.id]}</div>
          )}
        </div>
      </div>

      <h3 className={styles.subtitle}>Shipping Method</h3>
      <div className={styles.methods}>
        <div className={styles.column}>
          <div>
            <label className={styles.method}>
              <img src={Oval} alt="oval" />
              <span className={styles.methodName}>
                {SHIPPING_METHODS[0].name}
              </span>
              <input
                className={styles.radio}
                onChange={handleChange}
                type="radio"
                name="shippingMethod"
                value={SHIPPING_METHODS[0].value}
                defaultChecked={
                  values.shippingMethod === SHIPPING_METHODS[0].value
                }
              />
            </label>
            {!values.shippingMethod && (
              <div className={styles.error}>{errors['shippingMethod']}</div>
            )}
          </div>
          <div>
            <label className={styles.method}>
              <img src={Oval} alt="oval" />
              <span className={styles.methodName}>
                {SHIPPING_METHODS[1].name}
              </span>
              <input
                className={styles.radio}
                onChange={handleChange}
                type="radio"
                name="shippingMethod"
                value={SHIPPING_METHODS[1].value}
                defaultChecked={
                  values.shippingMethod === SHIPPING_METHODS[1].value
                }
              />
            </label>
            {!values.shippingMethod && (
              <div className={styles.error}>{errors['shippingMethod']}</div>
            )}
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <label className={styles.method}>
              <img src={Oval} alt="oval" />
              <span className={styles.methodName}>
                {SHIPPING_METHODS[2].name}
              </span>
              <input
                className={styles.radio}
                onChange={handleChange}
                type="radio"
                name="shippingMethod"
                value={SHIPPING_METHODS[2].value}
                defaultChecked={
                  values.shippingMethod === SHIPPING_METHODS[2].value
                }
              />
            </label>
            {!values.shippingMethod && (
              <div className={styles.error}>{errors['shippingMethod']}</div>
            )}
          </div>
          <div>
            <label className={styles.method}>
              <img src={Oval} alt="oval" />
              <span className={styles.methodName}>
                {SHIPPING_METHODS[3].name}
              </span>
              <input
                className={styles.radio}
                onChange={handleChange}
                type="radio"
                name="shippingMethod"
                value={SHIPPING_METHODS[3].value}
                defaultChecked={
                  values.shippingMethod === SHIPPING_METHODS[3].value
                }
              />
            </label>
            {!values.shippingMethod && (
              <div className={styles.error}>{errors['shippingMethod']}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
