import React from 'react';

const Home = ()=>{
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.pinimg.com/originals/48/8d/d7/488dd75c4fe51882f5bd8e261f695253.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/04/36/53/04365347ba2c00c98a17636c8d763ac5.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapershome.ru/images/wallpapers/galaktika-1920x1080-kosmos-19730.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container-fluid py-5">
                <div className="col-sm-5 mx-auto box-lorem">
                    <h2 className="text-center">Космос</h2>
                    <p>Ко́смос (др.-греч. κόσμος «порядок,гармония») — представление о природном мире как о пластически упорядоченном гармоническом целом. Противопоставлялся хаосу. Греки соединяли в понятии «космос» две функции — упорядочивающую и эстетическую.</p>
                    <p>Иногда под космосом понимали только планетную систему, окружающую Солнце. В современном словоупотреблении в связи с этим остался термин "космогония", которым обычно обозначают науку о происхождении Солнечной системы, а не всей Вселенной в целом.</p>
                    <p>В современном понимании космос есть все находящееся за пределами Земли и ее атмосферы.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;