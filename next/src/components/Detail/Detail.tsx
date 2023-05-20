import React, { useState } from 'react'
import styles from './Detail.module.scss';
import GoogleMap from '../GoogleMap/GoogleMap';
import ModalBox from '../ModalBox/ModalBox';

export default function Detail(props: { data: any, nextParking: CallableFunction, previousParking: CallableFunction, refresh: CallableFunction }) {

  const [modalActive, setModalActive] = useState(false);

  return (
    <section className={styles.detail}>
      {(props.data) &&
        <>
          <header>
            <h2>{props.data.fields.name}</h2>
            <div className={styles.buttons}>
              <button onClick={() => props.previousParking()}><i className="fas fa-arrow-alt-circle-left"></i></button>
              <button onClick={() => props.nextParking()}><i className="fas fa-arrow-alt-circle-right"></i></button>
              <button onClick={() => setModalActive(true)}><i className="fas fa-info-circle"></i></button>
            </div>
            <div className={styles.details}>
              <span>laatst geupdate: {new Date(props.data.fields.lastupdate).toLocaleTimeString()}</span>
              <button onClick={() => props.refresh()}><i className="fas fa-arrows-rotate"></i></button>
            </div>
          </header>

          <GoogleMap name={props.data.fields.name} />

          <ModalBox
            title={`Details ${props.data.fields.name}`}
            modalState={modalActive}
            updateModalState={setModalActive}
            content={
              <div className={styles.modalContent}>
                <header>
                  {props.data.fields.availablecapacity} / {props.data.fields.totalcapacity} vrij
                  Open: {props.data.fields.isopennow === 0 ? "nee" : "ja"}
                  <div className={styles.modalButtons}>
                    <button onClick={() => props.previousParking()}><i className="fas fa-arrow-alt-circle-left"></i></button>
                    <button onClick={() => props.nextParking()}><i className="fas fa-arrow-alt-circle-right"></i></button>
                  </div>
                </header>
                <p>{props.data.fields.description}</p>
                <ul>
                  <li>Gratis: {props.data.fields.freeparking === 0 ? "nee" : "ja"}</li>
                  <li>Openings uren: {props.data.fields.openingtimesdescription}</li>
                  <li>Type: {props.data.fields.type === "offStreetParkingGround" ? "parkeerplaats buiten de straat" : "parkeerplaats"}</li>
                </ul>
              </div>
            }
          />
        </>
      }
      {
        (!props.data) &&
        <span>
          no data selected
        </span>
      }
    </section >
  )
}
