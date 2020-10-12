import React from 'react';

const Mars = ()=> {
    return (
        <div className="container-fluid">
            <div className="img">
                <img src="https://www.ixbt.com/img/n1/news/2020/0/3/mars_living_image_one_large.png" width="100%" alt=""/>
                <div className="text">
                    <h1 className="text-center">Марс</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 pt-3">
                    <table className="table table-bordered table-dark">
                        <tr>
                            <th scope="row">Масса</th>
                            <td>6,4*1023кг. (0,107 массы Земли)</td>
                        </tr>
                        <tr>
                            <th scope="row">Диаметр</th>
                            <td>6670 км. (0,53 диаметра Земли)</td>
                        </tr>
                        <tr>
                            <th scope="row">Тепература поверхности</th>
                            <td>-23oC на большей части поверхности, -150oC на полюсах,0oC на экваторе</td>
                        </tr>
                        <tr>
                            <th scope="row">Длина суток</th>
                            <td>24,6229 часа</td>
                        </tr>
                        <tr>
                            <th scope="row">Расстояние от Cолнца(среднее)</th>
                            <td>1,5237 а.е.,то есть 228 млн.км.</td>
                        </tr>
                    </table>
                </div>
                <div className="col-6 pt-5">
                    <p>Марс — четвертая планета Солнечной системы. Имеет сходство с Землёй, но имеет меньшую величину и температуру на поверхности. На Марсе располагаются большие вулканы, пустыни и каньоны. Эта красная планета сопровождается двумя спутниками — Деймос, Фобос. Марс — единственный космический объект ( не считая Луны) до которого может дотянуться человек с помощью современных ракет и зондов.</p>
                    <p>Для космонавтов этот путь может занять примерно 4 года и будет новым шагом в освоении космоса.</p>
                    <p>Считается, что в далекие времена на Марсе были большие запасы воды. На Северном и Южном полюсах планеты находятся шапки из льда, но он состоит не из воды, а атмосферного углекислого газа, который застывает при температуре ниже 100 градусов Цельсия.</p>
                </div>
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/H86xRl1s-Ko" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default Mars;