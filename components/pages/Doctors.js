import Header from "./../common/header/Header";
import Footer from "./../common/footer/Footer";
import cn from "./../../styles/doctors.module.css";
import { useState } from "react";
import ServiceCards from "../common/doctors/ServiceCards";
import {
  usersData,
  sideBarCity,
  sideBarSpecialization,
} from "./../common/doctors/UsersData";
import Articles from "../common/doctors/Article";
import CheckBox from "../common/doctors/CheckBox";
import Users from "../common/doctors/users";

export const Doctors = () => {
  const [users, setUsers] = useState(usersData);
  const [selected, setSelected] = useState({
    city: [],
    spec: [],
  });

  const handleFilters = (checkboxState, key) => {
    const logic = "AND";
    const newFilters = { ...selected };
    newFilters[key] = checkboxState;

    const hasCity = newFilters.city.length > 0;
    const hasSpec = newFilters.spec.length > 0;
    const hasFilters = hasCity || hasSpec;
    const filterCity = (module) =>
      newFilters.city.includes(0) || newFilters.city.includes(module.city);
    const filterSpec = (module) =>
      newFilters.spec.includes("") || newFilters.spec.includes(module.spec);

    const filteredUsers = usersData.filter(
      logic === "OR"
        ? (m) => !hasFilters || filterCity(m) || filterSpec(m) // OR
        : (m) =>
            !hasFilters ||
            ((!hasCity || filterCity(m)) && (!hasSpec || filterSpec(m))) // AND
    );
    setUsers(filteredUsers);
    setSelected(newFilters);
  };

  return (
    <div>

      <Header />

      <div className={cn.doctorContainer}>
        <div className={cn.doctorHeaderText}>
          <div className="container">
            <p>Специалисты клиники</p>
          </div>
        </div>
        <div className="container">
          <div className={cn.doctorBlockNav}>
            main / back treatment
          </div>
        </div>
      </div>
      <div className="container">
        <div className={cn.sideBarUsersGrid}>
          <div className={cn.sideBarScroll}>
            {" "}
            <div className={cn.sideBar}>
              <p>Город</p>

              <CheckBox
                list={sideBarCity}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, "city")
                }
              />

              <p>Специализация</p>

              <CheckBox
                list={sideBarSpecialization}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, "spec")
                }
              />

            </div>
          </div>
          {users.length !== 0 ? (

            <Users users={users} />

          ) : (
            <h1
              style={{
                textAlign: "center",
                marginTop: "200px",
                color: "#4c4c4c",
              }}
            >
              Не найдены!
            </h1>
          )}
        </div>
        <div className={cn.usersFooterBtn}>
          {" "}
          <button>Загрузить еще</button>
        </div>
      </div>
      <div className={cn.services}>
        <div className="container">
          <div className={cn.servicesHeader}>Оказываемые услуги</div>

          <ServiceCards />

          <div className={cn.serviceBtn}>
            <button>Смотреть все цены</button>
          </div>
        </div>
      </div>
      <div className={cn.popularArticle}>
        <div className="container">
          <div className={cn.articleHeader}>Популярные статьи</div>

          <Articles />

        </div>
      </div>

      <Footer />

    </div>
  );
};
