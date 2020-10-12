import React from 'react';

const Uranus = ()=> {
    return (
        <div className="container-fluid">
            <div className="img">
                <img src="https://interesnyefakty.org/wp-content/uploads/Planeta-Uran-1.jpg" width="100%" alt=""/>
                <div className="text">
                    <h1 className="text-center">Уран</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 pt-4">
                    <table className="table table-bordered table-dark">
                        <tr>
                            <th scope="row">Масса</th>
                            <td>8,7*1025кг. (14,5 раз больше массы Земли)</td>
                        </tr>
                        <tr>
                            <th scope="row">Диаметр</th>
                            <td>51300 км. (4 раза больше диаметра Земли)</td>
                        </tr>
                        <tr>
                            <th scope="row">Тепература поверхности</th>
                            <td>-220oC</td>
                        </tr>
                        <tr>
                            <th scope="row">Длина суток</th>
                            <td>17,23 часа</td>
                        </tr>
                        <tr>
                            <th scope="row">Расстояние от Cолнца(среднее)</th>
                            <td>19,2 а.е.,то есть 2,86 млрд.км.</td>
                        </tr>
                    </table>
                </div>
                <div className="col-6 pt-2">
                    <p>Уран имеет 27 спутников и 30 колец. Седьмая планета солнечной системы располагается неподалеку от границы дальнего космоса. Уран также как и Нептун, Юпитер, Сатурн относится к газовым гигантам. Все эти планеты имеют серьёзные расхождения с планетами земной группы — Марса, Венеры, Меркурия. </p>
                    <p>В отличие от других газовых планет — Юпитера и Сатурна, которые, по большей части состоят из гелия и водорода, в центре Урана и похожего на него Нептуна нет металлического водорода, но зато там очень большое количество льда и его различные температурные модификации. Из-за этой причины ученые отделили Уран и Нептун в отдельный вид «Ледяных гигантов».</p>
                    <p>Уран имеет самую холодную атмосферу в Солнечной системе с минимальным температурным значением — 224 градуса Цельсия.Расположение Урана в пространстве серьёзно отличается от других планет Солнечной системы — его ось вращения находится «на боку» относительно плоскости вращения данной планеты вокруг Солнца. Из-за этого Уран обращается к Солнцу, чередуя северный и южный полюса, а также поперечными широтами.</p>
                </div>
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/h-F36sUDoWM" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default Uranus;