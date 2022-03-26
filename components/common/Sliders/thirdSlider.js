import Link from "next/dist/client/link"

export default function ThirdSlider() {
  return (
      <div className=" thirdSlider">
          <div className='round-pink-border-wrapper-another'>
              <div className='round-border-under-wrapper'>
                  <div style={{ borderColor: "#ff685a" }} className='round-border'>

                  </div>
              </div>
          </div>
          <div className='round-blue-border-wrapper-another'>
              <div className='round-border-under-wrapper'>
                  <div style={{ borderColor: "#0e7496" }} className='round-border'>

                  </div>
              </div>
          </div>
          
          <div className='secondSliderWrapper'>
              <div className='secondSliderText'>
                  Пациенты сами рассказывают
                  о своём лечении
              </div>
              <Link href="/">
                  <button className='slick-btn'>
                      Посмотреть вебинар
                  </button>
              </Link>
          </div>
          <div className="imgWrapper">
              <img src='https://static.tildacdn.com/tild6563-3537-4334-b265-623866653661/video-banner-bg_copy.png' />

          </div>


      </div>
    
  )
}
