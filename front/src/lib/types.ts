"use client";

import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({
      message: "Por favor, insira um e-mail válido.",
    })
    .min(2, { message: "O e-mail deve ter pelo menos 2 caracteres." })
    .max(50, { message: "O e-mail deve ter no máximo 50 caracteres." })
    .email({ message: "Por favor, insira um e-mail válido." }),
  text: z
    .string({
      message: "Por favor, insira uma mensagem válida.",
    })
    .min(2, {
      message: "A mensagem deve ter pelo menos 2 caracteres.",
    })
    .max(500, {
      message: "A mensagem deve ter no máximo 500 caracteres.",
    }),
  date: z.date({ required_error: "Por favor, insira uma data válida." }),
});

export type TFormSchema = z.infer<typeof formSchema>;
