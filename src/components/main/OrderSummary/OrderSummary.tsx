import React from 'react'
import styles from './OrderSummary.module.css'
import { TextFieldWithButton } from '../../UI/TextFieldWithButton/TextFieldWithButton'
import { Order } from '../../../storage/storage'
import { ORDER_TOTAL } from '../../../constants/hero'

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
  items: Order
  total: OrderTotal
  onRemove: (id: string) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  errors: Record<string, string>
  touched: Record<string, boolean>
  handleBlur: () => void
  values: Record<string, string>
  totalPrice: number
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  total,
  onRemove,
  handleChange,
  errors,
  touched,
  handleBlur,
  values,
  totalPrice,
}) => {
  return (
    <div className={styles.orders}>
      {items.length > 0 && <h2 className={styles.title}>Order Summary</h2>}

      {items.length > 0 && (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={item.id} className={styles.item}>
              <button
                aria-label="remove item"
                onClick={() => onRemove(item.id)}
                className={styles.close}
              >
                X
              </button>
              <div className={styles.image}></div>
              <div className="hero__order__info">
                <h3 className={styles.orderTitle}>{item.title}</h3>
                <p className={styles.orderSubtitle}>{item.subtitle}</p>
              </div>
              <p className={styles.price}>{item.price}</p>
            </li>
          ))}
        </ul>
      )}

      <div className={styles.promo}>
        <h3 className={styles.promoTitle}>{total.promo.title}</h3>
        <TextFieldWithButton
          value={values.promo}
          label={total.promo.placeholder}
          buttonText={total.promo.button}
          name="promo"
          fullWidth
          onButtonClick={() =>
            (values.promo && alert('promo checked')) ||
            (!values.promo && alert('Enter ur promo'))
          }
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched['promo'] && errors['promo'] && (
          <div className={styles.error}>{errors['promo']}</div>
        )}
      </div>

      <div className={styles.summary}>
        <div className={styles.row}>
          <span>{ORDER_TOTAL.rows[0].label}</span>
          <span>{`$${totalPrice}`}</span>
        </div>
        <div className={styles.row}>
          <span>{ORDER_TOTAL.rows[1].label}</span>
          <span>{ORDER_TOTAL.rows[1].value}</span>
        </div>
        <div className={styles.rowTotal}>
          <strong>{ORDER_TOTAL.total.label}</strong>
          <strong>{`$${totalPrice + Number(ORDER_TOTAL.rows[1].value.slice(1))}`}</strong>
        </div>
      </div>

      <button type="submit" className={styles.checkoutButton}>
        {total.checkout}
      </button>
    </div>
  )
}
