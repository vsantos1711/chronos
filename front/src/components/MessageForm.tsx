"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, TFormSchema } from "@/lib/types";

export default function MessageForm() {
  const { toast } = useToast();

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: TFormSchema) => {
    try {
      console.log(data);
      toast({
        title: "Login",
        description: "Login realizado com sucesso!",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Something gone wrong!",
        variant: "destructive",
        duration: 2000,
      });
      console.error("Algo deu errado:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-gray-300">
                <FormLabel className="text-2xl font-bold">Email</FormLabel>
                <FormControl>
                  <Input
                    className="text-black"
                    type="email"
                    placeholder="O e-mail que irá receber a mensagem"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="text-gray-300">
                <FormLabel className="text-2xl font-bold">Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none "
                    placeholder="Escreva sua mensagem aqui"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-gray-400">
                  Você também pode enviar mensagens para si mesmo!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col text-gray-300">
                <FormLabel className="text-2xl font-bold">
                  Data de envio
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl className="text-black">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal ",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span className="text-gray-500">
                            Escolha uma data
                          </span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 text-gray-500" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription className="text-gray-400">
                  Selecione a data em que deseja enviar a mensagem.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="mb-4"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}
