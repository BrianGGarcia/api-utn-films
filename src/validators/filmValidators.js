import z from "zod"

const filmSchema = z.object({
  title: z.string()
    .trim()
    .min(1, "El titulo no puede estar vacio"),

  year: z.coerce.
    number()
    .int("El año de estreno debe ser un número entero"),

  genre: z.enum([
    "Fantasia",
    "Drama",
    "Terror",
    "Ciencia ficción",
    "Crimen",
    "Animación",
    "Comedia",
    "Thriller"
  ], "El género debe estar dentro de las posibilidades")
})

export { filmSchema }