"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { fetchGeneratedRecipe } from "@/api-client/fetchAIGeneratedRecipe";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RecipeType } from "@/types/mainTypes";
const inputSchema = z.object({
  input: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const SearchBar = ({
  onDataReceived,
}: {
  onDataReceived: (newRecipes: RecipeType[]) => void;
}) => {
  const form = useForm<z.infer<typeof inputSchema>>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      input: "",
    },
  });
  const onSubmit = async (data: { input: string }) => {
    try {
      const response = await fetchGeneratedRecipe(data.input);
      onDataReceived(response.data.recipes);
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
