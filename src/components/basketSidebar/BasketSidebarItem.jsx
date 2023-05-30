import { CloseIcon } from '../../assets/icons';
import {
  BasketSidebarItemContainer,
  BasketSidebarItemFooter,
  BasketSidebarItemHeader,
  BasketSidebarItemImage,
  BasketSidebarItemInfo,
} from './BasketSidebarItem.styled';

export default function BasketSidebarItem() {
  return (
    <BasketSidebarItemContainer>
      <BasketSidebarItemImage>
        <img
          src='https://vivanda.vtexassets.com/arquivos/ids/255425-96-auto'
          alt='Whisky JOHNNIE WALKER Gold Label Reserve Botella 750ml'
        />
      </BasketSidebarItemImage>
      <BasketSidebarItemInfo>
        <BasketSidebarItemHeader>
          <div>
            <p>JOHNNIE WALKER</p>
            <h3>Whisky JOHNNIE WALKER Gold Label Reserve Botella 750ml</h3>
          </div>
          <div>
            <button>
              <CloseIcon />
            </button>
          </div>
        </BasketSidebarItemHeader>
        <BasketSidebarItemFooter>
          <div>
            <span>1</span>
          </div>
          <div>
            S/ <span>439.80</span>
          </div>
        </BasketSidebarItemFooter>
      </BasketSidebarItemInfo>
    </BasketSidebarItemContainer>
  );
}
