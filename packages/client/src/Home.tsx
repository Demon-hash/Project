import type { FC } from 'react';
import { Header } from 'components/Header';

export const Home: FC = () => {
    const headers = [
        {
            title: 'Discover Our Brand',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aperiam eos iusto',
        },
        {
            title: 'Recent Arrivials',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        },
    ];

    const tags = ['Dresses', 'Jumpsuits', 'Jackets'];

    const HeaderBlock = ({ data: { title, desc } }) => (
        <section className="py-12 text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <h3>{desc}</h3>
        </section>
    );

    const Tag = ({ title }) => (
        <div className="absolute bg-white top-2 left-2 lg:top-4 lg:left-4 rounded-sm px-3 py-2">
            {title}
        </div>
    );

    const Block = () => (
        <div className="relative col-span-1 grow h-96 bg-foreground"></div>
    );

    const Footer = () => (
        <footer className="border-t border-foreground h-64 mt-8">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{' '}
                <a href="/" className="hover:underline">
                    Flowbite™
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    );

    const Container = ({ children }) => {
        return (
            <main className="px-2 lg:px-4 xl:px-6 2xl:px-8 m-auto">
                {children}
            </main>
        );
    };

    return (
        <>
            <Header />
            <Container>
                <div className="bg-foreground h-96 mt-4 lg:mt-4">Carousel</div>
                <HeaderBlock data={headers[0]} />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 xl:gap-4 h-[calc(theme(height.64)*2)] max-h-[calc(theme(height.64)*2)]">
                    <div className="relative col-span-1 bg-foreground overflow-y-hidden h-full">
                        <Tag title={tags[0]} />
                    </div>
                    <div className="col-span-1 flex justify-between flex-col gap-2 lg:gap-3 xl:gap-4">
                        <div className="relative grow bg-foreground overflow-y-hidden">
                            <Tag title={tags[1]} />
                        </div>
                        <div className="relative grow bg-foreground overflow-y-hidden">
                            <Tag title={tags[2]} />
                        </div>
                    </div>
                </section>
                <HeaderBlock data={headers[1]} />
                <section className="grid gap-2 lg:gap-3 xl:gap-4 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2">
                    {[1, 2, 3, 4].map(() => (
                        <Block />
                    ))}
                </section>
            </Container>
            <Footer />
        </>
    );
};
