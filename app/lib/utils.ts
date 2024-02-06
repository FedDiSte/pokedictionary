import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function jsonFetch<T = unknown>(
  input: string | Request | URL,
  init?: RequestInit | undefined
): Promise<T | undefined> {
  try {
    const response = await fetch(input, init);

    if (!response.ok) {
      Promise.reject(response);
    }

    return (await response.json()) as T;
  } catch (e) {
    console.error('Something went wrong', e);
  }
}
