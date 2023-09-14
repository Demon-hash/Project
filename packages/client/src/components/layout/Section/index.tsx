import type { FC } from 'react';

interface Properties {
    readonly title: string;
    readonly desc: string;
}
const Section: FC<Properties> = ({ title, desc }) => (
    <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h3>{desc}</h3>
    </section>
);

export default Section;
