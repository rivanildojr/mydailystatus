import React from "react";

const Footer = () => {
  return (
    <div className="py-4 text-center bg-gray-400">
      MyDailyStatus é um projeto criado durante o Fullstack Lab do Devpleno
      <br />
      Implementado por:{" "}
      <a
        href="https://linkedin.com/in/rivanildojunior"
        className="hover:underline hover:text-red-800"
      >
        Rivanildo Júnior
      </a>
    </div>
  );
};

export default Footer;
