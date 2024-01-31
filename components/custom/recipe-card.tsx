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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { MouseEventHandler } from "react";

export const RecipeCard = ({ ingredients, method, recipeName }: RecipeType) => {
  return (
    <Card className="flex flex-col gap-6 m-20 shadow-lg p-4 min-w-80 relative">
      <h2 className="text-lg">{recipeName}</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Ingredients</AccordionTrigger>
          <AccordionContent>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {ingredients && Array.isArray(ingredients)
                ? ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
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
              <Button variant="ghost">like</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to liked Recipes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">delete</Button>
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
