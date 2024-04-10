"use client";

export default function GuestbookErrorPage() {
  return (
    <div className="container max-w-4xl py-14 flex flex-col gap-6 min-h-[101vh]">
      <h1 className="font-bold text-2xl sm:text-3xl">Erro</h1>
      <p className="opacity-80">Houve um erro ao carregar as mensagens.</p>
    </div>
  );
}
