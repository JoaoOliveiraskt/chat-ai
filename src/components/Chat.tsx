"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <Card className="w-[700px] ">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full  pr-4">
        {messages.map((message) => {
          return (
            <div key={message.id}
              className="flex gap-5 text-slate-700 text-base mb-4"
            >
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>JV</AvatarFallback>
                  <AvatarImage src="https://github.com/joaoOliveiraskt.png" />
                </Avatar>
              )}

              {message.role === 'assistant' && (
                <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://img.freepik.com/fotos-premium/design-adoravel-design-de-urso-para-camiseta-e-adesivo-perfeito-para-os-amantes-da-natureza_567739-5871.jpg?size=626&ext=jpg&ga=GA1.1.1136650098.1690245188&semt=ais" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-800">
                    {message.role === 'user' ? 'Usuário' : 'Assistente'}:
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex gap-5 w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
