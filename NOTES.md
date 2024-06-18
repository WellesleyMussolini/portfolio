# Inspirations

- [Sean Halpin](https://www.seanhalpin.xyz/)

## Home Code

```jsx
<TextSlideUp
  labels={[
    {
      label: "Ola,",
      styles: "text-white"
    },
    {
      label: "me",
      styles: "text-white"
    },
    {
      label: "chamo",
      styles: "text-white"
    },
    {
      label: "Wellesley",
      styles: "font-black text-blue-600"
    },
    {
      label: "Mussolini",
      styles: "font-black text-blue-600"
    },
  ]}
  transitionDelay={90}
  animationDelay={0}
  labelGap="space-x-5"
  styles="text-center max-[400px]:text-2xl max-sm:text-4xl max-lg:flex max-lg:flex-col max-lg:gap-2 max-xl:text-5xl xl:text-6xl"
/>

<TextSlideUp
  labels={[
    {
      label: "Sou",
      styles: "text-white"
    },
    {
      label: "programador",
      styles: "text-white"
    },
    {
      label: "de",
      styles: "text-white"
    },
    {
      label: "Software",
      styles: "font-black text-blue-600"
    },
  ]}
  transitionDelay={90}
  animationDelay={350}
  labelGap="space-x-0"
  styles="text-center text-sm sm:text-xl mt-3 md:mt-0 md:text-3xl px-2"
/>

 <TextSlideUp labelGap="gap-2" styles="text-3xl"
labels={[
  { label: "sou", styles: "text-white" },
  { label: "desenvolvedor", styles: "text-white" },
  { label: "de", styles: "text-white" },
  { label: "software", styles: "text-white font-bold" },
]}
transitionDelay={90} animationDelay={500} />


 <h1 className="
        text-white
        text-center
        max-[400px]:text-2xl
        max-sm:text-4xl
        max-lg:flex
        max-lg:flex-col
        max-lg:gap-2
        max-xl:text-5xl
        xl:text-6xl">Olá, me chamo <strong className="font-black text-blue-600">Wellesley Mussolini</strong></h1>
        <h2 className="text-white text-center text-sm sm:text-xl mt-3 md:mt-0 md:text-3xl px-4">Sou programador de <strong className="font-bold">Software</strong></h2>

```
