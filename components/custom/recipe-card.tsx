"use client";
import { useState } from "react";
import { RecipeType } from "@/types/mainTypes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const RecipeCard = ({
  ingredients,
  method,
  recipeName,
  likeRecipe,
  deleteRecipe,
}: RecipeType) => {
  const [completedIngredients, setCompletedIngredients] = useState<boolean[]>(
    []
  );

  const handleIngredientClick = (index: number): void => {
    setCompletedIngredients((prevCompleted) => {
      const newCompleted: boolean[] = [...prevCompleted];
      newCompleted[index] = !newCompleted[index];
      return newCompleted;
    });
  };

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
                          ? "line-through text-gray-900"
                          : ""
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" onClick={likeRecipe}>
                like
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to liked Recipes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" onClick={deleteRecipe}>
                delete
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete Item</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
};
