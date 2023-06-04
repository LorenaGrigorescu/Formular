import React from 'react';
import "./History.css";

function History({ data }) {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Child</th>
          <th>Adult</th>
          <th>Date</th>
          <th>Duration</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id.timestamp}>
            <td>{item.child && item.child.name}</td>
            <td>{item.adult && item.adult.username}</td>
            <td>{item.date}</td>
            <td>{item.duration}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default History;
