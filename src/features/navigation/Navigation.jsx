import IconHouse from '../../ui/IconHouse';
import IconSearch from '../../ui/IconSearch';
import Favorites from '../favorites/Favorites';
import { useState } from 'react';

const [navigation, setNavigation] = useState({ color: 'white', thereIsText: false});

 function handleSetNavigation(){
setNavigation((prev) =>( {color: 'black', thereIsText: true })
)

}

function Navigation() {
  return (
    <div>
      <Button icon=<IconHouse /> size='primary' onClick={handleSetNavigation} text={thereIsText && 'Home'} />
      <Button icon=<IconSearch /> size='primary' onClick={handleSetNavigation} text={thereIsText && 'Search'}  />
      <Button icon=<Favorites /> size='primary' onClick={handleSetNavigation} text={thereIsText && 'Favorites'}  />
      <Button icon=<IconUser /> size='primary' onClick={handleSetNavigation} text={thereIsText && 'Profile'} />
    </div>
  );
}

export default Navigation;

maybe
import { useState } from 'react';
import IconHouse from '../../ui/IconHouse';
import IconSearch from '../../ui/IconSearch';
import Favorites from '../favorites/Favorites';
import IconUser from '../../ui/IconUser'; // Этот импорт отсутствовал

// 1. Выносим конфигурацию вкладок (массив объектов)
// Название константы заглавными буквами указывает на статические данные
const TABS = [
  { id: 'home', label: 'Home', icon: <IconHouse /> },
  { id: 'search', label: 'Search', icon: <IconSearch /> },
  { id: 'favorites', label: 'Favorites', icon: <Favorites /> },
  { id: 'profile', label: 'Profile', icon: <IconUser /> },
];


function Navigation() {
  // 2. Храним ID активной вкладки. 
  // String — стринг — строковый тип данных. По умолчанию 'home'.
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="bottom-navigation">
      {TABS.map((tab) => {
        // 3. Вычисляем флаг активности для текущей кнопки
        const isActive = activeTab === tab.id;

        return (
          <Button
            key={tab.id}
            icon={tab.icon}
            size="primary"
            // Передаем разные классы в зависимости от состояния
            className={isActive ? 'nav-btn active' : 'nav-btn'} 
            // Обновляем состояние при клике
            onClick={() => setActiveTab(tab.id)}
            // Показываем текст только если кнопка активна
            text={isActive ? tab.label : null}
          />
        );
      })}
    </nav>
  );
}

export default Navigation;