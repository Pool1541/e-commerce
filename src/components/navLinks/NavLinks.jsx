import { Link } from 'react-router-dom';
import { PUBLIC_ROUTES } from '@/config';
import { useDataFetcher } from '@/hooks';
import { getCategories } from '@/repositories/categoryRepository';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import NavLinkContainer from './NavLinks.styled';
import { transformToTitleCase } from '@/utils';

function mapCategories(data) {
  if (!data) return [];

  return data.map((item) => {
    const slug = item.name.toLowerCase().replace(/ /g, '-');

    return {
      title: transformToTitleCase(item.name),
      href: `${PUBLIC_ROUTES.CATEGORY}/${slug}`,
    };
  });
};

function renderSubCategories(subCategories) {
  return subCategories.map((subCategory) => (
    <DropdownMenu.Item key={subCategory.title} content={subCategory.title} href={subCategory.href} />
  ));
}

function renderCategories(categories) {
  return categories.map((category) => (
    category.href ? (
      <DropdownMenu.Item key={category.title} content={category.title} href={category.href} />
    ) : (
      <li key={category.title}>
        <DropdownMenu.SubMenu>
          <DropdownMenu.SubTrigger>{category.title}</DropdownMenu.SubTrigger>
          <DropdownMenu.SubList>
            {renderSubCategories(category.subCategories)}
          </DropdownMenu.SubList>
        </DropdownMenu.SubMenu>
      </li>
    )
  ));
}

export default function NavLinks() {
  const { data } = useDataFetcher({ fetcherFn: getCategories });
  const categories = mapCategories(data?.categories).sort((a, b) => b.title.length - a.title.length);

  return (
    <NavLinkContainer>
      <li>
        <DropdownMenu>
          <DropdownMenu.Trigger>Productos</DropdownMenu.Trigger>
          <DropdownMenu.List>
            {renderCategories(categories)}
          </DropdownMenu.List>
        </DropdownMenu>
      </li>
      <li>
        <Link>Productos con descuento</Link>
      </li>
      <li>
        <Link>Novedades</Link>
      </li>
    </NavLinkContainer>
  );
}
