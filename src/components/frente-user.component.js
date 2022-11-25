import React, { Component } from "react";


import tomatecorto from '../assets/tomatecorto.jpeg';

export default class CreateUser extends Component {
  render() {
    return (
      <div className="container justify-content-center align-items-center h-100">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center bg-dark">
              <img src={tomatecorto} alt="" />
              <div className="card-body text-light">
                <h4 className="card-title">Tomate</h4>
                <p className="card-text text-secondary">Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500.</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                  Más Información
                </a>
                <card />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center bg-dark">
              <img src={tomatecorto} alt="" />
              <div className="card-body text-light">
                <h4 className="card-title">Tomate</h4>
                <p className="card-text text-secondary">Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500.</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                  Más Información
                </a>
                <card />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center bg-dark">
              <img src={tomatecorto} alt="" />
              <div className="card-body text-light">
                <h4 className="card-title">Tomate</h4>
                <p className="card-text text-secondary">Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500.</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                  Más Información
                </a>
                <card />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}