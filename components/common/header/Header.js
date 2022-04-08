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
            <div style={{ backgroundColor: "#f5f7fa" }}>
                <div className='header-upper-block container'>
                    <div className='header-upper-right'>
                        <div>Пн-Вс: 8:00-20:00</div>
                        <a href='tel: +79584055327'> <img src='https://static.tildacdn.com/tild6533-3431-4166-b465-336335663033/telephone2.svg' /> 8 (958) 405-53-27</a>
                    </div>
                </div>
            </div>
            <div className="header-lower-block-wrapper">
                <div className='header-lower-block container'>
                    <div className='header-lower-left'>
                        <Link href="/"><img src='https://static.tildacdn.com/tild6136-3038-4233-b233-666434353033/CTE_Symbol.svg' /></Link>
                    </div>
                    <div className='header-lower-right'>
                        <div className='header-lower-services'><p>Услуги</p>
                            <div className='header-services-wrapper'>
                                <div className="rotated-block lower-rotated"></div>
                                <div className='header-services'>
                                    <Link href="spine">
                                        <div>Лечения позвоночника</div>
                                    </Link>
                                    <Link href="joints  ">
                                        <div>Лечения суставов</div>
                                    </Link>
                                    <Link href="kurs_fizicheskoy_terapii">
                                        <div>Курс физической теропии</div>
                                    </Link>
                                    <Link href="/masseur"><div>Запись на массаж</div></Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/result">
                            <div><p>Результаты</p></div>
                        </Link>
                        <Link href="/doctors">
                            <div><p>Специалисты</p></div>
                        </Link>
                        <Link href="price">
                            <div><p>Цены</p></div>
                        </Link>
                        <div><p>Контакты</p></div>
                        <div className='header-lower-services'><p>Еще...</p>
                            <div className='header-services-wrapper'>
                                <div className="rotated-block lower-rotated"></div>
                                <div className='header-services header-more'>
                                    <Link href="/articles"><div>Статьи</div></Link>
                                    <div>О методике</div>
                                    <div>Отзывы</div>
                                    <Link href="/faq"><div>Вопросы</div></Link>
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
                    <Link href="/">
                        <div>ГЛАВНАЯ</div>
                    </Link>
                    <div className='header-upper-choose-clinic header-burger-clinic'><p>УСЛУГИ</p>
                        <div className='header-clinics-wrapper'>
                            <div className="rotated-block burger-rotated"></div>
                            <div className='header-clinics'>
                                <Link href="/spine">
                                    <div>Лечения позвоночника</div>
                                </Link>
                                <Link href="joints">
                                    <div>Лечения суставов</div>
                                </Link>
                                <Link href="kurs_fizicheskoy_terapii"><div>Курс физической теропии</div></Link>
                                <Link href="/masseur"><div>Запись на массаж</div></Link>
                            </div>
                        </div>
                    </div>
                    <Link href="result">
                        <div>РЕЗУЛЬТАТЫ</div>
                    </Link>
                    <Link href="/doctors"><div>СПЕЦИАЛИСТЫ</div></Link>
                    <Link href="/price">
                        <div>ЦЕНЫ</div>
                    </Link>
                    <div>КОНТАКТЫ</div>
                    <div className='header-upper-choose-clinic header-burger-clinic'><p>ЕЩЕ...</p>
                        <div className='header-clinics-wrapper'>
                            <div className="rotated-block burger-rotated"></div>
                            <div className='header-clinics'>
                                <Link href="/articles"><div>Статьи</div></Link>
                                <div>О методике</div>
                                <div>Отзывы</div>
                                <Link href="/faq"><div>Вопросы</div></Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: "absolute", bottom: "10px" }}>
                        <a href='tel: +79584055327'>8 (958) 405-53-27</a>
                        <div>Пн-Вс: 8:00-20:00</div>
                        <div className="header-burger-modal-svg">
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
            <a href="https://api.whatsapp.com/send?phone=79310093200&text=" target="_blank" rel="noopener noreferrer"><img className="whatsapp" width="48px" height="48px" src="data:image/svg+xml,%3c%3fxml version='1.0' %3f%3e%3csvg id='Layer_1' style='enable-background:new 0 0 1000 1000%3b' version='1.1' viewBox='0 0 1000 1000' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cstyle type='text/css'%3e .st0%7bfill:%2325D366%3b%7d .st1%7bfill-rule:evenodd%3bclip-rule:evenodd%3bfill:white%3b%7d %3c/style%3e%3ctitle/%3e%3cg%3e%3cpath class='st0' d='M500%2c1000L500%2c1000C223.9%2c1000%2c0%2c776.1%2c0%2c500v0C0%2c223.9%2c223.9%2c0%2c500%2c0h0c276.1%2c0%2c500%2c223.9%2c500%2c500v0 C1000%2c776.1%2c776.1%2c1000%2c500%2c1000z'/%3e%3cg%3e%3cg id='WA_Logo'%3e%3cg%3e%3cpath class='st1' d='M733.9%2c267.2c-62-62.1-144.6-96.3-232.5-96.4c-181.1%2c0-328.6%2c147.4-328.6%2c328.6 c0%2c57.9%2c15.1%2c114.5%2c43.9%2c164.3L170.1%2c834l174.2-45.7c48%2c26.2%2c102%2c40%2c157%2c40h0.1c0%2c0%2c0%2c0%2c0%2c0c181.1%2c0%2c328.5-147.4%2c328.6-328.6 C830.1%2c411.9%2c796%2c329.3%2c733.9%2c267.2z M501.5%2c772.8h-0.1c-49%2c0-97.1-13.2-139-38.1l-10-5.9L249%2c755.9l27.6-100.8l-6.5-10.3 c-27.3-43.5-41.8-93.7-41.8-145.4c0.1-150.6%2c122.6-273.1%2c273.3-273.1c73%2c0%2c141.5%2c28.5%2c193.1%2c80.1c51.6%2c51.6%2c80%2c120.3%2c79.9%2c193.2 C774.6%2c650.3%2c652%2c772.8%2c501.5%2c772.8z M651.3%2c568.2c-8.2-4.1-48.6-24-56.1-26.7c-7.5-2.7-13-4.1-18.5%2c4.1 c-5.5%2c8.2-21.2%2c26.7-26%2c32.2c-4.8%2c5.5-9.6%2c6.2-17.8%2c2.1c-8.2-4.1-34.7-12.8-66-40.8c-24.4-21.8-40.9-48.7-45.7-56.9 c-4.8-8.2-0.5-12.7%2c3.6-16.8c3.7-3.7%2c8.2-9.6%2c12.3-14.4c4.1-4.8%2c5.5-8.2%2c8.2-13.7c2.7-5.5%2c1.4-10.3-0.7-14.4 c-2.1-4.1-18.5-44.5-25.3-61c-6.7-16-13.4-13.8-18.5-14.1c-4.8-0.2-10.3-0.3-15.7-0.3c-5.5%2c0-14.4%2c2.1-21.9%2c10.3 c-7.5%2c8.2-28.7%2c28.1-28.7%2c68.5c0%2c40.4%2c29.4%2c79.5%2c33.5%2c84.9c4.1%2c5.5%2c57.9%2c88.4%2c140.3%2c124c19.6%2c8.5%2c34.9%2c13.5%2c46.8%2c17.3 c19.7%2c6.3%2c37.6%2c5.4%2c51.7%2c3.3c15.8-2.4%2c48.6-19.9%2c55.4-39c6.8-19.2%2c6.8-35.6%2c4.8-39C665%2c574.4%2c659.5%2c572.4%2c651.3%2c568.2z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e" /></a>
            <a href="https://t.me/temed_ru_bot" target="_blank" rel="noopener noreferrer"><img className="telegram" src="data:image/svg+xml,%3csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z' fill='url(%23paint0_linear)'/%3e %3cpath d='M8.93825 25.1739C11.7439 23.6286 14.8757 22.3387 17.8019 21.0423C22.8361 18.9189 27.8903 16.8323 32.9955 14.8897C33.9887 14.5587 35.7735 14.2351 35.9485 15.707C35.8526 17.7906 35.4584 19.862 35.188 21.9334C34.5018 26.4886 33.7085 31.0282 32.935 35.5684C32.6685 37.0808 30.774 37.8636 29.5618 36.8958C26.6486 34.9281 23.713 32.9794 20.837 30.966C19.8949 30.0088 20.7686 28.634 21.6099 27.9504C24.0093 25.5858 26.5539 23.5768 28.8279 21.09C29.4413 19.6088 27.6289 20.8571 27.0311 21.2397C23.7463 23.5033 20.5419 25.9051 17.0787 27.8945C15.3097 28.8682 13.2479 28.0361 11.4797 27.4927C9.89431 26.8363 7.57109 26.175 8.93809 25.1741L8.93825 25.1739Z' fill='white'/%3e %3cdefs%3e %3clinearGradient id='paint0_linear' x1='32.002' y1='8.0016' x2='20.002' y2='36' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%2337AEE2'/%3e %3cstop offset='1' stop-color='%231E96C8'/%3e %3c/linearGradient%3e %3c/defs%3e %3c/svg%3e" /></a>

        </div>
    )
}
