import css from "../../../styles/leave-com.module.css"

const LeaveCom = () => {
    return (
        <div className={css.card}>
            <div className={css.img}>
                <img src="https://thumb.tildacdn.com/tild3031-3233-4136-b666-386366306537/-/resize/215x/-/format/webp/hero.png" alt="" />
            </div>
            <div className={css.title}>
                <span className={css.line}>
                    <p><b>Нам очень важно знать ваше мнение,</b>чтобы мы могли становиться лучше.
                    Здесь вы можете оставить свой отзыв, пожелание, благодарность врачу.</p>
                </span>
                <div className={css.button}>
                    <button>Оставить отзыв</button>
                </div>
            </div>
        </div>
    );
}

export default LeaveCom;
