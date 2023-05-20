import React, { useCallback, useState } from 'react'
import List from '../List/List';
import Detail from '../Detail/Detail';

export default function ParkingData(props: { data: any }) {

  const [currentParking, setCurrentParking] = useState(0);
  const [data, setData] = useState(props.data.records);

  const refresh = useCallback(async () => {
    const res = await fetch('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time');
    const data = await res.json();

    setData(data.records);
  }, []);

  const nextParking = useCallback(() => {
    if (currentParking >= data.length - 1) {
      setCurrentParking(0);
      return
    }
    setCurrentParking(currentParking + 1);
  }, [currentParking, data.length]);

  const previousParking = useCallback(() => {
    if (currentParking == 0) {
      setCurrentParking(data.length - 1);
      return
    }
    setCurrentParking(currentParking - 1);
  }, [currentParking, data.length]);

  return (
    <>
      <List
        data={data}
        setCurrentParking={setCurrentParking}
      />
      <Detail
        data={data[currentParking]}
        nextParking={nextParking}
        previousParking={previousParking}
        refresh={refresh}
      />
    </>
  )
}
