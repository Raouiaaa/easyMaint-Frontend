import React from 'react';
import Table from 'react-bootstrap/Table';
import dayjs from "dayjs";
import './Table.css'; // Commiting a changeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee .

function TableInfo({ titles, data, showActionsButtons, type, onUpdate }) {

  const formatDate = (dateString) => {
    return dateString ? dayjs(dateString).format("MMMM D, YYYY h:mm A") : null;
  };

  // Define mappings for each data type
  const mappings = {
    assets: {
      "ID": "id_assets",
      "Reference": "name",
      "Location": "location",
      "Category": "category",
      "SubCategory": (row) => row.subCategory?.name || "N/A",
      "Installation Date": "installation_date",
      "Maintenance Frequency inDays": "maintenance_frequency_inDays",
      "Technical Specifications ID": (row) => row.technicalSpecifications?.id_technical_specifications || "N/A",
    },
    workOrders: {
      "ID": "id_work_order",
      "Asset": (row) => row.asset?.name || "N/A",
      "Assigned to": (row) => row.user?.username || "Unassigned",
      "Status": "status",
      "Start date": (row) => formatDate(row.start_date),
      "End date": (row) => formatDate(row.end_date),
      "Creation date": (row) => formatDate(row.created_at),
    },
    notifications: {
      "ID": "id_notifications",
      "Notifications": "message",
    }
  };

  const mapping = mappings[type] || {}; // Get the correct mapping based on type

  // Sort data by ID in descending order
  const sortedData = [...data].sort((a, b) => {
    const idA = a[mapping["ID"]];
    const idB = b[mapping["ID"]];
    return idB - idA; // Descending order
  });

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <Table striped bordered hover className="custom-table">
          <thead >
            <tr>
              {showActionsButtons && <th>Actions</th>}
              {titles.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {showActionsButtons && (
                  <td>
                    <button onClick={() => onUpdate(row)} type="button" className="btn btn-success me-2"><i className="fas fa-edit"></i></button>
                    <button type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                  </td>
                )}
                {titles.map((title, colIndex) => {
                  let value = mapping[title];

                  if (typeof value === "function") {
                    value = value(row); // Execute function for nested values
                  } else {
                    value = row[value]; // Get value from row
                  }

                  return <td key={colIndex}>{value !== undefined ? value : "N/A"}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TableInfo;


