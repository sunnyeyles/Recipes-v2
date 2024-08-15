'use client'

import { Button } from '@/components/ui/button'
import { useForm, useFieldArray } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { BinIcon } from './bin-icon'
import { useState } from 'react'
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from '@/components/ui/image-upload'
import { Paperclip } from 'lucide-react'
import { FileSvgDraw } from './file-svg-draw'
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
  files: File[] | null
}

export const RecipeStepsForm = () => {
  const form = useForm<TFormType>({
    defaultValues: {
      recipeName: 'recipe name',
      ingredients: [{ ingredient: '', amount: '' }],
      steps: [{ step: '' }],
      files: null,
    },
  })

  const { control, handleSubmit, setValue } = form

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

  const [files, setFiles] = useState<File[] | null>(null)

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  }

  // Update form data with files whenever they change
  const handleFileChange = (files: File[] | null) => {
    setFiles(files)
    setValue('files', files)
  }

  return (
    <div className="p-12 my-12">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* recipe name */}
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
          {/* ingredients */}
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
                    type="button"
                    variant="secondary"
                    className="active:animate-ping"
                    onClick={() => {
                      setTimeout(() => {
                        removeIngredient(index)
                      }, 200)
                    }}
                  >
                    <BinIcon />
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
          {/* steps */}
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
                    type="button"
                    variant="secondary"
                    className="active:animate-ping"
                    onClick={() => {
                      setTimeout(() => {
                        removeStep(index)
                      }, 200)
                    }}
                  >
                    <BinIcon />
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

          {/* file upload */}
          <FormItem>
            <FileUploader
              value={files}
              onValueChange={handleFileChange}
              dropzoneOptions={dropZoneConfig}
              className="relative bg-background rounded-lg p-2 border-2"
            >
              <FileInput className="outline-dashed outline-1 outline-white">
                <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                  <FileSvgDraw />
                </div>
              </FileInput>
              <FileUploaderContent>
                {files &&
                  files.length > 0 &&
                  files.map((file, i) => (
                    <FileUploaderItem key={i} index={i}>
                      <Paperclip className="h-4 w-4 strokeCurrent" />
                      <span>{file.name}</span>
                    </FileUploaderItem>
                  ))}
              </FileUploaderContent>
            </FileUploader>
          </FormItem>

          <Button type="submit">Save Recipe</Button>
        </form>
      </Form>
    </div>
  )
}
