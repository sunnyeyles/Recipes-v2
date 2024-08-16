'use client'
import { useState } from 'react'
import { RecipeType } from '@/types/mainTypes'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '../ui/button'
import { Card } from '@/components/ui/card'

export const RecipeCard = ({
  ingredients,
  method,
  recipeName,
  liked,
  likeRecipe,
  deleteRecipe,
}: RecipeType) => {
  const [completedIngredients, setCompletedIngredients] = useState<boolean[]>(
    []
  )

  const handleIngredientClick = (index: number): void => {
    setCompletedIngredients((prevCompleted) => {
      const newCompleted: boolean[] = [...prevCompleted]
      newCompleted[index] = !newCompleted[index]
      return newCompleted
    })
  }

  return (
    <Card className="group flex flex-col gap-6 m-20 shadow-lg p-4 min-w-80 relative odd:bg-slate-50 even:bg-slate-100">
      <h2 className="text-lg">{recipeName}</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Ingredients</AccordionTrigger>
          <AccordionContent>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {ingredients && Array.isArray(ingredients)
                ? ingredients.map((ingredient, index) => (
                    <li
                      onDoubleClick={() => handleIngredientClick(index)}
                      className={`cursor-pointer ${
                        completedIngredients[index]
                          ? 'line-through text-gray-900'
                          : ''
                      }`}
                      key={index}
                    >
                      {ingredient}
                    </li>
                  ))
                : null}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Method</AccordionTrigger>
          <AccordionContent>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              {method && Array.isArray(method)
                ? method.map((method, index) => <li key={index}>{method}</li>)
                : null}
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-between">
        <button
          onClick={likeRecipe}
          className="active:animate-ping active:text-red-500 hover:text-red-500"
        >
          {liked ? (
            <svg
              className="w-5 h-5 text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
            </svg>
          )}
        </button>

        <Button
          variant="ghost"
          onClick={deleteRecipe}
          className="active:animate-ping"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
          </svg>
        </Button>
      </div>
    </Card>
  )
}
