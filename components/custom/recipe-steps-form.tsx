'use client'
import { useState, FormEvent } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm, useFieldArray, Controller, useWatch } from 'react-hook-form'
import { Input } from '@/components/ui/input'

export const RecipeStepsForm = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      steps: [{ stepNum: 1, instruction: 'Cook' }],
    },
  })

  const { fields } = useFieldArray({
    name: 'steps',
    control,
  })
  return <div></div>
}
