import { useRouter } from 'next/router'
import React from 'react'

import styles from "./SettingCustomize.module.scss"
const SettingCustomize = () => {
  const route = useRouter()
  console.log('route :', route);
  
  return (
    <div>SettingCustomize</div>
  )
}

export default SettingCustomize