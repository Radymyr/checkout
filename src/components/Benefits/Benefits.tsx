import React from 'react'
import styles from './Benefits.module.css'

type Benefit = {
  title: string
  subtitle: string
  img: string
}

type Props = {
  items: Benefit[]
}

export const Benefits: React.FC<Props> = ({ items }) => (
  <section className={styles.benefits}>
    <div className="container">
      <div className={styles.content}>
        {items.map((b, i) => (
          <div key={i} className={styles.card}>
            <img className={styles.image} src={b.img} alt="" />
            <h3 className={styles.title}>{b.title}</h3>
            <p className={styles.subtitle}>{b.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
