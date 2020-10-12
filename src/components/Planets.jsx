import React from "react";
import {NavLink} from "react-router-dom";


const Planets = ()=>{
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row py-5 text-center">
                    <div className="col">
                        <img src="https://cosmos-online.ru/wp-content/uploads/2018/09/mercury.png" alt=""/>
                        <NavLink className="nav-link" to="mercury">Меркурий</NavLink>
                    </div>
                    <div className="col">
                        <img src="https://cosmos-online.ru/wp-content/uploads/2018/09/venera.png" alt=""/>
                        <NavLink className="nav-link" to="venus">Венера</NavLink>
                    </div>
                    <div className="col">
                        <img src="https://cosmos-online.ru/wp-content/uploads/2018/09/earth.png" alt=""/>
                        <NavLink className="nav-link" to="earth">Земля</NavLink>
                    </div>
                    <div className="col">
                        <img src="https://cosmos-online.ru/wp-content/uploads/2018/09/mars.png" alt=""/>
                        <NavLink className="nav-link" to="mars">Марс</NavLink>
                    </div>
                </div>
                <div className="row py-5 text-center">
                    <div className="col">
                        <img src="https://cosmos-online.ru/wp-content/uploads/2018/09/jupiter.png" alt=""/>
                        <NavLink className="nav-link" to="jupiter">Юпитер</NavLink>
                    </div>
                    <div className="col">
                        <img src="https://cosmos-online.ru/wp-content/uploads/2018/09/saturn.png" alt=""/>
                        <NavLink className="nav-link" to="saturn">Сатурн</NavLink>
                    </div>
                    <div className="col">
                        <img src="https://cosmos-online.ru/wp-content/uploads/2018/09/uran.png" alt=""/>
                        <NavLink className="nav-link" to="uranus">Уран</NavLink>
                    </div>
                    <div className="col">
                        <img src="https://cosmos-online.ru/wp-content/uploads/2018/09/neptun.png" alt=""/>
                        <NavLink className="nav-link" to="neptune">Нептун</NavLink>
                    </div>
                    <div className="container py-3 mt-3 box-lorem">
                        <p>Солнечная система — планетная система, включающая в себя центральную звезду — Солнце — и все естественные космические объекты, обращающиеся вокруг Солнца. Она сформировалась путём гравитационного сжатия газопылевого облака примерно 4,57 млрд лет назад. Обратите внимание: солнце — это не планета.</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://images8.alphacoders.com/678/thumb-1920-678401.jpg" width="100%" alt=""/>
            </div>
            <div className="container py-5 my-5 box-lorem">
                <h2 className="text-center">Солнечная система</h2>
                <p>Ученые выдвигают множество версий возникновения нашей Солнечной системы. В сороковых годах прошлого столетия Отто Шмидт выдвинут гипотезу о том, что Солнечная система возникла потому что холодные пылевые облака притянулись к Солнцу. С течением времени облака сформировали основы будущих планет. В современной науке именно теория Шмидта является основной.Солнечная система представляет собой лишь малую часть большой галактики под названием Млечный Путь. В Млечный Путь входит более ста миллиардов различных звезд. Для осознания столь простой истины человечеству понадобились тысячелетия. Открытие солнечной системы произошло не сразу, шаг за шагом, на основании побед и ошибок, формировалась система знаний. Основной базой для изучения Солнечной системы были знания о Земле. </p>
                <h2 className="text-center">Основы и теории</h2>
                <p>Основными вехами в изучении Солнечной системы являются современная атомарная система, гелиоцентрическая система Коперника и Птолемея. Наиболее вероятной версией происхождения системы считают теорию Большого взрыва. В соответствии с ней, формирование галактики началось с «разбегания» элементов мегасистемы. На рубеже непроглядного хауса зародилась наша Солнечная система.Основу всего составляет Солнце – 99,8% от всего объема, на долю планет приходится 0,13%, оставшиеся 0,0003% составляют различные тела нашей системы.Учеными принято деление планет на две условные группы. К первой относятся планеты типа Земля: собственно сама Земля, Венера, Меркурий. Основными отличительными характеристиками планет первой группы является относительно небольшая площадь, твердость, небольшое количество спутников. Ко второй группе относятся Уран, Нептун и Сатурн – их отличают большие размеры (планеты гиганты), их формируют газы гелия и водорода. Помимо Солнца и планет к нашей системе относятся также планетарные спутники, кометы, метеориты и астероиды.</p>
                <p>Особое внимание следует обратить на астероидные пояса, которые находятся между Юпитером и Марсом, и между орбитами Плутона и Нептуна. На данный момент в науки нет однозначной версии возникновения таких образований. Какая планета не считается сейчас планетой: Плутон со времён своего открытия и до 2006 года считался планетой, но позже во внешней части Солнечной Системы было открыто множество небесных тел, сопоставимых по размером с Плутоном и даже превышающих его. Во избежание путаницы было дано новое определение планеты. Плутон не попал под это определение, так что ему был присвоен новый «статус» — карликовая планета. Так что, Плутон может служить ответом на вопрос: раньше он считался планетой, а теперь — нет. Однако, некоторые учёные продолжают считать, что Плутон должен быть переклассифицирован обратно в планету.</p>
            </div>
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/RcBGYODF5Ks" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    );
}

export default Planets;