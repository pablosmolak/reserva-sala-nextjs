import styles from "./styles.module.css";
import { Controller } from "react-hook-form"

export default function Select({ name, control, rules,children, errors, id,change, ...props }) {
  return(
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field}) => 
          <select {...field} {...props} 
            className={styles.select} >
              {children}
            </select>
        }
      />
      {errors[name] && <span className={styles.erro}>{errors[name].message}</span>}
  </>
  )
}