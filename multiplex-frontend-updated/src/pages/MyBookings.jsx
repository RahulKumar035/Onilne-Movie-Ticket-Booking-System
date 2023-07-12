import axios from 'axios'
import { format, parse } from 'date-fns'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {findslot, formatDate} from '../lib/util'

export default function MyBookings() {
  const [data, setData] = useState([])
  const handleCancel = (id) => {
    axios
      .get('http://localhost:8080/api/bookings/cancel/' + id)
      .then((resp) => {
        Swal.fire({ title: resp.data })
        loadData()
      })
  }
  const loadData = () => {
    axios
      .get(
        'http://localhost:8080/api/bookings?userid=' +
          sessionStorage.getItem('id')
      )
      .then((resp) => {
        setData(resp.data)
      })
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <div className='container mt-5'>
        <h5 className='p-2'>Booking History</h5>
        <table className='table table-bordered'>
          <thead>
            <th>Id</th>
            <th>Booking Date</th>
            <th>Movie</th>            
            <th>No of Seats</th>
            <th>Cost</th>
            <th>Show Date</th>
            <th>Status</th>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x?.bookingId}>
                <td>{x?.bookingId}</td>
                <td>{formatDate(x?.bookDate)}</td>
                <td>
                  <img className='float-start me-2' src={'http://localhost:8080/'+x?.show?.movie?.poster} style={{width:"100px",height:"100px"}} />
                  {x?.show?.movie?.movieName}<br/>
                  ({x?.show?.movie?.year})<br/>
                  {x?.show?.movie?.actor}<br/>
                  {x?.show?.movie?.director}
                </td>                
                <td>{x?.noOfSeats}</td>
                <td>{x?.cost}</td>
                <td>
                  {formatDate(x?.showDate)}<br/>
                  {findslot(x?.show?.slot)}
                </td>
                <td>{x?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
