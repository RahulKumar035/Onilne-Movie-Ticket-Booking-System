import React, { useState } from "react";
import ShowCase from "../components/ShowCase";
import Cinema from '../components/Cinema';

const rows=8;

export default function SeatSelect({occupied, setseatnos}) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  return (
    <div className="App" style={{backgroundColor:"black"}}>      
      <ShowCase />
      <Cinema
        occupied={occupied}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>{
                setSelectedSeats(selectedSeats)
                setseatnos(selectedSeats)
            }
        }
        rows={rows}
      />

      <p className="text-white">
        Total seats alloted for you is{" "}
        <span className="count">{selectedSeats.length}</span>                
      </p>
    </div>
  );
}

