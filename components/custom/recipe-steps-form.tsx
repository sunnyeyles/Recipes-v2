'use client'

import { Button } from '@/components/ui/button'
import { useForm, useFieldArray } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '@/components/ui/form'

type TFormType = {
  recipeName: string
  ingredients: { ingredient: string; amount: string }[]
  steps: {
    step: string
  }[]
}

export const RecipeStepsForm = () => {
  const form = useForm<TFormType>({
    defaultValues: {
      recipeName: 'recipe name',
      ingredients: [{ ingredient: '', amount: '' }],
      steps: [{ step: '' }],
    },
  })

  const { control, handleSubmit } = form

  // ingredients
  const {
    fields: stepFields,
    append: appendStep,
    remove: removeStep,
  } = useFieldArray({
    name: 'steps',
    control,
  })

  // steps
  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    name: 'ingredients',
    control,
  })

  const onSubmit = (data: TFormType) => {
    console.log('Form submitted: ', data)
  }

  return (
    <div className="p-8">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={control}
            name="recipeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recipe Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter recipe name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Ingredients</FormLabel>
            {ingredientFields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-4 mb-2">
                <FormField
                  control={control}
                  name={`ingredients.${index}.ingredient`}
                  render={({ field }) => (
                    <FormControl>
                      <Input placeholder="Ingredient" {...field} />
                    </FormControl>
                  )}
                />
                <FormField
                  control={control}
                  name={`ingredients.${index}.amount`}
                  render={({ field }) => (
                    <FormControl>
                      <Input placeholder="Amount" {...field} />
                    </FormControl>
                  )}
                />
                {index > 0 && (
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => removeIngredient(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="secondary"
              onClick={() => appendIngredient({ ingredient: '', amount: '' })}
            >
              Add Ingredient
            </Button>
          </FormItem>

          <FormItem>
            <FormLabel>Steps</FormLabel>
            {stepFields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-4 mb-2">
                <FormField
                  control={control}
                  name={`steps.${index}.step`}
                  render={({ field }) => (
                    <FormControl>
                      <Input placeholder="Step" {...field} />
                    </FormControl>
                  )}
                />
                {index > 0 && (
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => removeStep(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="secondary"
              onClick={() => appendStep({ step: '' })}
            >
              Add Step
            </Button>
          </FormItem>

          <Button type="submit">Save Recipe</Button>
        </form>
      </Form>
    </div>
  )
}
