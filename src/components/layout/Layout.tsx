import React from 'react'
import Breadcrumb from './Breadcrumb';
import Header from '@component/components/layout/Header';
import Footer from '@component/components/layout/Footer';


type MainLayoutProps = {
  children: React.ReactNode;
};

export default function Layout ({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {/* <Breadcrumb /> */}
      <div>{children}</div>
      <Footer />
    </>
  );
};
