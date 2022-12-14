import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { carsData } from '../../data/data'
import styles from "./SelectModel.module.scss"
// Img
import buttonImg from "../../../public/images/buttonImg.png"
const SelectModel = () => {
  const [makeCar,setMakeCar] = useState('')

  const [modelCar,setModelCar] = useState([])
  const [modelCarChoose,setModelCarChoose] = useState('')

  const [yearsCar,setYarsCar] = useState([])
  const [yearsCarChoose,setYarsCarChoose] = useState('')

  const setCars = useMemo(()=> {
    const carsModel = new Set([])
    Object.keys(carsData).map(item => {
      carsData[item].map(car => carsModel.add(car.Make))
    })
    return carsModel
  },[carsData])

  useEffect(()=> {
    if(makeCar) {
      const modelCarData = []
      Object.keys(carsData).map(item => {
        
        carsData[item].map(car => {
          
          if(makeCar === car.Make) {
            modelCarData.push(car.Model)
          }
        })
      })
      setModelCar(modelCarData)
    }
  },[makeCar])
  useEffect(()=> {
    if(makeCar && modelCarChoose) {
      const yearsData = []
      Object.keys(carsData).map(item => {
        carsData[item].map(car => {
          if(makeCar === car.Make && modelCarChoose === car.Model) {
            yearsData.push(car['From/Year'])
          }
        })
      })
      setYarsCar(yearsData)
    }
  },[makeCar, modelCarChoose])
  return (
    <div className={styles.selectModelWrap}>
    <form action="">
      <select defaultValue={'MAKE'} onChange={(e) => setMakeCar(e.target.value)}>
        <option value="MAKE" >MAKE</option>
        {[...setCars].map((car)=> {
          return <option value={car}>{car}</option>
        })}
      </select>
      <select defaultValue={'MODEL'}  onChange={(e) => setModelCarChoose(e.target.value)} disabled={!makeCar}>
        <option value="MODEL">MODEL</option>
        {modelCar.length > 0 ? (modelCar.map((model)=>  <option value={model}>{model}</option>)) : null }
      </select>
      <select defaultValue={'YEAR'} onChange={(e) => setYarsCarChoose(e.target.value)} disabled={!modelCarChoose}>
        <option value="YEAR">YEAR</option>
        {yearsCar.length > 0 ? (yearsCar.map((year)=>  <option value={year}>{year}</option>)) : null }
      </select>
      <button type='submit'>
        <Image  src={buttonImg}/>
      </button>
    </form>
    </div>
  )
}

export default SelectModel