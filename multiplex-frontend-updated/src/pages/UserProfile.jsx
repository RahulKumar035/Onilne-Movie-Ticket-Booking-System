import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UserProfile() {
  const [data, setData] = useState()
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/users/' + sessionStorage.getItem('id'))
      .then((resp) => {
        setData(resp.data)
      })
  }, [])
  return (
    <>
      <div className='container mt-5'>
        <h4>User Profile {data?.name}</h4>
        <table className='table table-bordered mt-4'>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>
                {data?.firstName} {data?.lastName}
              </th>
            </tr>
            <tr>
              <th>User name</th>
              <th>{data?.userName}</th>
            </tr>
            <tr>
              <th>Address</th>
              <th>
                {data?.contact?.address} {data?.contact?.city}(
                {data?.contact?.state}) {data?.contact?.country}-
                {data?.contact.zipcode}
              </th>
            </tr>
            <tr>
              <th>Phone no</th>
              <th>{data?.contact.mobile}</th>
            </tr>
            <tr>
              <th>Email Id</th>
              <th>{data?.email}</th>
            </tr>
            <tr>
              <th>Owner Status</th>
              <th>{data?.active ? 'Active' : 'Inactive'}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
}
