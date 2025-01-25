'use client';
import React from 'react';
import UserLayout from '../../layouts/UserLayout';

export default function layout({ children }: { children: React.ReactNode }) {
  return <UserLayout>{children}</UserLayout>;
}
