import MessageForm from "@/components/MessageForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-dots">
      <div className="max-w-xl px-6 py-8 bg-slate-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-gray-200 mb-4">
          Envio de Mensagens <strong>Futuras</strong>
        </h1>
        <p className="text-gray-300 mb-6">
          Envie mensagens no tempo certo! Com nosso serviço, você pode programar
          mensagens para o futuro. Seja um lembrete, uma mensagem de carinho ou
          uma nota importante, nós cuidaremos para que ela chegue no momento
          perfeito.
        </p>
        <MessageForm />
        <p className="text-gray-300 mb-6">
          Preencha o formulário com o texto da mensagem, o e-mail do
          destinatário e a data desejada.
        </p>
      </div>
    </main>
  );
}
