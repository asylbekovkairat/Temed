export default function OtherServiceCard({img, title, duration, desc}) {
    return (
      <div>
        <div className="treatmentMethCard">
          <img src={img} alt="t"/>
          <h4 className="treatment_title">{title}</h4>
          <div className="treatment_desc">
            <span className="treatment_duration">{duration}</span>
            <br/>
            <br/>
            <br/>
            <div>
              {desc}
            </div>
          </div>
        </div>
      </div>
    )
  }