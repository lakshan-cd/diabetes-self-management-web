import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const DataFetch = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    const result = await axios.get("http://localhost:8082/gettingdata");
    setAdmin(result.data);
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#id</th>
            <th>username</th>
            <th>password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* use mapping to get dynamic data*/}
          {admin.map((admin, index) => (
            <tr>
              <th key={index}>{index + 1}</th>
              <td>{admin.username}</td>
              <td>{admin.password}</td>
              <td>{admin.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataFetch;
