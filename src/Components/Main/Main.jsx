import React from 'react';
import './Main.css';
import MainLogo from './Main-phot.png'
import MainPages from '../Header/MenuItems/MainPages/MainPages';
import Common from '../../Components/Header/MenuItems/ProtectionCompany/Common/Common';
import TypesService from '../Header/MenuItems/ProtectionCompany/TypesService/TypesService';

import SpecialTraining from '../Header/MenuItems/SpecialTraining/SpecialTraining';
import {Route, Switch, Redirect} from 'react-router';

import Box from '../Header/MenuItems/SportsСlub/Box/Box';
import Karate from '../Header/MenuItems/SportsСlub/Karate/Karate';
import MuayThai from '../Header/MenuItems/SportsСlub/MuayThai/MuayThai';

import Gallery from '../Header/MenuItems/Gallery/Gallery';
import BoxGallery from '../Header/MenuItems/Gallery/BoxGallery/BoxGallery';
import KarateGallery from '../Header/MenuItems/Gallery/KarateGallery/KarateGallery';
import MuayThaiGallery from '../Header/MenuItems/Gallery/MuayThaiGallery/MuayThaiGallery';

import Contacts from '../Header/MenuItems/Contacts/Contacts';
const Main = () => {
    return (
        <div className='wrapper_main'>
           <div className="main_page">
               <div className="main_photo"><figcaption>
                   <img src={MainLogo} alt="AlyansControl" className="main-photo-logo"/>
                   <p>Охоронна компанія «Альянс Контроль» була заснована в липні 2016 року. (Ліцензія МВС України №716 від 27.07.2016) .є членами Федерації професіоналів безпеки України.</p>
                   <p>Філософія компанії – поєднання передових економічних технологій з професійним потенціалом команди.
                       Наша діяльність – це надання охоронних послуг для фізичних і юридичних осіб. Ми вкладаємо, як тривалі договори, так і договори на разове надання послуг.</p>
           </figcaption>
           </div>
           <div className="main_page_info">
               <figcaption>
                   <p className="center_text">Перелік основних послуг:</p>
                   <ul className="list-uslug">
                       <li className="item-uslug">Охорона об’єктів будь-якої складності;</li>
                       <li className="item-uslug">Фізичний захист приватних осіб, супровід вантажів по території України;</li>
                       <li className="item-uslug">Надання безпеки при проведення спецзаходів (виставки, концерти, шоу-програми, торжества, свята);</li>
                       <li className="item-uslug">Охорона об’єктів за допомогою постановки на пульт охорони;</li>
                       <li className="item-uslug">Тривожні кнопки виклику мобільної групи реагування;</li>
                       <li className="item-uslug">Проектування, монтаж, ремонт і технічне обслуговування відеоспостереження;</li>
                       <li className="item-uslug">Монтаж систем контролю доступу;</li>
                       <li className="item-uslug">Моніторинг і охорона автотранспорту;</li>
                       <li className="item-uslug">Консультування та підготовка рекомендацій з питань правомірного захисту від протиправних посягань (антирейдерська захист);</li>
                       <li className="item-uslug">Фізична експрес охорона;</li>
                       <li className="item-uslug">Інформаційний захист, захист компаній від кібератак.</li>
                   </ul>
                   <p className="center_text">Співпрацюючи з нами, Ви отримуєте:</p>
                   <ul className="list-uslug">
                       <li className="item-uslug">Фахівців високого класу, що мають великий досвід роботи;</li>
                       <li className="item-uslug">Будь-які варіанти проектів – від економних до високобюджетних;</li>
                       <li className="item-uslug">Акуратність виконання й висока якість робіт;</li>
                       <li className="item-uslug">Консультації фахівців;</li>
                       <li className="item-uslug">Гарантійне і післягарантійне обслуговування;</li>
                       <li className="item-uslug">Гнучку систему знижок для постійних клієнтів і при великих обсягах робіт.</li>
                   </ul>
               <p className="border-top">Замовнику можуть бути запропоновані як типові проекти, розроблені фахівцями компанії, так і ексклюзивні індивідуальні рішення.
                   <p> Ми не пропонуємо просто купити у нас послугу, ми пропонуємо викласти нам Вашу проблему, нехай навіть не термінового характеру, і ми будемо раді виправдати Вашу довіру і принести Вам користь своїм рішенням. Якщо ж у Вас в даний час немає завдань такого виду, все одно нам буде приємно, принаймні, допомогти вам технічною консультацією або порадою.</p></p>
           </figcaption>
           </div>
        </div>
        <Switch>
            <Route exact path='/' component={MainPages}/>
            <Route path='/Common' component={Common}/>
            <Route path='/TypesService' component={TypesService}/>

            <Route path='/SpecialTraining' component={SpecialTraining}/>

            <Route path='/Box' component={Box}/>
            <Route path='/Karate' component={Karate}/>
            <Route path='/MuayThai' component={MuayThai}/>

            <Route path='/Gallery' component={Gallery}/>
            <Route path='/BoxGallery' component={BoxGallery}/>
            <Route path='/KarateGallery' component={KarateGallery}/>
            <Route path='/MuayThaiGallery' component={MuayThaiGallery}/>

            <Route path='/Contacts' component={Contacts}/>
           

        {/* <GalleryProtection /> */}
        </Switch>
        </div>
    )
};


export default Main;

