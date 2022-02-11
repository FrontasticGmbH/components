import React from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
};

export const EmptyState: React.FC<Props> = ({ icon, title }: Props) => {
  return (
    <div className="my-10 md:mt-20 w-64 mx-auto text-center">
      <span>{icon}</span>

      <div className="mt-4 text-center text-neutral-900">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};
