import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice'
import { removeReservation } from '../features/reservationSlice'
import { v4 as uuid} from "uuid";

interface ReservationCardsTypes {
    name: string
    index: number
}

const ReservationCards = ({ name, index } : ReservationCardsTypes) => {
     const dispatch = useDispatch()
     

  return <div 
  onClick ={() =>{
    dispatch(removeReservation(index));
    dispatch(addCustomer({
        id: uuid(),
        name,
        food:[]
    }));
  }}
   className="reservation-card-container">{name}</div>;
}

export default ReservationCards