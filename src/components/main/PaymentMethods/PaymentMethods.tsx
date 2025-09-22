import React from 'react'
import styles from './PaymentMethods.module.css'
import Oval from '../../../assets/images/oval.png'
import { PAYMENT_METHODS } from '../../../constants/hero'

type Props = {
  errors: Record<string, string>
  values: Record<string, string>
  handleChange: () => void
}

export const PaymentMethods: React.FC<Props> = ({
  values,
  errors,
  handleChange,
}) => (
  <div className={styles.payment}>
    <div>
      <h2 className={styles.title}>{PAYMENT_METHODS[0].title}</h2>
      <div className={styles.grid}>
        <label className={styles.method}>
          <img src={Oval} alt="oval" />
          <span className={styles.methodName}>{PAYMENT_METHODS[1].name}</span>
          <input
            className={styles.radio}
            onChange={handleChange}
            type="radio"
            name="paymentMethod"
            value={PAYMENT_METHODS[1].value}
            defaultChecked={values.paymentMethod === PAYMENT_METHODS[1].value}
          />
          {errors['paymentMethod'] && (
            <div className={styles.error}>{errors['paymentMethod']}</div>
          )}
        </label>
        <label className={styles.method}>
          <img src={Oval} alt="oval" />
          <span className={styles.methodName}>{PAYMENT_METHODS[2].name}</span>
          <input
            className={styles.radio}
            type="radio"
            onChange={handleChange}
            name="paymentMethod"
            value={PAYMENT_METHODS[2].value}
            defaultChecked={values.paymentMethod === PAYMENT_METHODS[2].value}
          />
          {errors['paymentMethod'] && (
            <div className={styles.error}>{errors['paymentMethod']}</div>
          )}
        </label>
      </div>
    </div>
  </div>
)
