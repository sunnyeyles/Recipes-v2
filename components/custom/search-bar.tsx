"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { fetchGeneratedRecipe } from "@/api-client/fetchAIGeneratedRecipe";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const inputSchema = z.object({
  input: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const SearchBar = () => {
  const form = useForm<z.infer<typeof inputSchema>>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      input: "",
    },
  });
  const onSubmit = async (data: { input: string }) => {
    try {
      const response = await fetchGeneratedRecipe(data.input);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="enter keyword" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Create me a Recipe</Button>
        </div>
      </form>
    </Form>
  );
};
