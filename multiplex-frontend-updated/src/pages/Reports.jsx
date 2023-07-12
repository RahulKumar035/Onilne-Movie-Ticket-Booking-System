import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Reports() {
  const [data, setData] = useState([])
  const handleCancel = (id) => {
    axios.delete('http://localhost:8080/api/bookings/' + id).then((resp) => {
      Swal.fire({ title: resp.data })
      loadData()
    })
  }
  const loadData = () => {
    axios.get('http://localhost:8080/api/bookings').then((resp) => {
      setData(resp.data)
    })
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <div className='container mt-5'>
        <h5 className='p-2'>Reports</h5>
        <table className='table table-bordered'>
          <thead>
            <th>Id</th>
            <th>Booking Date</th>
            <th>User Name</th>
            <th>No of Seats</th>
            <th>Show Date</th>
            <th>Cost</th>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x?.bookingId}>
                <td>{x?.bookingId}</td>
                <td>{x?.bookDate}</td>
                <td>{x?.user?.userName}</td>
                <td>{x?.noOfSeats}</td>
                <td>{x?.showDate}</td>
                <td>{x?.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
