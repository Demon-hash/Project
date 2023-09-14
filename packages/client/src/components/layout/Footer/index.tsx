import type { FC } from 'react';

const Footer: FC = () => (
    <footer className="border-t border-foreground h-64 mt-8 px-2 lg:px-4 xl:px-6 2xl:px-8">
        <div className="flex justify-between my-8 m-auto">
            <section>
                <h1 className="font-bold my-2">Get to Know Us</h1>
                <ul>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Devices</li>
                    <li>Amazon Science</li>
                </ul>
            </section>
            <section>
                <h1 className="font-bold my-2">Contact Us</h1>
                <ul>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>
            </section>
            <section>
                <h1 className="font-bold my-2">Amazon Payment Products</h1>
                <ul>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>
            </section>
            <section>
                <h1 className="font-bold my-2">Amazon Payment Products</h1>
                <div className="w-96 h-48 bg-foreground"></div>
            </section>
        </div>

        <article className="text-center">
            © 2023{' '}
            <a href="/" className="hover:underline">
                MY WEBSGOP NAME™
            </a>
            . All Rights Reserved.
        </article>
    </footer>
);

export default Footer;
