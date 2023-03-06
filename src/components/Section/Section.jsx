import React from "react";

const Section = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Surname</td>
            <td>Age</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
