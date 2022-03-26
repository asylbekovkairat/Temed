import Link from 'next/link'

export default function FirstSlider() {
    const cardList = [
        {
            img: "https://static.tildacdn.com/tild6562-3863-4463-b165-396165333238/001-doctor.svg",
            firstText: "Боли или прострелы",
            text: "в спине, онемение или покалывание в руке или ноге?",
            lastText: "Причиной может быть грыжа диска",
            color: "white"
        },
        {
            img: "https://static.tildacdn.com/tild6135-3734-4430-b433-343339353563/002-rank.svg",
            firstText: "",
            text: "13 лет лечим боли в спине и грыжи дисков. 9 из 10 пациентов",
            lastText: "вылечились без операции",
            color: "#edf2fa"
        },
        {
            img: "https://static.tildacdn.com/tild3538-3061-4638-a139-386237333131/003-diagnostic.svg",
            firstText: "Подтверждаем ",
            text: "результаты лечения с помощью снимков",
            lastText: "МРТ до и после",
            color: "#e6edfa"
        },
        {
            img: "https://static.tildacdn.com/tild3966-3832-4634-a261-663764316238/004-x-ray.svg",
            firstText: "Знаем все о резорбции:",
            text: "проводим исследования, публикуем доклады, участвуем в конференциях",
            lastText: "",
            color: "#dae4f5"
        }
    ]
    return (
        <div className=" firstSlider">
            <div className='firstSliderWrapper'>
                <div className='firstSliderText'>
                    Уменьшаем <br />
                    межпозвонковую<br />
                    грыжу {" "}
                    <span>
                        без операции
                    </span>
                </div>
                <Link href="/">
                    <button className='slick-btn'>
                        Получить консультацию

                    </button>
                </Link>
                <div className='cards-wrapper'>
                    {
                        cardList.map((e) =>
                            <div style={{backgroundColor: e.color}} key={e.text} className="cardWrapper">
                                <img src={e.img} />
                                <div>
                                    <span>{e.firstText}</span>
                                    <div>{e.text}</div>
                                    <span>{e.lastText}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
