
export default function PriceCard({priceHead, priceReason}) {
    return (
    <>
      <div className="priceCard">
        <div className="priceHead">
          <span>{priceHead}</span>
          <div>Цена Руб.</div>
        </div>
        <div className="priceReason_wrapper">
          {priceReason.map((item) => (
            <div className="priceReason">{item}</div>
          ))}
        </div>
        <button className="btn slick-btn btn-red">Показать МРТ врачу</button>
      </div>
    </>
  );
}
