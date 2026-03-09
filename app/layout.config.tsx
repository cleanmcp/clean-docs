import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/logo/dark.svg" alt="Clean" width={24} height={24} className="block dark:hidden" />
        <Image src="/logo/light.svg" alt="Clean" width={24} height={24} className="hidden dark:block" />
        Clean
      </>
    ),
  },
  links: [
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'API Reference',
      url: '/docs/api-reference',
      active: 'nested-url',
    },
  ],
};
