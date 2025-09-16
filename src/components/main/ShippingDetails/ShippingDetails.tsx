import React from 'react'
import styles from './ShippingDetails.module.css'
import Oval from '../../../assets/images/oval.png'
import { CustomTextField } from '../../UI/CustomTextField/CustomTextField'

type ShippingField = {
  label: string
  type: string
  id: string
}

type ShippingMethod = {
  name: string
  value: string
  icon: string
}

type Props = {
  fields: ShippingField[]
  methods: ShippingMethod[]
  values: Record<string, string>
  handleChange: (e: React.ChangeEvent<any>) => void
  errors: Record<string, string>
  touched: Record<string, boolean>
  handleBlur: () => void
}

export const ShippingDetails: React.FC<Props> = ({
  fields,
  methods,
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => (
  <div className={styles.shipping}>
    <h2 className={styles.title}>Shipping Details</h2>
    <div className={styles.fields}>
      {fields.map((f) => (
        <div className={styles.inputWrapper} key={f.id}>
          <CustomTextField
            id={f.id}
            name={f.id}
            label={f.label}
            type={f.type}
            value={values[f.id]}
            onChange={handleChange}
            fullWidth
            onBlur={handleBlur}
          />
          {touched[f.id] && errors[f.id] && (
            <div className={styles.error}>{errors[f.id]}</div>
          )}
        </div>
      ))}
    </div>

    <h3 className={styles.subtitle}>Shipping Method</h3>
    <div className={styles.methods}>
      {methods.map((m, index) => (
        <label key={m.value} className={styles.method}>
          <img src={Oval} alt="oval" />
          <span className={styles.methodName}>{m.name}</span>
          <input
            className={styles.radio}
            type="radio"
            name="shippingMethod"
            value={m.value}
            defaultChecked={index === 0}
          />
        </label>
      ))}
    </div>
  </div>
)
