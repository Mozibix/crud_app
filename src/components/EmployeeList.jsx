import { useEffect, useState } from "react";
import { EmployeeItem } from "./EmployeeItem";
import { getListOfEmployees } from "./../services/localstorage";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getListOfEmployees());
  }, []);
  return (
    <div>
      <h1 className="my-5 text-center">Manage Employees</h1>
      {employees.length > 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <EmployeeItem
                  employee={employee}
                  key={employee.id}
                  setEmployees={setEmployees}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center">No employees</h3>
      )}
    </div>
  );
};
