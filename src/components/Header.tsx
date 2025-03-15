'use client';
import { Avatar } from '@/components/ui/avatar';
import Image from 'next/image';
import { useState } from 'react';

export function Header({
  name,
  email,
  title,
  location,
  githubUsername,
  contactFormUrl,
  imageUrl,
}: {
  name: string;
  email: string;
  title: string;
  location: string;
  githubUsername: string;
  contactFormUrl?: string;
  imageUrl?: string;
}) {
  const [showCopied, setShowCopied] = useState(false);
  const [showGithubCopied, setShowGithubCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleGithubCopy = async () => {
    await navigator.clipboard.writeText(githubUsername);
    setShowGithubCopied(true);
    setTimeout(() => setShowGithubCopied(false), 2000);
  };

  return (
    <header className="bg-white border border-gray-200 dark:bg-gray-800 rounded-lg mt-2 overflow-visible relative">
      {/* Profile Header Top */}
      <div className="relative pt-16">
        {/* Profile Image */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-16">
          <Avatar className="h-32 w-32 border-4 border-teal-500 dark:border-gray-800 rounded-full">
            {(imageUrl && imageUrl !== '') ? (
              <Image
                src={imageUrl}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-6xl font-bold">
                  {name.slice(0, 1)}
                </span>
              </div>
            )}
          </Avatar>
        </div>

        {/* Profile Details */}
        <div className="px-4 md:px-8 pb-6">
          <div className="mt-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{name}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4 mx-auto max-w-[75%]">
              {title}
            </p>

            <div className="flex flex-wrap gap-4 justify-start md:justify-center text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 shrink-0"
                >
                  <path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM12 13a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                {location}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 shrink-0"
                  >
                    <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001z" />
                  </svg>
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="p-1 hover:text-blue-600 relative"
                  aria-label="Copy email address"
                >
                  {showCopied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 shrink-0"
                  >
                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z" />
                  </svg>
                  {githubUsername}
                </a>
                <button
                  onClick={handleGithubCopy}
                  className="p-1 hover:text-blue-600 relative"
                  aria-label="Copy GitHub username"
                >
                  {showGithubCopied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
