import { Tag as ChakraTag } from "@chakra-ui/react";
import * as React from "react";

export interface TagProps extends ChakraTag.RootProps {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  onClose?: VoidFunction;
  closable?: boolean;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  function Tag(props, ref) {
    const {
      endElement,
      onClose,
      closable = !!onClose,
      children,
      ...rest
    } = props;

    return (
      <ChakraTag.Root
        ref={ref}
        {...rest}
        bgColor="#8F4DFF"
        p={2}
        borderRadius="0.938rem"
        alignItems="flex-end"
      >
        <ChakraTag.Label fontSize="0.938rem" color="#FFF" borderColor="none">
          {children}
        </ChakraTag.Label>
        <ChakraTag.EndElement>{endElement}</ChakraTag.EndElement>
        {closable && (
          <ChakraTag.EndElement>
            <ChakraTag.CloseTrigger onClick={onClose} />
          </ChakraTag.EndElement>
        )}
      </ChakraTag.Root>
    );
  }
);
