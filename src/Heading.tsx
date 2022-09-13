import React from 'react';

// another way to define types instead of interface (for public api)
// use it for props and states

export type HeadingProps = { name?: string; }; // (?) means not necessary

// default value
export function Heading({ name = 'React' }: HeadingProps) {
    return <h1>Hello {name}</h1>;
}
