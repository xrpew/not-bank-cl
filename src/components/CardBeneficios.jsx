export const CardBeneficios = ({img, title, subtitle}) => {
  return (
    <div className="card-beneficios">
            <img src={img} alt="" />
            <h4> {title}</h4> <br />
            <span>{subtitle}</span> <br />
            <a href="#">CONOCE MÁS</a>
        </div>
  )
}
