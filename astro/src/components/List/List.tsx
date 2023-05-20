import React, { useCallback } from 'react'
import styles from './list.scss';

export default function List(props: { data: any, setCurrentParking: CallableFunction }) {

  const setDetail = useCallback((index: Number) => {
    props.setCurrentParking(index);
  }, [props])


  return (
    <aside>
      <ul className='list'>
        {Object.values(props.data).map((data: any, index: Number) => {
          return (
            <li onClick={() => setDetail(index)} key={data.recordid}>
              <div>{data.fields.name}</div>
              <div>{data.fields.availablecapacity} /  {data.fields.totalcapacity} vrij</div>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}
