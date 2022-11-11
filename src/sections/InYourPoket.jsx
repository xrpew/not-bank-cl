import { ActApp, DigitalWallet, Paga2 } from "../pages";

export const InYourPoket = () => {
  return (
    <>
      <h3>El Banco en tu Bolsillo</h3>
      <h6>Conoce las diferentes alternativas que tenemos para ti</h6>

      <div className="slider-container">
        <div className="nav">
          <a className="slider-item opcionesPago" data-toggle="tab" href="#nav-ActApp">
            <div className="opcionesPago">
              <p>Act App</p>
            </div>
          </a>
          <a className="slider-item opcionesPago" data-toggle="tab" href="#nav-paga2">
            <div className="opcionesPago">
              <p>Paga2</p>
            </div>
          </a>
          <a className="slider-item opcionesPago" data-toggle="tab" href="#nav-walletD">
            <div className="opcionesPago">
              <p>Wallet D</p>
            </div>
          </a>
        </div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-ActApp"
          role="tabpanel"
          aria-labelledby="nav-ActApp-tab"
        >
          <ActApp />
        </div>

        <div
          className="tab-pane fade"
          id="nav-paga2"
          role="tabpanel"
          aria-labelledby="nav-paga2-tab"
        >
          <Paga2 />
        </div>

        <div
          className="tab-pane fade"
          id="nav-walletD"
          role="tabpanel"
          aria-labelledby="nav-walletD-tab"
        >
          <DigitalWallet />
        </div>
      </div>
    </>
  );
};
