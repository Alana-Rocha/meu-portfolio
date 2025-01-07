import {
  IconButton,
  Image,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

export const Menu = () => {
  //   const [isRotated, setIsRotated] = useState(false);

  //   const handleClick = () => {
  //     setIsRotated(!isRotated);
  //   };

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <IconButton aria-label="Search database">
          {<Image src="assets/images/menu.svg" />}
        </IconButton>
      </MenuTrigger>
      <MenuContent >
        <MenuItem asChild value="naruto">
          <a
            href="https://www.crunchyroll.com/naruto"
            target="_blank"
            rel="noreferrer"
          >
            Naruto
          </a>
        </MenuItem>
        <MenuItem asChild value="one-piece">
          <a
            href="https://www.crunchyroll.com/one-piece"
            target="_blank"
            rel="noreferrer"
          >
            One Piece
          </a>
        </MenuItem>
        <MenuItem asChild value="attack-on-titan">
          <a
            href="https://www.crunchyroll.com/attack-on-titan"
            target="_blank"
            rel="noreferrer"
          >
            Attack on Titan
          </a>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};
