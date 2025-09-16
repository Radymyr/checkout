import React from 'react'
import styles from './OrderSummary.module.css'
import { TextFieldWithButton } from '../../UI/TextFieldWithButton/TextFieldWithButton'

type OrderItem = {
  title: string
  subtitle: string
  price: string
  img: string
}

type OrderTotal = {
  promo: {
    title: string
    placeholder: string
    button: string
  }
  rows: { label: string; value: string }[]
  total: { label: string; value: string }
  checkout: string
}

type OrderSummaryProps = {
  items: OrderItem[]
  total: OrderTotal
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => (
  <div className={styles.orders}>
    <h2 className={styles.title}>Order Summary</h2>
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <div className={styles.image}></div>
          <div className="hero__order__info">
            <h3 className={styles.orderTitle}>{item.title}</h3>
            <p className={styles.orderSubtitle}>{item.subtitle}</p>
          </div>
          <p className={styles.price}>{item.price}</p>
        </li>
      ))}
    </ul>

    <div className={styles.promo}>
      <h3 className={styles.promoTitle}>{total.promo.title}</h3>
      <TextFieldWithButton
        label={total.promo.placeholder}
        buttonText={total.promo.button}
        fullWidth
        onButtonClick={() => console.log('Apply promo')}
      />
    </div>

    <div className={styles.summary}>
      {total.rows.map((row, i) => (
        <div key={i} className={styles.row}>
          <span>{row.label}</span>
          <span>{row.value}</span>
        </div>
      ))}
      <div className={styles.rowTotal}>
        <strong>{total.total.label}</strong>
        <strong>{total.total.value}</strong>
      </div>
    </div>

    <button className={styles.checkoutButton}>{total.checkout}</button>
  </div>
)
