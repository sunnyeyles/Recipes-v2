'use client'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { fetchGeneratedRecipe } from '@/api-client/fetchAIGeneratedRecipe'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RecipeType } from '@/types/mainTypes'
const inputSchema = z.object({
  input: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export const SearchBar = ({
  onDataReceived,
}: {
  onDataReceived: (newRecipes: RecipeType[]) => void
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const form = useForm<z.infer<typeof inputSchema>>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      input: '',
    },
  })
  const onSubmit = async (data: { input: string }) => {
    try {
      setIsLoading(true)
      const response = await fetchGeneratedRecipe(data.input)
      form.reset()
      setIsLoading(false)
      onDataReceived(response.data.recipes)
    } catch (error) {
      console.log(error)
    }
  }
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
          {isLoading ? (
            <Button type="button" disabled>
              <span className="px-6">Creating Recipe...</span>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </Button>
          ) : (
            <Button>Generate Recipe</Button>
          )}
        </div>
      </form>
    </Form>
  )
}
