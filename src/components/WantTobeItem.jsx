
export const WantTobeItem = ({img, title, subtitle}) => {
  return (

    <div className="brand-blue-item">
            <div className="brand-blue-item-img">
                <img src={img} alt="" />
            </div>
            <div className="brand-blue-item-text">
                <p>
                    {title}
                </p>
                <span>
                    {subtitle}
                </span> <br />
                <a href="#">Solicítala</a>
            </div>
        </div>

    )
}
