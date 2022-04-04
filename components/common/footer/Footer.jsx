import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (


        <footer>

            <div className='footer_global'>

                <div className='footer_1block'>

                    <Link href="/">
                        <img id='footer_img_Logo' src="https://thumb.tildacdn.com/tild3130-3333-4438-b365-326662336362/-/resize/378x/-/format/webp/CTE_Main_logo3.png" alt="" />
                    </Link >
                    <br />

                    <Link href="/1">
                        <img id='footer_img_1' src="https://static.tildacdn.com/tild6465-3561-4634-a666-353937666461/screens1.png" alt="" />
                    </Link>


                    <Link href="/2">
                        <p id='footer_number'>
                            8 (958) 760-01-02
                        </p>
                    </Link>



                    <span className='socialMedia'>
                        <Link href="/3">
                            <img src="https://static.tildacdn.com/tild3061-6633-4935-a236-346431313765/001-vk.svg" alt="" />
                        </Link>

                        <Link href="/4">
                            <img id='socialMedi_img_2' src="https://static.tildacdn.com/tild3735-3032-4431-b237-336236326262/004-youtube.svg" alt="" />
                        </Link>
                    </span>



                    <Link href="/5">
                        <p id='map'>
                            Карта сайта
                        </p>
                    </Link>


                    <p id="copy">© 2022 Клиника Ткачева Епифанова</p>

                </div>

                <div className='footer_2block'>
                    <h3>Услуги:</h3>

                    <Link href="/spine">
                        <p>
                            Лечение грыжи позвоночника
                        </p>
                    </Link>

                    <Link href="/joints">
                        <p>
                            Лечение суставов
                        </p>
                    </Link>


                    <Link href="/kurs_fizicheskoy_terapii">
                        <p>
                            Курс физической терапии
                        </p>
                    </Link>


                    <Link href="/osteokhondroz">
                        <p>
                            Остеохондроз 2.0
                        </p>
                    </Link>


                    <Link href="/neurologist">
                        <p>
                            Запись на прием к неврологу
                        </p>
                    </Link>


                    <Link href="/traumatologist">
                        <p>
                            Запись на прием к ортопеду-травматологу
                        </p>
                    </Link>


                    <Link href="/masseur">
                        <p>
                            Запись на массаж
                        </p>
                    </Link>


                    <Link href="/recovery">
                        <p>
                            Другие услуги
                        </p>
                    </Link>

                </div>

                <div className='footer_3block'>
                    <h3>
                        Для пациентов:
                    </h3>
                    <Link href="/our_resorption">
                        <p>
                            Клинические случаи
                        </p>
                    </Link>
                    <Link href="/doctors">
                        <p>
                            Наши специалисты
                        </p>
                    </Link>
                    <Link href="/articles">
                        <p>
                            Статьи
                        </p>
                    </Link>
                    <Link href="/science">
                        <p>
                            Наука
                        </p>
                    </Link>
                    <Link href="/comment">
                        <p>
                            Отзывы
                        </p>
                    </Link>
                    <Link href="/faq">
                        <p>
                            Вопросы
                        </p>
                    </Link>
                    <Link href="/prices">
                        <p>
                            Стоимость
                        </p>
                    </Link>
                    <Link href="/contacts">
                        <p>
                            Контакты
                        </p>
                    </Link>

                </div>

                <div className='footer_4block'>
                    <h3>
                        Адреса наших клиник:
                    </h3>

                    <Link href="/msk-fonvizinskaya" >
                        <p>
                            Москва, м. Фонвизинская
                        </p>
                    </Link>
                    <Link href="/msk-technopark" >
                        <p>
                            Москва, м. Технопарк
                        </p>
                    </Link>
                    <Link href="/spb" >
                        <p>
                            Санкт-Петербург, м. Пионерская
                        </p>
                    </Link>
                    <Link href="/krasnodar" >
                        <p>
                            Краснодар, ул. Северная
                        </p>
                    </Link>
                    <Link href="/kazan" >
                        <p>
                            Казань, ул. Право-Булачная
                        </p>
                    </Link>
                </div>

            </div>

            <div className='footer_global_2'>
                    Материалы, размещенные на данной странице, носят информационный характер и
                    предназначены для образовательных целей. Посетители сайта не должны использовать
                    их в качестве медицинских рекомендаций. Определение диагноза и выбор методики
                    лечения остается исключительной прерогативой вашего лечащего врача. Медицинские
                    организации действующие под единым брендом «Клиника Ткачева Епифанова» не несут
                    ответственности за возможные негативные последствия, возникшие в результате
                    использования информации, размещенной на сайте temed.ru
                
            </div>

        </footer>

    )
}
