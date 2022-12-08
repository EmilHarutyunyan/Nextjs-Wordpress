import React, { useState } from 'react'
import useHideShow from '../../hooks/useHideShow'
import {RiArrowDownSFill} from "react-icons/ri"
import styles from "./Select.module.scss"

const Select = () => {
  const options = [
    {
      id: Math.random(),
    name:"USD",
    },
    {
      id: Math.random(),
    name:"AED",
    },
    {
      
    id: Math.random(),
    name:"CAD",
    },
    {
  
    id: Math.random(),
    name:"EUR",
    }
  ]
  const [selectValue, setSelectValue] = useState(options[0])
	const [active, setActive] = useState(false)
	const [headerRef, childrenRef, setShowLinks] = useHideShow()
  return (
    <div className={styles.selectWrap}>
			<select
				defaultValue="USD"
				style={{ display: "none" }}
			>
				{selectValue ? (
					<option value={selectValue.name}>{selectValue.name}</option>
				) : (
					null
					
				)}
			</select>
			<div
				className={`${styles.selectCustom} select-custom ${active ? "is-active" : ""}`}
				onClick={() => setActive(!active)}
			>
				<div className={styles.selectHeader} onClick={() => setShowLinks(show => !show)}>
					<span className={styles.selectTitle}>
						{selectValue ? <>{selectValue.name}</> : <>{mainValue.name}</>}
					</span>
          <RiArrowDownSFill />
				</div>
				<div className={styles.selectBody}
					ref={headerRef}
					style={{ height: "150px !important", overflow: "auto" }}
				>
					<div ref={childrenRef}>
						{
							options.map((item,idx )=> {
								const {  name } = item
								const oldName = selectValue?.name || ''
								if(item.name === oldName) return null
								return (
									<div className={styles.selectItem}
										key={idx}
										onClick={() => {
											
											setShowLinks(show => !show)
											setSelectValue(item)
					
											// setMainValue({ _id, name })
										}}
									>
										<p>{name}</p>
									</div>
								)
							})}
					</div>
				</div>
			</div>
		</div>
  )
}

export default Select