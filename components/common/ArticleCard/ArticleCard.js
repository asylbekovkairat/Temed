import css from "../../../styles/articleCard.module.css"

export default function ArticleCard({list}) {
    return (
        <div className="article_card_wrapper">
            {
                list.map((e)=>
                    <div key={e.id} className={css.wrapper}>
                        <img src={e.img} />
                        <div>
                            <div className={css.date}>{e.date}</div>
                            <div>
                                <div className={css.title}>{e.title}</div>
                                <div className={css.des}>{e.des}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}
