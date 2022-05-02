# color-router

## Demo

[Color Router](https://color-router.netlify.app/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/color-router) to get started.

### Learning Objectives

- Use the `useParams` hook to get values from routes
- Use the `Switch` Component to render particular components
- Create a dynamic `Route` component that accepts multiple parameters

### Description

We have three buttons at the top of the screen. Silver, Crimson, and Purple. Right now those buttons aren't doing much because they are missing the correct code needed to render the color the button represents. If you check the deployed [Color Router](https://color-router.netlify.app/) you'll see that the page starts silver and the background changes whenever you click a button.

Your task is to add the code needed to make the buttons render the `<RGB />` component and values to the screen

### Acceptance Criteria

- Clicking on Silver updates the URL and changes background to Silver (`rgb(192,192,192)`)
- Clicking on Crimson updates the URL and changes background to Crimson (`rgb(220,20,60)`)
- Clicking on Purple updates the URL and changes background to Purple (`rgb(147,112,219)`)

### Rubric

| Task                                                                  | Points |
| --------------------------------------------------------------------- | ------ |
| Use `useParams` to grab the r,g,b values from URL                     | 4      |
| Use the `Switch` and `Route` Components to render the `RGB` Component | 4      |
| Existing tests pass                                                   | 1      |
| Successfully Deploy To Netlify                                        | 1      |
