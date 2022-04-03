import Link from "next/link"
import { useState, useEffect } from "react"


export default function Header() {
    const [activeBurger, setActiveBurger] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    const [search, setSearch] = useState("")
    useEffect(() => {
        if (activeBurger) {
            document.body.style.overflowY = "hidden"
        }
        else {
            document.body.style.overflowY = "visible"
        }
    }, [activeBurger]);
    return (
        <div>
            <div style={{ backgroundColor: "#f5f7fa"}}>
            <div className='header-upper-block container'>
                <div className='header-upper-left'>
                    <img src='https://static.tildacdn.com/tild3464-6164-4637-b630-316165653264/maps-and-flags1.svg' />
                    <div className='header-upper-choose-clinic'><p>Выбрать клинику</p>
                        <div className='header-clinics-wrapper'>
                            <div className="rotated-block"></div>
                            <div className='header-clinics'>
                                <div>Москва, м.Фовизинская</div>
                                <div>Москва, м.Технопарк</div>
                                <div>Санкт-Петербург, м. Пионерская </div>
                                <div>Краснодар, ул. Северная</div>
                                <div>Казань, ул. Право-Булачная</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-upper-right'>
                    <button className='btn btn-white header-btn'>Отправить МРТ</button>
                    <button className='btn btn-blue header-btn'>Школа пациентов <img src='https://static.tildacdn.com/tild3931-6638-4432-b561-383564633534/question.svg' /></button>
                    <div>Пн-Вс: 8:00-20:00</div>
                    <a href='tel: +79584055327'> <img src='https://static.tildacdn.com/tild6533-3431-4166-b465-336335663033/telephone2.svg' /> 8 (958) 405-53-27</a>
                </div>
            </div>
            </div>
            <div className="header-blue-adap-block">Лечим грыжу и другие причины боли в спине</div>
            <div className='header-lower-block container'>
                <div className='header-lower-left'>
                    <Link href="/"><img src='https://static.tildacdn.com/tild6136-3038-4233-b233-666434353033/CTE_Symbol.svg' /></Link>
                </div>
                <div className='header-lower-right'>
                    <div className='header-lower-services'><p>Услуги</p>
                        <div className='header-services-wrapper'>
                            <div className="rotated-block lower-rotated"></div>
                            <div className='header-services'>
                                <div>Лечения позвоночника</div>
                                <Link href="joints  ">
                                    <div>Лечения суставов</div>
                                </Link>
                                <div>Курс физической теропии</div>
                            </div>
                        </div>
                    </div>
                    <Link href="/result">
                        <div><p>Результаты</p></div>
                    </Link>
                    <div><p>Специалисты</p></div>
                    <div><p>Цены</p></div>
                    <div><p>Цены</p></div>
                    <div className='header-lower-services'><p>Еще...</p>
                        <div className='header-services-wrapper'>
                            <div className="rotated-block lower-rotated"></div>
                            <div className='header-services header-more'>
                                <div>Запись на прием к неврологу</div>
                                <div>Запись на прием к ортопеду-травматологу</div>
                                <Link href="/masseur"><div>Запись на массаж</div></Link>
                                <div>Другие услугии</div>
                                <div>Статьи</div>
                                <div>О методике</div>
                                <div>Отзывы</div>
                                <div>Вопросы</div>
                                <div>Краудфандинг</div>
                            </div>
                        </div>
                    </div>

                    <img onClick={() => { setActiveSearch(true) }} className="header-search-btn" width="18px" src='https://static.tildacdn.com/tild6664-6139-4133-b933-323364376664/loupe1.svg' />
                </div>
                <div className="header-lower-right-adap">
                    <img onClick={() => { setActiveBurger(true) }} width="32px" src='https://static.tildacdn.com/tild6664-6139-4133-b933-323364376664/loupe1.svg' />
                    <img width="32px" src='https://static.tildacdn.com/tild6533-3431-4166-b465-336335663033/telephone2.svg' />
                    <img width="32px" src="https://static.tildacdn.com/tild3465-6139-4532-a265-666162346131/icon-address.png" />
                    <div className="header-burger-wrapper" onClick={() => { setActiveBurger(!activeBurger) }}>
                        <svg
                            className={"ham hamRotate ham4 " + (activeBurger ? " active" : "")}
                            viewBox="0 0 100 100"
                            width="50"
                        >
                            <path
                                className="line top"
                                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                            ></path>
                            <path className="line middle" d="m 70,50 h -40"></path>
                            <path
                                className="line bottom"
                                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div onClick={() => { setActiveSearch(false) }} className={"header-search-block-wrapper " + (activeSearch ? "active" : "")}>
                <div onClick={(e) => { e.stopPropagation() }} className="header-search-block">
                    <div className="header-search-input">
                        <svg style={{ cursor: "pointer" }} className="t985__search-icon t-search-widget__search-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle r="7.93388" transform="matrix(0.715639 0.698471 -0.715639 0.698471 18.5859 11.7816)" strokeWidth="1.0" stroke="#b6b6b6"></circle> <line y1="-0.5" x2="9.17531" y2="-0.5" transform="matrix(-0.715635 0.698474 -0.715635 -0.698474 12.75 16.9609)" strokeWidth="1.0" stroke="#b6b6b6"></line> </svg>
                        <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Введите слово для поиска" />
                        <svg style={search ? { display: "block" } : { display: "none" }} className="header-search-clear-btn" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.00004 10.9659L10.9999 0.999962" stroke="#565656"></path> <path d="M10.9883 10.9986L1.00214 1.02924" stroke="#565656"></path> </svg>
                    </div>
                    <svg style={{ cursor: "pointer" }} onClick={() => { setActiveSearch(false) }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.754014 27.4806L27.0009 1.32294" stroke="black"></path> <path d="M26.9688 27.5665L0.757956 1.39984" stroke="black"></path> </svg>
                </div>
            </div>
            <div onClick={() => { setActiveBurger(false) }} className={"header-burger-modal-wrapper " + (activeBurger ? "active" : "")}>
                <div className="header-burger-modal" onClick={(e) => { e.stopPropagation() }}>
                    <div>    <svg onClick={() => { setActiveBurger(false) }} style={{ cursor: "pointer" }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.754014 27.4806L27.0009 1.32294" stroke="black"></path> <path d="M26.9688 27.5665L0.757956 1.39984" stroke="black"></path> </svg></div>
                    <div>ГЛАВНАЯ</div>
                    <div className='header-upper-choose-clinic header-burger-clinic'><p>ВЫБРАТЬ КЛИНИКУ</p>
                        <div className='header-clinics-wrapper'>
                            <div className="rotated-block burger-rotated"></div>
                            <div className='header-clinics'>
                                <div>Москва, м.Фовизинская</div>
                                <div>Москва, м.Технопарк</div>
                                <div>Санкт-Петербург, м. Пионерская </div>
                                <div>Краснодар, ул. Северная</div>
                                <div>Казань, ул. Право-Булачная</div>
                            </div>
                        </div>
                    </div>
                    <div>ОТПРАВИТЬ МРТ</div>
                    <div>ШКОЛА ПАЦИЕНТОВ</div>
                    <div className='header-upper-choose-clinic header-burger-clinic'><p>УСЛУГИ</p>
                        <div className='header-clinics-wrapper'>
                            <div className="rotated-block burger-rotated"></div>
                            <div className='header-clinics'>
                                <div>Лечения позвоночника</div>
                                <Link href="joints">
                                    <div>Лечения суставов</div>
                                </Link>
                                <div>Курс физической теропии</div>
                            </div>
                        </div>
                    </div>
                    <Link href="result">
                        <div>РЕЗУЛЬТАТЫ</div>
                    </Link>
                    <div>СПЕЦИАЛИСТЫ</div>
                    <div>ЦЕНЫ</div>
                    <div>КОНТАКТЫ</div>
                    <div className='header-upper-choose-clinic header-burger-clinic'><p>ЕЩЕ...</p>
                        <div className='header-clinics-wrapper'>
                            <div className="rotated-block burger-rotated"></div>
                            <div className='header-clinics'>
                                <div>Запись на прием к неврологу</div>
                                <div>Запись на прием к ортопеду-травматологу</div>
                                <Link href="/masseur"><div>Запись на массаж</div></Link>
                                <div>Другие услугии</div>
                                <div>Статьи</div>
                                <div>О методике</div>
                                <div>Отзывы</div>
                                <div>Вопросы</div>
                                <div>Краудфандинг</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: "absolute", bottom: "10px" }}>
                        <a href='tel: +79584055327'>8 (958) 405-53-27</a>
                        <div>Пн-Вс: 8:00-20:00</div>
                        <div className="header-burger-modal-svg">
                            <svg style={{ fill: "#0e7496" }} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve"> <path d="M47.761,24c0,13.121-10.638,23.76-23.758,23.76C10.877,47.76,0.239,37.121,0.239,24c0-13.124,10.638-23.76,23.764-23.76
                           C37.123,0.24,47.761,10.876,47.761,24 M20.033,38.85H26.2V24.01h4.163l0.539-5.242H26.2v-3.083c0-1.156,0.769-1.427,1.308-1.427
                           h3.318V9.168L26.258,9.15c-5.072,0-6.225,3.796-6.225,6.224v3.394H17.1v5.242h2.933V38.85z"></path> </svg>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 99 99" enableBackground="new 0 0 99 99" xmlSpace="preserve"> <path style={{ fill: "#0e7496" }} fillRule="evenodd" clipRule="evenodd" d="M49 98C76.062 98 98 76.062 98 49C98 21.938 76.062 0 49 0C21.938 0 0 21.938 0 49C0 76.062 21.938 98 49 98ZM22 34C22.4442 55.3198 33.1042 68.1323 51.7933 68.1323H52.8527V55.9351C59.7202 56.6182 64.9132 61.6409 66.9973 68.1323H76.7008C74.0359 58.4292 67.0314 53.0649 62.658 51.0149C67.0314 48.4866 73.1814 42.3367 74.6505 34H65.8353C63.922 40.7649 58.251 46.915 52.8527 47.4958V34H44.0374V57.6433C38.5707 56.2766 31.6692 49.6482 31.3617 34H22Z"></path> </svg>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="-455 257 48 48" enableBackground="new -455 257 48 48" xmlSpace="preserve"> <path style={{ fill: "#0e7496" }} d="M-431,257.013c13.248,0,23.987,10.74,23.987,23.987s-10.74,23.987-23.987,23.987s-23.987-10.74-23.987-23.987
                           S-444.248,257.013-431,257.013z M-419.185,275.093c-0.25-1.337-1.363-2.335-2.642-2.458c-3.054-0.196-6.119-0.355-9.178-0.357
                           c-3.059-0.002-6.113,0.154-9.167,0.347c-1.284,0.124-2.397,1.117-2.646,2.459c-0.284,1.933-0.426,3.885-0.426,5.836
                           s0.142,3.903,0.426,5.836c0.249,1.342,1.362,2.454,2.646,2.577c3.055,0.193,6.107,0.39,9.167,0.39c3.058,0,6.126-0.172,9.178-0.37
                           c1.279-0.124,2.392-1.269,2.642-2.606c0.286-1.93,0.429-3.879,0.429-5.828C-418.756,278.971-418.899,277.023-419.185,275.093z
                           M-433.776,284.435v-7.115l6.627,3.558L-433.776,284.435z"></path> </svg>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 30 30" xmlSpace="preserve"> <path style={{ fill: "#0e7496" }} d="M15,11.014 C12.801,11.014 11.015,12.797 11.015,15 C11.015,17.202 12.802,18.987 15,18.987 C17.199,18.987 18.987,17.202 18.987,15 C18.987,12.797 17.199,11.014 15,11.014 L15,11.014 Z M15,17.606 C13.556,17.606 12.393,16.439 12.393,15 C12.393,13.561 13.556,12.394 15,12.394 C16.429,12.394 17.607,13.561 17.607,15 C17.607,16.439 16.444,17.606 15,17.606 L15,17.606 Z">
                            </path> <path style={{ fill: "#0e7496" }} d="M19.385,9.556 C18.872,9.556 18.465,9.964 18.465,10.477 C18.465,10.989 18.872,11.396 19.385,11.396 C19.898,11.396 20.306,10.989 20.306,10.477 C20.306,9.964 19.897,9.556 19.385,9.556 L19.385,9.556 Z">
                                </path> <path style={{ fill: "#0e7496" }} d="M15.002,0.15 C6.798,0.15 0.149,6.797 0.149,15 C0.149,23.201 6.798,29.85 15.002,29.85 C23.201,29.85 29.852,23.202 29.852,15 C29.852,6.797 23.201,0.15 15.002,0.15 L15.002,0.15 Z M22.666,18.265 C22.666,20.688 20.687,22.666 18.25,22.666 L11.75,22.666 C9.312,22.666 7.333,20.687 7.333,18.28 L7.333,11.734 C7.333,9.312 9.311,7.334 11.75,7.334 L18.25,7.334 C20.688,7.334 22.666,9.312 22.666,11.734 L22.666,18.265 L22.666,18.265 Z">
                                </path> </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
