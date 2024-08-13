'use client'

import { Button } from '@/components/ui/button'
import { useForm, useFieldArray } from 'react-hook-form'

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

  const { register, control, handleSubmit } = form

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
    <div className="m-20">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* recipe name */}
        <div className="m-6">
          <label htmlFor="recipeName" className="border-b-2 block">
            Recipe Name
          </label>
          <input
            className="border-2 w-full"
            type="text"
            id="recipeName"
            {...register('recipeName')}
          />
        </div>

        {/* ingredients */}
        <div>
          <label className="border-b-2 block">Ingredients</label>
          {ingredientFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <input
                className="border-2 flex-1"
                type="text"
                {...register(`ingredients.${index}.ingredient` as const)}
              />
              <input
                className="border-2 flex-1"
                type="text"
                {...register(`ingredients.${index}.amount` as const)}
              />
              {index > 0 && (
                <button
                  className="border-2"
                  type="button"
                  onClick={() => removeIngredient(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            className="mt-2 border-2"
            type="button"
            onClick={() => appendIngredient({ ingredient: '', amount: '' })}
          >
            Add Ingredient
          </button>
        </div>
        {/* steps */}
        <div>
          <label className="border-b-2 block">Steps</label>
          {stepFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <input
                className="border-2 flex-1"
                type="text"
                {...register(`steps.${index}.step` as const)}
              />
              {index > 0 && (
                <button
                  className="border-2"
                  type="button"
                  onClick={() => removeStep(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            className="mt-2 border-2"
            type="button"
            onClick={() => appendStep({ step: '' })}
          >
            Add Step
          </button>
        </div>

        <Button type="submit" className="mt-4">
          Save Recipe
        </Button>
      </form>
    </div>
  )
}
