import React from 'react'
import { FaPhoneAlt, FaMailBulk, FaFileAlt } from 'react-icons/fa'

const Table = ({ data }) => {

  return (
    <div className="table">
      {data.length > 0 ? (
        data.map((item) => (
          <div className="table-item" key={item.id}>
            <div className="table-name">{item.name}</div>
            <div className="table-section">
              <span>
                <FaPhoneAlt className="table-icon" />
                {item.telephone}
              </span>
              <span className="table-section-mail">
                <FaMailBulk className="table-icon" />
                {item.mail}
              </span>
              <span>
                <FaFileAlt className="table-icon" />
                Policy No.
                {item.policy}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="table-nodata"> No Data </div>
      )}
    </div>
  )
}

export default Table
