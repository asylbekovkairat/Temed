import React from "react";
import Callme from "../common/Block_CallMe/callMe";
import css from "./../../styles/kurs_fizicheskoy_terapii.module.css";

export default function Kurs_fizicheskoy_terapii() {
  return (
    <div>
      <div className={css.block1_wrapper}>
        <div>
          <div className="container">
            <div className={css.mainTitle}>
              Главная / курс физической терапии
            </div>
            <div className={css.block1}>
              <p id={css.title}>КУРС ФИЗИЧЕСКОЙ ТЕРАПИИ</p>

              <p id={css.des}>
                Индивидуальная программа восстановительных и укрепляющих
                упражнений для мягкого и постепенного возвращения организму
                мобильности с учетом вашего МРТ, а также истории заболевания и
                пройденного лечения.
                <br />
                <br />
                Зачастую когда грыжа уходит, боль и сопутствовавшие ей симптомы
                остаются. Это связано с тем, что влияние грыжи распространялось
                на многие регионы тела, впоследствии некоторые мышцы ослабли,
                другие пребывают в излишнем напряжении. Поэтому для полноценного
                завершения курса обязательны физические упражнения.
              </p>
              <button>Записаться на курс</button>
            </div>
          </div>
        </div>
      </div>
      <div className={css.kurs_fizicheskoy_terapii + " container"}>
        <div className={css.block2}>
          <p>Задачи курса</p>

          <div className={css.block2_2}>
            <div className={css.block2_card}>
              <p className={css.title2}>Снизить риск рецидива грыжи диска</p>

              <p className={css.des2}>
                После курса лечения многие пациенты возвращаются к привычному
                образу жизни – тому, который изначально привел их к грыже диска,
                и риск возобновления заболевания в таком случае велик. Важно
                научиться жить по-новому, регулярно выполняя гимнастику,
                разработанную с учетом индивидуальных особенностей организма и
                анамнеза.
              </p>
            </div>

            <div className={css.block2_card}>
              <p className={css.title2}>
                Снять остаточные симптомы, в том числе:
              </p>
              <p className={css.des2}>
                {" "}
                • Тянущие ощущения
                <br />
                • Слабость или онемение в конечностях
                <br />
                • Периодические &apos;прострелы&apos;
                <br />
                • Утренняя общая скованность
                <br />
                • Дискомфорт и усталость в пояснице
                <br />• Страх движения
              </p>
            </div>

            <div className={css.block2_card}>
              <p className={css.title2}>
                Научить грамотной технике и помочь избежать ошибок
              </p>

              <p className={css.des2}>
                После курса вы точно будете знать, какие упражнения подходят
                именно вам и как технически правильно их выполнять. На курсе
                физической терапии за вами закрепляется инструктор, который
                проконтролирует правильность выполнения упражнений и в случае
                необходимости поправит технику. А также мы надеемся, что с вами
                останется привычка ежедневно делать гимнастику.
              </p>
            </div>
          </div>
        </div>

        <div className={css.block3}>
          <p>Что входит в курс</p>

          <div>
            <div className={css.block3_1}>
              <div className={css.block3_card1}>
                <div className={css.point}></div>

                <p>Первичный прием физического терапевта длительностью 1,5ч</p>
              </div>

              <div className={css.block3_card2}>
                <div className={css.point}></div>

                <p>Подбор индивидуальных упражнений и разбор техники</p>
              </div>

              <div className={css.block3_card3}>
                <div className={css.point}></div>

                <p>
                  12 дополнительных тренировок на координацию, расслабление и
                  восстановление мышц
                </p>
              </div>
            </div>

            <div className={css.block3_2}>
              <div className={css.block3_card4}>
                <div className={css.point}></div>

                <p>12 тренировок с целевыми упражнениями на укрепление мышц</p>
              </div>
              <div className={css.block3_card5}>
                <div className={css.point}></div>

                <p>
                  Не менее 2х онлайн-тренировок для контроля и закрепления
                  результата
                </p>
              </div>
            </div>

            <div className={css.block3_3}>
              <div className={css.block3_card6}>
                <div className={css.point}></div>

                <p>
                  Доступ в персональный онлайн-чат, где вы будете получать
                  упражнения и рекомендации инструктора на 30 дней
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={css.block4}>
          <p id={css.title4}>Стоимость курса физической терапии</p>
          <p id={css.des4_1}>9500 руб. за 30 дней</p>
          <p id={css.des4_2}>
            24 тренировки, персональное наблюдение мультидисциплинарной
            командой.
          </p>
          <div className={css.btn_wrapper}>
            <button>Записаться на курс</button>
          </div>
          <p id={css.des4_3}>
            ООО &apos;Скади&apos;
            <br />
            ИНН/КПП 7702386541/770201001
          </p>
        </div>
      </div>
      <Callme />
    </div>
  );
}
