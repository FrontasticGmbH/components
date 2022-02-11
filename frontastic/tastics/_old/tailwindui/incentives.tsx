import { LockClosedIcon, RefreshIcon, HomeIcon } from '@heroicons/react/outline';

const incentivess = [
  { name: 'Free & fast delivery', icon: HomeIcon },
  { name: 'Free returns', icon: RefreshIcon },
  { name: 'Safe payment and data protection', icon: LockClosedIcon },
];

export default function Example() {
  return (
    <div className="bg-white mb-12">
      <h2 className="sr-only">Why you should buy from us</h2>
      <div className="flex overflow-x-auto">
        <div className="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
          {incentivess.map((incentives) => (
            <div key={incentives.name} className="flex items-center text-sm font-medium text-indigo-600">
              <incentives.icon className="mr-2 flex-none w-6 h-6" aria-hidden="true" />
              <p>{incentives.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
