import React from 'react'
import styles from './Hero.module.css'

import { CheckoutForm } from '../../CheckoutForm/CheckoutForm'

export const Hero = () => (
  <section className={styles.hero}>
    <div className="container">
      <h1 className={styles.heroTitle}>Checkout</h1>
      <CheckoutForm />
    </div>
  </section>
)
