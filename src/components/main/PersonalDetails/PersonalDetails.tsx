import React from 'react'
import styles from './PersonalDetails.module.css'
import { CustomTextField } from '../../UI/CustomTextField/CustomTextField'

export type PersonalField = {
  label: string
  type: string
  id: string
}

type Props = {
  fields: PersonalField[]
  values: Record<string, string>
  handleChange: (e: React.ChangeEvent<any>) => void
  errors: Record<string, string>
  touched: Record<string, boolean>
  handleBlur: () => void
}

export const PersonalDetails: React.FC<Props> = ({
  fields,
  values,
  handleChange,
  touched,
  errors,
  handleBlur,
}) => (
  <div className={styles.personal}>
    <h2 className={styles.title}>Personal Details</h2>
    {fields.map((f) => (
      <div className={styles.inputWrapper} key={f.id}>
        <CustomTextField
          id={f.id}
          name={f.id}
          label={f.label}
          type={f.type}
          fullWidth
          value={values[f.id]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched[f.id] && errors[f.id] && (
          <div className={styles.error}>{errors[f.id]}</div>
        )}
      </div>
    ))}
  </div>
)
