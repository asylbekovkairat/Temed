import Link from "next/link"

export default function ThirdSlider() {
  return (
      <div className=" thirdSlider">
          <div className='round-pink-border-wrapper'>
              <div className='round-border-under-wrapper'>
                  <div style={{ borderColor: "#ff685a" }} className='round-border'>

                  </div>
              </div>
          </div>
          <div className='round-blue-border-wrapper'>
              <div className='round-border-under-wrapper'>
                  <div style={{ borderColor: "#0e7496" }} className='round-border'>

                  </div>
              </div>
          </div>
          <div className='round-mini-blue-border-wrapper'>
              <div className='round-border-under-wrapper'>
                  <div style={{ borderColor: "#0e7496" }} className='round-border-mini'>

                  </div>
              </div>
          </div>
          
          <div className='secondSliderWrapper'>
              <div className='secondSliderText'>
                  Пациенты сами рассказывают
                  о своём лечении
              </div>
              <Link href="/shkola-pacientov">
                  <button className='slick-btn'>
                     Посмотреть вебинар
                  </button>
              </Link>
          </div>
          <div className="third-slider-wrapper">
              <img src='https://static.tildacdn.com/tild6563-3537-4334-b265-623866653661/video-banner-bg_copy.png' />

          </div>


      </div>
    
  )
}
