import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import dashboard from "../image/icon/dashboard.png";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const filteredData = data.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Container className="mt-4">
        <h2>
          <img
            src={dashboard}
            alt="React Icon"
            width="50"
            height="50"
            className="me-2"
          />
          All Users
        </h2>

        <div className="bg-white shadow-lg rounded p-4 w-100 w-md-75">
          <input
            type="text"
            placeholder="Search by username..."
            className="form-control mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Table striped bordered hover responsive>
            <thead>
              <tr style={{ border: "1px solid #ddd", textAlign: "center" }}>
                <th>ID</th>
                <th>Username</th>
                <th>Province</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user) => (
                <tr key={user.id}>
                  <td className="text-center">{user.id}</td>
                  <td className="text-center">{user.username}</td>
                  <td className="text-center">{user.province}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
