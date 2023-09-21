import type { FC } from 'react';
import { LINKS } from 'links';

const Footer: FC = () => {
    const links = [
        {
            header: 'Get to Know Us',
            data: [
                'Careers',
                'Blog',
                'About',
                'Investor Relations',
                'Amazon Devices',
                'Amazon Science',
            ],
        },
        {
            header: 'Contact Us',
            data: [
                'Amazon Business Card',
                'Shop with Points',
                'Reload Your Balance',
                'Amazon Currency Converter',
            ],
        },
        {
            header: 'Amazon Payment Products',
            data: [
                'Amazon Business Card',
                'Shop with Points',
                'Reload Your Balance',
                'Amazon Currency Converter',
            ],
        },
        {
            header: 'Payment Products',
            data: [
                'Amazon Business Card',
                'Shop with Points',
                'Reload Your Balance',
                'Amazon Currency Converter',
            ],
        },
    ];

    const year = new Date().getFullYear();

    return (
        <footer
            role="contentinfo"
            className="border-t border-foreground h-64 mt-8 px-2 lg:px-4 xl:px-6 2xl:px-8"
        >
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 content-center my-8 m-auto 3xl:w-[50%]">
                {links.map(({ header, data }) => (
                    <section key={header} className="text-center lg:text-left">
                        <h1 className="font-bold">{header}</h1>
                        <ul className="my-2">
                            {data.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <article className="text-center pb-4">
                © {year + ' '}
                <a href={LINKS.HOME} className="hover:underline">
                    MY WEBSITE
                </a>
                . All Rights Reserved.
            </article>
        </footer>
    );
};

export default Footer;
