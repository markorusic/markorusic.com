import { owner } from '@/config';

export default function SayHello() {
  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Say hello 👋
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Feel free to reach out at{' '}
        <a
          className="text-gray-800 dark:text-gray-50 font-medium underline"
          href={`mailto:${owner.email}`}
        >
          {owner.email}
        </a>
      </p>
    </div>
  );
}
