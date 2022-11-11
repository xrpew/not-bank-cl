import { CardBeneficios } from "../components/CardBeneficios";
import { SliderBeneficios } from "../components/SliderBeneficios";

export const Beneficios = () => {
  return (
    <>
      <div className="beneficios">
        <h3>
          Disfruta de los Mejores <strong>Beneficios del Chile</strong>
        </h3>

        <div className="slider-text-container">
          <SliderBeneficios title={"Destacados del mes"} />
          <SliderBeneficios title={"Descuentos"} />
          <SliderBeneficios title={"Cuotas sin Interés"} />
          <SliderBeneficios title={"Catálogo de Productos"} />
          <SliderBeneficios title={"Restaurantes"} />
          <SliderBeneficios title={"Viajes"} />
          <SliderBeneficios title={"Dólares-Premio"} />
        </div>
        <div className="card-container">
        <CardBeneficios 
            img={"https://portales.bancochile.cl/uploads/000/039/606/66a4b219-1ae2-4438-9c78-51ef27ec3d7e/original/Bannerbch.jpg"} 
            title={"¡Para todo lo que necesites!"} 
            subtitle={"Usa tu Tarjeta de Crédito del Chile y compra en 3 cuotas sin interés."} 
            />
        <CardBeneficios 
            img={"https://portales.bancochile.cl/uploads/000/034/177/4f9766ba-1c51-46d3-954b-e6c3456aa487/original/Banner.jpg"} 
            title={"Hasta 40% dcto en productos seleccionados en Casas Bosch "} 
            subtitle={"Del 7 al 12 de noviembre pagando con tus Tarjetas del Chile."} 
            />
        <CardBeneficios 
            img={"https://portales.bancochile.cl/uploads/000/040/688/f24c2946-cf29-4b66-ad0a-32ded9433678/original/Bannerbch2.jpg"} 
            title={"35% dcto. en kross.cl"} 
            subtitle={"Del 9 al 11 de noviembre pagando con tus Tarjetas del Chile."} 
            />
        <CardBeneficios 
            img={"https://portales.bancochile.cl/uploads/000/040/616/e2360ffd-1ed4-4745-8e59-9738236375d8/original/img-concursoAppAeguros-nov2022.png"} 
            title={"Tu App Mi Seguro Te Premia"} 
            subtitle={"Por contratar tu protección en App Mi Seguro participas por una Nintendo Switch OLED."} 
            />
            </div>
            
            <br /><br />
        <div className="button-cta">
          <button>
            IR A TODOS LOS BENEFICIOS
          </button>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
