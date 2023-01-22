import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addEmployee,
  getEmployeeById,
  editEmployee,
} from "../services/localstorage";
import { useForm } from "./../hooks/useForm";

export const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: "",
    email: "",
    address: "",
    nail: "",
  });

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editEmployee(id, inputValues) : addEmployee(inputValues);
    setShowAlert(true);
    resetForm();
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      {/* HEADER */}
      <div>
        <div>
          <button
            className="btn-lg text-white bg-dark p-2 my-1.5 w-25 rounded-pill btn-outline-secondary"
            onClick={() => navigate("/employee-list")}
          >
            Back
          </button>
          <h1 className="text-center">{id ? "Edit" : "Create"} Order</h1>
        </div>
        {showAlert && (
          <div>
            <div className="alert alert-success text-white" role="alert">
              {id
                ? "Hurray! Order updated successful"
                : "well done! successfully added a new order"}{" "}
              .
            </div>
          </div>
        )}
        {/* FORM */}
        <div className="card border-primary p-4 m-1">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label mt-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputValues.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label mt-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={inputValues.email}
                onChange={handleInputChange}
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="form-label mt-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={inputValues.address}
                onChange={handleInputChange}
                className="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nail" className="form-label mt-1">
                Nail Type
              </label>
              <input
                type="text"
                name="nail"
                value={inputValues.nail}
                onChange={handleInputChange}
                className="form-control"
                id="nail"
                placeholder="Enter nail-type"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-outline-primary">
                Add Order 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
