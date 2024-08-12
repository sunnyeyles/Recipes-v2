'use client'
import React, { useState, FormEvent } from 'react'

import { NavBarWrapper } from '@/components/custom/nav-bar-wrapper'
import { RecipeStepsForm } from '@/components/custom/recipe-steps-form'
const About = () => {
  const [steps, setSteps] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const handleAddStep = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() === '') return

    setSteps([...steps, inputValue])
    setInputValue('')
  }
  return (
    <div>
      <NavBarWrapper />
      <RecipeStepsForm />
    </div>
  )
}

export default About
