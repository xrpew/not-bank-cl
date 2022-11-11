import { WantTobeItem } from "../components"

export const WantTobeCl = () => {
  return (
   <div className="wantTobeCl">
    <h3>¿Quieres ser del Chile</h3>
    <h6>Conoce las diferentes alternativas que tenemos para ti</h6>
    <br /><br />

    <div className="brand-blue">
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/476/bfa46075-23ba-4b15-98ad-d1ba5e0a287e/original/cta-cte.png"} 
            title={"¿Necesitas una Cuenta Corriente Digital?"} 
            subtitle={"Sé parte del Banco de todos los chilenos, obtén tu cuenta corriente online en menos de 10 minutos. "
            }
        />
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/483/e0c59bd9-0e37-403b-b7e2-bf575719f081/original/sumate.png"} 
            title={"¡Súmate a la Cuenta FAN del Chile!"} 
            subtitle={"Una cuenta vista 100% digital, sin costos de apertura y mantención."}
        />
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/481/bd353909-6fcf-4ad2-9625-065467cf2524/original/prefiere.png"} 
            title={"¿Buscas otro producto con nosotros?"} 
            subtitle={"Nos comunicaremos contigo para evaluar tu Kit de Cuenta Corriente o el producto que necesites."}
        />
    </div>
   
   
   
   </div>
  )
}


