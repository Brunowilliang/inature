// Importe o motion de framer-motion
import { motion } from 'framer-motion';
import Link from 'next/link';

type DropdownMenuProps = {
  isShowing: boolean;
  toggleMenu: () => void;
  links?: { href: string; label: string }[];
};



export default function DropdownMenu({ isShowing, toggleMenu, links }: DropdownMenuProps) {
  return (
    <>
    {links && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isShowing ? 1 : 0,
            y: isShowing ? 0 : -20,
            display: isShowing ? 'flex' : 'none',
            // pointerEvents: isShowing ? 'auto' : 'none',
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className='w-full px-4 z-50'
        >
          <div className='flex flex-col w-full p-3 bg-primary rounded-lg shadow-xl'>
            {links!.map(({ href, label }) => (
              <Link
                key={`${href}${label}`}
                passHref
                href={href}
                onClick={toggleMenu}
                className='block w-full py-3 px-4 text-secondary rounded-lg hover:bg-primaryDark transition-all duration-350 ease-linear'
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isShowing ? 1 : 0,
            pointerEvents: isShowing ? 'auto' : 'none',
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={'fixed inset-0 -z-10 w-screen h-screen bg-black/40'}
          onClick={toggleMenu}
        />
      </>
    )}
    </>
  );
}
