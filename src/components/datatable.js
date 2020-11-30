import React from "react";
import DataBody from "./databody";
import "../styles/table.css";

function datatable({ headings, users, sortTable }) {
  return (
    <div className="datatable mt-5">
      <table
        id="employees"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name, width, index }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    sortTable(index);
                  }}
>
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody users={users} />
      </table>
  </div>
  );
}

export default datatable;
