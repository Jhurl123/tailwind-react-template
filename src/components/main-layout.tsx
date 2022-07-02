import React from 'react';

type Props = {
  children: JSX.Element;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="bg-indigo-700 h-screen w-screen">
      <div className="max-w-3xl mx-auto">
        <header className="py-5 flex justify-center">
          <h1 className="text-sky-50 text-2xl">Gain Train</h1>
        </header>
        <main className="">{children}</main>
      </div>
    </div>
  );
}
