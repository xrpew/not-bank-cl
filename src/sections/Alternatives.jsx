import { WantTobeItem } from "../components"

export const Alternatives = () => {
  return (
<div className="wantTobeCl">
    <h3>También contamos con estas alternativas:</h3>
    <br /><br />

    <div className="variant-of-blue brand-blue ">
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/480/3a123633-d509-4ecd-9da1-d010c375ff9f/original/portabilidad.png"} 
            title={"Portabilidad"} 
            subtitle={"Para una mayor comodidad, elige tener todos tus productos en un solo lugar."
            }
        />
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/477/627b03c6-b196-412b-9200-4f0fab5ffa23/original/financiamiento.png"} 
            title={"Financiamiento"} 
            subtitle={"Conoce las distintas opciones que tenemos para ti."}
        />
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/474/1f2ea62a-1f9b-4395-815b-7f9a124e11b9/original/acreditacion.png"} 
            title={"Acreditación de Renta"} 
            subtitle={"Acredita tus ingresos y recibe una oferta personalizada."}
        />
    </div>
    <h3>¿Ya eres Cliente y necesitas ayuda?</h3>
    <br /><br />
    <h6>Te ayudanos a encontrar lo que necesitas</h6>

    <div className="variant-of-blue brand-blue ">
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/473/9869d6d7-055a-4be1-b44e-dee395ed027d/original/centro-ayuda.png"} 
            title={"Centro de ayuda"} 
            subtitle={"¿Tienes algun problema? te apoyamos en la resolución de manera rápida y efectiva."
            }
        />
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/472/7c4edff9-156c-4728-9bea-dd6db253f1ef/original/agentar.png"} 
            title={"Agendar visita"} 
            subtitle={"Conoce el nuevo sistema para asistir a nuestras Sucursales, sin exponerte."}
        />
        <WantTobeItem 
            img={"https://portales.bancochile.cl/uploads/000/033/482/e9de6724-6a0e-4196-8133-83cb9ef0220a/original/seguridad.png"} 
            title={"Seguridad"} 
            subtitle={"Protege tus claves y productos financieros y reconoce los diferentes tipos de fraude."}
        />
    </div>
   
   
   </div>
  )
}
