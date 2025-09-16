import React, { useState } from 'react'
import styles from './Header.module.css'

type MenuItem = {
  title: string
  href: string
}

type HeaderIcon = {
  icon: string
  alt: string
}

type HeaderProps = {
  logo?: string
  menu?: MenuItem[]
  icons?: HeaderIcon[]
}

export const Header: React.FC<HeaderProps> = ({
  logo = 'Shopdoc',
  menu = [],
  icons = [],
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a className={styles.headerLogo}>{logo}</a>

        <nav className={`${styles.headerMenu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.headerList}>
            {menu.map((item) => (
              <li key={item.title} className={styles.headerItem}>
                <a href={item.href} className={styles.headerLink}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.headerButtons}>
          {icons.map(({ icon, alt }) => (
            <button key={alt} className={styles.headerButton}>
              <img className={styles.headrIcon} src={icon} alt={alt} />
            </button>
          ))}
        </div>

        <button
          className={`${styles.menu} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        />
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          ✕
        </button>
        <ul className={styles.mobileList}>
          {menu.map((item) => (
            <li key={item.title}>
              <a href={item.href} className={styles.headerLink}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
