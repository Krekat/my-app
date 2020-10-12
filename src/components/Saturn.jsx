import React from 'react';

const Saturn = ()=> {
    return (
        <div className="container-fluid">
            <div className="img">
                <img src="https://i1.wp.com/itc.ua/wp-content/uploads/2019/10/190305_Fiat_Concept_Centoventi_12-33.jpg?fit=3000%2C1688&quality=100&strip=all&ssl=1" width="100%" alt=""/>
                <div className="text">
                    <h1 className="text-center">Сатурн</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 pt-3">
                    <table className="table table-bordered table-dark">
                        <tr>
                            <th scope="row">Масса</th>
                            <td>5,68*1026кг. (95 раз больше массы Земли)</td>
                        </tr>
                        <tr>
                            <th scope="row">Диаметр</th>
                            <td>120420 км. (9,46 раза больше диаметра Земли)</td>
                        </tr>
                        <tr>
                            <th scope="row">Тепература поверхности</th>
                            <td>-150oC</td>
                        </tr>
                        <tr>
                            <th scope="row">Длина суток</th>
                            <td>10,54 часа</td>
                        </tr>
                        <tr>
                            <th scope="row">Расстояние от Cолнца(среднее)</th>
                            <td>9,54 а.е.,то есть 1427 млн.км.</td>
                        </tr>
                    </table>
                </div>
                <div className="col-6 pt-5">
                    <p>Сатурн это шестая планета Солнечной системы, имеющая систему колец. Из-за сильного вращения вокруг оси, Сатурн сплющен по полюсам и раздут на экваторе.</p>
                    <p> Скорость ветров в районе экватора развивается до 1800 километров в час, что в 4 раза превосходит самый быстрый ветер на Юпитере. Кольца планеты имеют ширину 400 000 километров. Внутренние части колец Сатурна имеют большую скорость вращения, чем внешние.</p>
                </div>
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/QFAGlHuIhpc" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default Saturn;