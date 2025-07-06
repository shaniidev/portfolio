import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 border-t mt-8">
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Mir Shan Talpur. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; 