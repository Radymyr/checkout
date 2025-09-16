import React from 'react'
import styles from './Footer.module.css'

type FooterSection = {
  title: string
  items: { label: string; url: string }[]
  social?: { icon: string; url: string }[]
}

type FooterData = {
  top: FooterSection[]
  bottom: string
}

type Props = {
  data: FooterData
}

export const Footer: React.FC<Props> = ({ data }) => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.content}>
        {data.top.map((section, i) => (
          <div key={i}>
            <h3 className={styles.title}>{section.title}</h3>
            {section.items.length > 0 && (
              <ul className={styles.list}>
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a className={styles.link} href={item.url}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.social && section.social.length > 0 && (
              <ul className={styles.socialList}>
                {section.social.map((s, k) => (
                  <li key={k}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={s.icon}
                        alt="social"
                        className={styles.socialIcon}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p className={styles.subtext}>{data.bottom}</p>
    </div>
  </footer>
)
