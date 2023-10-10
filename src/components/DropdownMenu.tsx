import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Link from 'next/link';

type DropdownMenuProps = {
  isShowing: boolean;
  toggleMenu: () => void;
  links?: { href: string; label: string }[];
};

export default function DropdownMenu({ isShowing, toggleMenu, links }: DropdownMenuProps) {
  return (
    <>
    <Modal size={'3xl'} blockScrollOnMount={true} motionPreset='slideInTop' isOpen={isShowing} onClose={toggleMenu}>
    <ModalOverlay zIndex={4} bg='blackAlpha.500'  backdropFilter='blur(8px)' />
      <ModalContent mt={24} zIndex={1} shadow={'none'} bg={'transparent'}>
        <ModalBody mx={4} p={4} bg={'primary'} shadow={'2xl'} rounded={'lg'}>
          {links?.map(({ href, label }) => (
            <Link
              key={`${href}${label}`}
              passHref
              href={href}
              onClick={toggleMenu}
              className='block p-4 text-secondary rounded-lg hover:bg-primaryDark transition-all duration-350 ease-linear'
            >
              {label}
            </Link>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  );
}
