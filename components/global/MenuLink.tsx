import Link from "next/link";
import { forwardRef } from "react";

interface MenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

export default MenuLink;
