import css from "../../../styles/doctorCard.module.css"

export default function DoctorCard({list}) {
    return (
        <div className="doctor_card_wrapper">
            {
                list.map((e)=>
                    <div key={e.id} className={css.wrapper}>
                        <img src={e.img} />
                        <div>
                            <div className={css.name}>{e.name}</div>
                            <div>
                                <div className={css.location}>{e.location}</div>
                                <div className={css.post}>{e.post}</div>
                                <div className={css.proffesion}>{e.proffesion}</div>
                            </div>
                            <button className="btn btn-blue">Записаться на прием</button>
                        </div>
                    </div>
                )
            }
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <button className="big-btn btn btn-white">Посмотреть всех специалистов</button>
          </div>
        </div>
    )
}
