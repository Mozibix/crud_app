import { useEffect, useState } from "react";
import { getListOfEmployees } from "./../services/localstorage";
import { EmployeeItem } from './EmployeeItem';

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getListOfEmployees());
  }, []);
  return (
    <div>
      <h1 className="my-5 text-center">Manage Orders</h1>
      {employees.length > 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Nail-Type</th>
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
        <h3 className="text-center">No Orders</h3>
      )}
    </div>
  );
};
