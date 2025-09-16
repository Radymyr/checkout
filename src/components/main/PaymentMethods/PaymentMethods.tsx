import React from 'react'
import styles from './paymentMethods.module.css'
import Oval from '../../../assets/images/oval.png'

type PaymentMethod = {
  name: string
  value: string
  icon: string
}

type Props = {
  methods: PaymentMethod[]
}

export const PaymentMethods: React.FC<Props> = ({ methods }) => (
  <div className={styles.payment}>
    <h2 className={styles.title}>Payment Method</h2>
    <div className={styles.methods}>
      {methods.map((m, index) => (
        <label key={m.value} className={styles.method}>
          <img src={Oval} alt="oval" />
          <span className={styles.methodName}>{m.name}</span>
          <input
            className={styles.radio}
            type="radio"
            name="paymentMethod"
            value={m.value}
            defaultChecked={index === 0}
          />
        </label>
      ))}
    </div>
  </div>
)
