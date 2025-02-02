import { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useBoolean, useOutsideClick } from '@/hooks';
import { ChevronRightIcon } from '@/assets/icons';
import { DropdownMenuWrapper } from './DropdownMenu.styled';

const DropdownMenuContext = createContext({
  isOpen: false,
  setFalse: () => {},
  setToggle: () => {},
});

const DropdownSubMenuContext = createContext({
  isOpen: false,
  setFalse: () => {},
  setToggle: () => {},
});

function DropdownMenu({ children }) {
  const { value: isOpen, setFalse, setToggle } = useBoolean(false);
  const ref = useOutsideClick(setFalse);

  const contextValue = {
    isOpen,
    setFalse,
    setToggle,
  };

  return (
    <DropdownMenuContext.Provider value={contextValue}>
      <div ref={ref} style={{ position: 'relative', width: '100%' }}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

function DropdownTrigger({ children }) {
  const { setToggle } = useContext(DropdownMenuContext);

  return (
    <button title='Desplegar menú' onClick={setToggle} style={{ color: 'inherit' }}>
      {children}
    </button>
  );
}

function DropdownList({ children }) {
  const { isOpen } = useContext(DropdownMenuContext);

  return (
    isOpen && (
      <DropdownMenuWrapper>
        <ul>{children}</ul>
      </DropdownMenuWrapper>
    )
  );
}

export function DropdownSubList({ children }) {
  const { isOpen } = useContext(DropdownSubMenuContext);

  return (
    isOpen && (
      <DropdownMenuWrapper origin='fromLeft'>
        <ul>{children}</ul>
      </DropdownMenuWrapper>
    )
  );
}

function DropdownMenuItem({ content, href }) {
  return (
    <li>
      <Link to={href} className='menu-item'>
        {content}
      </Link>
    </li>
  );
}

function DropdownSubMenu({ children }) {
  const { value: isOpen, setFalse, setToggle } = useBoolean(false);
  const ref = useOutsideClick(setFalse);

  const contextValue = {
    isOpen,
    setFalse,
    setToggle,
  };

  return (
    <DropdownSubMenuContext.Provider value={contextValue}>
      <div ref={ref} style={{ position: 'relative', width: '100%' }}>
        {children}
      </div>
    </DropdownSubMenuContext.Provider>
  );
}

function DropdownSubTrigger({ children }) {
  const { setToggle } = useContext(DropdownSubMenuContext);

  return (
    <button
      className='menu-item'
      title='Desplegar menú'
      onClick={setToggle}
      style={{ color: 'inherit' }}>
      {children}
      <ChevronRightIcon className='dropdown-menu-icon' />
    </button>
  );
}

DropdownMenu.Trigger = DropdownTrigger;
DropdownMenu.List = DropdownList;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.SubMenu = DropdownSubMenu;
DropdownMenu.SubTrigger = DropdownSubTrigger;
DropdownMenu.SubList = DropdownSubList;

export default DropdownMenu;
