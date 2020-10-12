import React from 'react';

const Earth = ()=> {
    return (
        <div className="container-fluid">
            <div className="img">
                <img src="https://b1.m24.ru/c/1226379.jpg" width="100%" alt=""/>
                <div className="text">
                    <h1 className="text-center">Земля</h1>
                </div>
            </div>
                <div className="row">
                    <div className="col-6 pt-4">
                        <table className="table table-bordered table-dark">
                            <tr>
                                <th scope="row">Масса</th>
                                <td>5,976*1024кг.</td>
                            </tr>
                            <tr>
                                <th scope="row">Диаметр</th>
                                <td>12756 км.</td>
                            </tr>
                            <tr>
                                <th scope="row">Тепература поверхности</th>
                                <td>максимум +58oC, минимальная -90oC</td>
                            </tr>
                            <tr>
                                <th scope="row">Длина суток</th>
                                <td>23часа 56минут 4,1секунды</td>
                            </tr>
                            <tr>
                                <th scope="row">Расстояние от Cолнца(среднее)</th>
                                <td>1 а.е.,то есть 150 млн.км.</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-6 pt-3">
                        <p>Земля является третьей планетой по счету от солнца.Имеет один спутник — Луна.Предположительно, Земля была образована около 4,7 миллиардов лет назад из газо-пылевых веществ, рассеянных в протосолнечной системе.</p>
                        <p>Свыше 70% поверхности занята Мировым океаном (361,1 млн.км2). Суша образована шестью материками, а также островами и занимает 149,1 миллион квадратных километров. Она возвышается над уровнем моря примерно на 875 метров.</p>
                        <p>В океанах и морях Земли содержится 1370 млн. км3 воды. Чтобы представить себе, как велико это количество, достаточно сказать, что оно в 10 раз больше объема суши, возвышающейся над уровнем моря. Высокогорные ледники и полярные льды Арктики и Антарктики связали более 30 млн. км3 воды. Если бы этот лед растопить, уровень океана поднялся и вода затопила бы около одной восьмой части суши. На данный момент наша планета является единственной, на которой доказано наличие жизни.</p>
                    </div>
                    <div>
                        <img src="https://hightech.fm/wp-content/uploads/2020/06/shutterstock_1072726052-scaled.jpg" width="100%" alt=""/>
                    </div>
                    <iframe width="100%" height="700" src="https://www.youtube.com/embed/kS2t0kvIMmw" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
        </div>
    );
}
export default Earth;