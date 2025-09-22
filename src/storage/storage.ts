import { DEFAULT_CARDS } from '../data/defaultStorage'

export type Good = {
  title: string
  subtitle: string
  price: string
  img: string
  id: string
}

export type Order = Good[]

const storageKey = 'card'

export function addItems(value: Order): void {
  localStorage.setItem(storageKey, JSON.stringify(value))
}

export function getItems(): Order {
  const data = JSON.parse(localStorage.getItem(storageKey)) as Order

  if (!data?.length) {
    return DEFAULT_CARDS
  }

  return data
}
