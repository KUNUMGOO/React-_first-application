import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">For more informations</h5>
          <p class="card-text">
            You can create, add or change the items in table by contacting us
            through contact channels which is mentioned in our site.
          </p>
          <a href="#" class="btn btn-success">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
