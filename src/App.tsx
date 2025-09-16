import React from 'react'
import './styles/global.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/main/Hero/Hero'
import { Benefits } from './components/Benefits/Benefits'
import { Footer } from './components/Footer/Footer'

import { BENEFITS } from './constants/benefits'
import { FOOTER_DATA } from './constants/footer'
import { DEFAULT_HEADER_ICONS } from './constants/icons'
import { DEFAULT_HEADER_MENU } from './constants/texts'

export const App = () => (
  <>
    <Header menu={DEFAULT_HEADER_MENU} icons={DEFAULT_HEADER_ICONS} />
    <main className="main">
      <Hero />
      <Benefits items={BENEFITS} />
    </main>
    <Footer data={FOOTER_DATA} />
  </>
)
