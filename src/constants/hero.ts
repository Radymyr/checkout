export const PERSONAL_FIELDS = [
  { label: 'Full Name', type: 'text', id: 'name' },
  { label: 'Email Address', type: 'email', id: 'email' },
  { label: 'Phone number', type: 'tel', id: 'phone' },
]

export const SHIPPING_FIELDS = [
  { label: 'Street Address', type: 'text', id: 'address' },
  { label: 'City', type: 'text', id: 'city' },
  { label: 'Zip Code', type: 'text', id: 'zip' },
  { label: 'Country', type: 'text', id: 'country' },
]

export const SHIPPING_METHODS = [
  { name: 'Odeon Express', value: 'odeon', icon: '' },
  { name: 'Cipay Jet', value: 'jet', icon: '' },
  { name: 'Gorgom Express', value: 'express', icon: '' },
  { name: 'Eunioa Fast', value: 'fast', icon: '' },
]

export const PAYMENT_METHODS = [
  { title: 'Payment Method' },
  { name: 'Paypal', value: 'paypal', icon: '' },
  { name: 'Credit Card', value: 'credit', icon: '' },
]

export const ORDER_TOTAL = {
  promo: {
    title: 'Apply Promocode',
    placeholder: 'Promotion or Discount code',
    button: 'Apply Code',
  },
  rows: [
    { label: 'Sub total', value: '$240' },
    { label: 'Shipping Fee', value: '$40' },
  ],
  total: {
    label: 'Total',
    value: '$280',
  },
  checkout: 'Checkout',
}
