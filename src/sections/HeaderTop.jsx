import { ACTPage, FANPage, AbreAhoraPage } from "../pages";

export const HeaderTop = () => {
  return (
    <>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-FAN"
          role="tabpanel"
          aria-labelledby="nav-FAN-tab"
        >
          <FANPage />
        </div>

        <div
          className="tab-pane fade"
          id="nav-ACT"
          role="tabpanel"
          aria-labelledby="nav-ACT-tab"
        >
          <ACTPage />
        </div>

        <div
          className="tab-pane fade"
          id="nav-AbreAhora"
          role="tabpanel"
          aria-labelledby="nav-AbreAhora-tab"
        >
          <AbreAhoraPage />
        </div>
      </div>
      
      <div  className="slider-container"> 
      <div className="nav">
        <a  
          className="slider-item " 
          data-toggle="tab"
          href="#nav-FAN"
          >
          
            <img
                src="https://portales.bancochile.cl/uploads/000/040/511/7dffdffc-eb5d-426a-acdd-87cbae620d71/original/banner_1M_FAN.jpg"
                />
            <div className="text-cont">
                <p>CUENTA FAN</p>
                <span>Ya somos 1.000.000</span>
            </div>
        </a> 
        <a  className="slider-item" 
            data-toggle="tab"
            href="#nav-ACT"
            >
            <img
                src="https://portales.bancochile.cl/uploads/000/036/356/6a34b8ca-f0db-45ed-aa33-6f6bf3834e41/original/MicrosoftTeams-image_3_.png"
                />
            <div className="text-cont">
                <p>ACTUALIZA TU APP</p>
                <span>Descarga Mi Banco</span>
            </div>
        </a> 
        <a  className="slider-item" 
            data-toggle="tab"
            href="#nav-AbreAhora"
            >
            <img
                src="https://portales.bancochile.cl/uploads/000/034/144/2464ae74-6d93-400b-948d-3f1fa5a34c7b/original/MicrosoftTeams-image_2_.png"
            />
            <div className="text-cont">
                <p>ABRE AHORA </p>
                <span>Cuenta Corriente Dígital</span>
            </div>
        </a> 
      </div> 
    </div>
    </>
  );
};
