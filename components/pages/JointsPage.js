import Mrt from "../common/mrt/mrt"
import RegToWeb from "../common/RegToWeb/RegToWeb"
import Callme from "../common/Block_CallMe/callMe"
import treatmentsList from "../constants/treatments"
import TreatmentMethodCard from "../common/treatmentMethodCard/TreatmentMethodCard"
import { painCardList } from './../constants/painCardList';
import PainCard from "./../common/painCard/painCard"
import { videosList } from "../constants/videosList";
import VideoCard from './../common/VideosCards/VideoCard';

export default function JointsPage() {
  return (
    <>
        <div className="joints_title">
          <h1 className="container">Лечение суставов</h1>
        </div>
        <Mrt />
        <div className="joint_treatment">
          <h2>Лечение суставов начинается с диагностики</h2>
        </div>
        <div className="container diagnostics_des">
          <div className="about_diagnostics">
            Во время первичного приема необходимо выявить непосредственный
            источник симптомов, так как это является критическим фактором для
            эффективного лечения.
            <br />
            <br />
            Для максимально точной диагностики врач проводит опрос и
            ортопедическое тестирование пациента. При необходимости во время
            приема выполняется ультразвуковое исследование сустава или
            назначаются дополнительные методы исследования (МРТ, КТ, рентген,
            анализы).
            <br />
            <br />
            На начальном этапе крайне важно доступным для пациента языком
            объяснить природу его заболевания и способы борьбы с ним.
            <br />
            <br />
            Лечение суставов начинается уже на первичном приеме, т.к. прием
            врача сам по себе является лечебной процедурой, которая в
            зависимости от клинической ситуации может включать: мануальные
            техники, метод сухой иглы (dry needling), рекомендации по
            самостоятельной работе с болью, подбор терапевтических упражнений и
            медикаментов.
            <br />
            <br />
            При планировании курсового лечения суставов без операции все
            необходимые процедуры подбираются индивидуально, с учетом
            особенностей заболевания и, что немаловажно, предпочтений пациента.
            <br />
            <br />
            Во время лечения набор входящих в него элементов может меняться в
            зависимости от динамики и по согласованию с пациентом.
            <br />
            <br />
            По окончании курса врач дает рекомендации по профилактике и/или
            направляет на реабилитацию.
          </div>
        </div>
        <div className="container btn_traumatologist">
          <button className="btn btn-blue">Записаться к травматологу</button>
        </div>
        <div className="joint_treatment">
          <h2>Какие синдромы мы лечим</h2>
        </div>
        <div className="container painCards_wrapper">
          {
            painCardList.map((e) => <PainCard key={e.title} {...e}/>)
          }
        </div>
        <div className="joint_treatment">
          <h2>Методы лечения и реабилитации суставов</h2>
        </div>
        <div className="container treatment_methods">
          <div className="treatments_wrapper">
            {
              treatmentsList.map((item, index) => <TreatmentMethodCard key={index} {...item}/>)
            }
          </div>
        </div>
        <div className="RegToWeb-Wrapper">
          <RegToWeb />
        </div>
        <div className="joint_treatment">
          <h2>Узнать за 60 секунд</h2>
        </div>
        <div className="container videosCards">
          <div className="videosWrapper">
            {
              videosList.map((e, index) => <VideoCard key={index} {...e}/>)
            }
          </div>
        </div>
        <Callme/>
    </>
  )
}
