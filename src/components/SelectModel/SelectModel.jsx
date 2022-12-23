import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { carsData } from '../../data/data'
import styles from "./SelectModel.module.scss"
// Img
import buttonImg from "../../../public/images/buttonImg.png"
import { useRouter } from 'next/router'
const SelectModel = () => {
  const [makeCar,setMakeCar] = useState('')

  const [modelCar,setModelCar] = useState([])
  const [modelCarChoose,setModelCarChoose] = useState('')

  const [yearsCar,setYarsCar] = useState([])
  const [yearsCarChoose,setYarsCarChoose] = useState('')

  const router = useRouter()

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
          
          if(makeCar === car['Make']) {
            modelCarData.push(car['Model'])
          }
        })
      })
      setModelCar(modelCarData)
    }
  },[makeCar])
  useEffect(()=> {
    if(makeCar && modelCarChoose) {
      const yearsData = []
      debugger
      Object.keys(carsData).map(item => {
        carsData[item].map(car => {
        

          if(makeCar === car['Make'] && modelCarChoose === car['Model']) {
            debugger
            yearsData.push(car['From/Year'])
          }
        })
      })
      debugger
      
      console.log('🚀 ~ file: SelectModel.jsx:53 ~ Object.keys ~ yearsData', yearsData)
      setYarsCar(yearsData)
    }
  },[makeCar, modelCarChoose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    debugger
    if(makeCar && modelCarChoose && yearsCarChoose) {
    console.log('yearsCarChoose :', yearsCarChoose);
    console.log('modelCarChoose :', modelCarChoose);
    console.log('makeCar :', makeCar);
      
      router.push(`/search/results?make=${makeCar}&model=${modelCarChoose}&year=${yearsCarChoose}`)
    }
  }
  return (
    <div className={styles.selectModelWrap}>
    <form onSubmit={handleSubmit}>
      <select defaultValue={'MAKE'} onChange={(e) => setMakeCar(e.target.value)}>
        <option value="MAKE" >MAKE</option>
        {[...setCars].map((car,idx)=> {
          return <option value={car} key={idx}>{car}</option>
        })}
      </select>
      <select defaultValue={'MODEL'}  onChange={(e) => setModelCarChoose(e.target.value)} disabled={!makeCar}>
        <option value="MODEL">MODEL</option>
        {modelCar.length > 0 ? (modelCar.map((model,idx)=>  <option key={idx} value={model}>{model}</option>)) : null }
      </select>
      <select defaultValue={'YEAR'} onChange={(e) => setYarsCarChoose(e.target.value)} disabled={!modelCarChoose}>
        <option value="YEAR">YEAR</option>
        {yearsCar.length > 0 ? (yearsCar.map((year,idx)=>  <option key={idx} value={year}>{year}</option>)) : null }
      </select>
      <button type='submit'>
        <Image  src={buttonImg}/>
      </button>
    </form>
    </div>
  )
}

export default SelectModel