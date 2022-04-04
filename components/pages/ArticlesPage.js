import Link from "next/link"
import Slider from "react-slick/lib/slider"
import css from "../../styles/articlePage.module.css"
import { SampleNextArrow, SamplePrevArrow } from "../../components/constants/sample-arrows";
import articlesKTE from "../constants/articles-kte";
import publicationsList from "../constants/publicationsList";
import articleSMI from "../constants/article-smi";
import Callme from "../common/Block_CallMe/callMe";
import { useRouter } from "next/router";
import { buttonsList } from "../constants/buttonsList";
import { allArticles } from "../constants/allArticles";
import { useEffect } from "react";

export default function ArticlesPage() {
    const router = useRouter()
    const settings = {
        dots: false,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />

    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: false,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    };
    useEffect(() => {
        buttonsList.some((el) => { return el.name === router.query?.key }) || router.push("/articles")
    }, [router.query?.key]);
    return (
        <div className="article-page-wrapper">
            <div className="joints_title">
                <h1 className="container">Статьи</h1>
            </div>
            <div className={css.main + " container"}> <Link href="/"><span>Главная </span></Link> / Статьи</div>
            <div className="container">
                <div className={css.text}>Рассказываем, как вылечить межпозвонковую грыжу без операции, избавиться от болей в спине и коленях, какие упражнения делать для укрепления организма. Отвечаем на вопросы клиентов, разбираемся, когда помогут массаж, а когда — лечебные упражнения. Эксперты помогают разобраться в заболеваниях позвоночника и дают советы, как не допустить болезни и что делать, если заболели.</div>
                <div className={css.title}>Статьи от экспертов КТЕ</div>
                <Slider {...settings}>
                    {
                        articlesKTE.map((e) =>
                            <div className={css.slider_wrapper} key={e.id}>
                                <img src={e.img} />
                                <div>
                                    <div>{e.title}</div>
                                    <div>{e.des}</div>
                                    <div style={{ width: "fit-content" }}>
                                        <button className="big-btn btn btn-white">Подробнее</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
                <div className={css.title}>Все статьи по категориям</div>
                <div className={css.buttons}>
                    <Link href={"/articles"}><button className={"btn " + (router.query.key === undefined ? "btn-blue" : "btn-white")}>Все</button></Link>
                    {
                        buttonsList.map((e) =>
                            <Link key={e.id} href={"/articles?key=" + e.name}><button className={"btn " + (router.query.key == e.name ? "btn-blue" : "btn-white")}>{e.name}</button></Link>
                        )
                    }

                </div>
                <div className={css.allArticles}>
                    {
                        (router.query?.key ? allArticles.filter((item) => item.metas.includes(router.query?.key)) : allArticles).map((el) =>
                            <div className={css.allArticles_card} key={el.id}>
                                <img src={el.img} />
                                <div>
                                    <div>
                                        {
                                            el.metas.map((element, index) =>
                                                <div key={index}>
                                                    {element}
                                                </div>)
                                        }
                                    </div>
                                    <div>{el.title}</div>
                                    <div>{el.des}</div>
                                    <div>{el.date}</div>
                                </div>
                            </div>

                        )
                    }
                    <div><button className="big-btn btn-blue btn">Загрузить еще</button></div>
                </div>
                <div className={css.title}>Научные публикации</div>
                <div className={css.publication_wrapper + " article-last-slider"}>
                    <Slider {...settings2}>
                        {
                            publicationsList.map((e) =>
                                <div className={css.publicationCard} key={e.id}>
                                    <img src={e.img} />
                                    <div>{e.des}</div>
                                </div>
                            )
                        }
                    </Slider>
                </div>
                <div className={css.title}>Наши статьи в СМИ</div>
                <div className={css.smi_wrapper}>
                    {
                        articleSMI.map((e, index) =>
                            <img key={index} src={e} />
                        )
                    }
                </div>
            </div>
            <Callme />
        </div>
    )
}
