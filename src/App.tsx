"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Hayır",
      "Emin misin?",
      "Ya çok kibar sorarsam?",
      "Lüüütfen",
      "Üstüne çikolatalı bir şey de eklerim",
      "Matcha da ister misin?",
      "LÜTFEN AŞKIM",
      "Ama :*(",
      "Ölüyorum şu an",
      "Tamam öldüm",
      "Şu an Berke'nin hayaletiyle konuşuyorsun",
      "Lütfen bebeğim",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "Hayır :(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            YAAAAAAY!!! Ben de seni seviyorum! 😄❤️
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Beni seviyor musun?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Evet
            </button>

            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Hayır" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
