import { 
  Icon, 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton,
  PopoverBody, 
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function MyPopover() {
  return(
    <Popover>
      <PopoverTrigger>
        <span>
          <Icon 
            as={RiInformationLine} 
            color="gray.400"
            width={["10px", "16px"]}
            height={["10px", "16px"]}
            marginLeft="1" 
            cursor="pointer"
          />
        </span>
      </PopoverTrigger>
      <PopoverContent background="gray.700" color="gray.100">
        <PopoverArrow color="gray.700" />
        <PopoverCloseButton color="yellow.400"/>
        <PopoverBody fontWeight="400" fontSize="lg">
          Londres, Paris, Roma, Praga, Amsterdã, ...
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}